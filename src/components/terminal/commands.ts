export type CommandOutput = string[] | { type: 'component'; name: string };

export const commands: Record<string, () => CommandOutput> = {
  whoami: () => ['JoelFaldín - web & systems developer'],
  help: () => Object.keys(commands).map(c => `  ${c}`),
  about: () => [
    'Full Stack developer exploring systems and networking.',
    'I like to understand what is going on underneath the services I use.'
  ],
  skills: () => [
    'React, Next, Angular, Astro, Vue',
    'Express, NestJS, Java',
    'TypeScript, Go',
  ],
  projects: () => [
    'BlackSharkWeb',
    'ConnectDesk',
    'godiff',
    'gg',
    'mux-demo'
  ],
  contact: () => [
    'joelfaldin@gmail.com',
    'https://github.com/JoelFaldin'
  ],
  clear: () => [],
}

export function runCommand(input: string): string[] {
  const cmd = input.trim().toLowerCase();

  if (!cmd) return [];

  const handler = commands[cmd];

  if (!handler) return [`Command not found: ${cmd}`, `try 'help'.`];

  const result = handler();

  return Array.isArray(result) ? result : [];
}
