export type CommandOutput = string[] | { type: 'component'; name: string };

export const commands: Record<string, () => CommandOutput> = {
  whoami: () => ['JoelFaldín - web & systems developer'],
  help: () => Object.keys(commands).map(c => `  ${c}`),
  abour: () => [
    'Full Stack developer exploring systems and networking.',
    'I like to understand what is going on underneath the services I use.'
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
