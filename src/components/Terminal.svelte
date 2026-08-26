<script lang="ts">
import { runCommand } from './terminal/commands';

type HistoryEntry = { command: string, output: string[] };

let history = $state<HistoryEntry[]>([
  { command: 'whoami', output: ['Joel Faldín - web and systems developer'] },
  { command: 'cat focus.txt', output: ['Learning how computers work by rebuilding the pieces from scratch. Mostly in Go, in my free time.'] },
  { command: 'ls ~/interests', output: ['networking/ concurrenct/ web-development/ linux/'] }
])
let currentInput = $state('');
let inputEl: HTMLInputElement;
let scrollEl: HTMLDivElement;

let commandLog: string[] = $state([]);
let historyIndex = $state(-1);

function handleSubmit(e: KeyboardEvent) {
  if (e.key != "Enter") return;

  const input = currentInput;

  if (input.trim().toLowerCase() === 'clear') {
    history = [];
  } else {
    const output = runCommand(input);
    history = [...history, { command: input, output }];
  }

  if (input.trim()) {
    commandLog = [...commandLog, input];
    historyIndex = commandLog.length;
  }

  currentInput = '';

  queueMicrotask(() => {
    scrollEl?.scrollTo({ top: scrollEl.scrollHeight });
  });
}

function handleArrows(e: KeyboardEvent) {
  if (e.key === 'ArrowUp') {
    if (historyIndex > 0) {
      historyIndex--;
      currentInput = commandLog[historyIndex];
    }
  } else if (e.key === "ArrowDown") {
    if (historyIndex < commandLog.length - 1) {
      historyIndex++;
      currentInput = commandLog[historyIndex];
    } else {
      historyIndex = commandLog.length;
      currentInput = '';
    }
  }
}
</script>

<div
    class="border rounded-lg overflow-hidden font-mono shadow-black/40"
    bind:this={scrollEl}
>
    <div class="flex items-center gap-1.5 px-2.5 py-3.5 bg-secondary">
        <span class="w-3 h-3 rounded-full bg-red-500"></span>
        <span class="w-3 h-3 rounded-full bg-gray-500"></span>
        <span class="w-3 h-3 rounded-full bg-blue-500"></span>
        <span class="text-sm text-muted-foreground ml-3">JoelF@dev</span>
    </div>

    <div class="p-2">
        {#each history as entry}
            {#if entry.command}
                <div class="text-foreground">
                    <span class="text-primary">guest@portfolio:~$</span> {entry.command}
                </div>
            {/if}
            {#each entry.output as line}
                <div class="text-muted-foreground">{line}</div>
            {/each}
        {/each}

        <div>
            <span class="text-primary">guest@portfolio:~$</span>
            <input
                bind:this={inputEl}
                bind:value={currentInput}
                onkeydown={(e) => { handleSubmit(e); handleArrows(e); }}
                spellcheck="false"
                autocomplete="off"
                class="text-foreground"
            >
        </div>
    </div>
</div>
