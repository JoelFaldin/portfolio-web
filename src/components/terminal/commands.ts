type CommandLine =
  | string
  | { type: 'text'; content: string }
  | { type: 'link'; content: string, url: string };

export type CommandOutput = CommandLine[];

export const commands: Record<string, () => CommandOutput> = {
  whoami: () => {
    return [{ type: 'text', content: 'JoelFaldín - web & systems developer' }]
  },
  help: () => Object.keys(commands).map(c => `  ${c}`),
  about: () => [
    'Full Stack developer exploring systems and networking.',
    'I like to understand what is going on underneath the services I use.'
  ],
  skills: () => [
    { type: 'text', content: 'React, Next, Angular, Astro, Vue' },
    { type: 'text', content: 'Express, NestJS, Java' },
    { type: 'text', content: 'TypeScript, Go' },
  ],
  projects: () => [
    { type: 'link', content: 'BlackSharkWeb', url: 'https://github.com/JoelFaldin/blacksharkweb-2026' },
    { type: 'link', content: 'ConnectDesk', url: 'https://github.com/JoelFaldin/ConnectDesk-Frontend' },
    { type: 'link', content: 'godiff', url: 'https://github.com/JoelFaldin/godiff' },
    { type: 'link', content: 'gg', url: 'https://github.com/JoelFaldin/gg' },
    { type: 'link', content: 'mux-demo', url: 'https://github.com/JoelFaldin/mux-demo' },
  ],
  contact: () => [
    { type: 'link', content: 'Email', url: 'joelfaldin@gmail.com' },
    { type: 'link', content: 'Github', url: 'https://github.com/JoelFaldin' },
  ],
  clear: () => [],
}

export function runCommand(input: string): CommandOutput {
  const cmd = input.trim().toLowerCase();

  if (!cmd) return [];

  const handler = commands[cmd];

  if (!handler) return [`Command not found: ${cmd}`, `try 'help'.`];

  const result = handler();

  return Array.isArray(result) ? result : [];
}
