<script lang="ts">
import { runCommand } from './terminal/commands';

type HistoryEntry = { command: string, output: string[] };

let history = $state<HistoryEntry[]>([
  { command: '', output: ['Welcome. Type "help" to get started.'] }
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
    class=""
    bind:this={scrollEl}
>
    {#each history as entry}
        {#if entry.command}
            <div>
                <span>guest@portfolio:~$</span> {entry.command}
            </div>
        {/if}
        {#each entry.output as line}
            <div>{line}</div>
        {/each}
    {/each}

    <div>
        <span>guest@portfolio:~$</span>
        <input
            bind:this={inputEl}
            bind:value={currentInput}
            onkeydown={(e) => { handleSubmit(e); handleArrows(e); }}
            spellcheck="false"
            autocomplete="off"
        >
    </div>
</div>
