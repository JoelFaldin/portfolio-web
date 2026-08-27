<script lang="ts">
import { tick } from 'svelte';
import { runCommand } from './terminal/commands';

type HistoryEntry = { command: string, output: string[] };

let history = $state<HistoryEntry[]>([
  { command: 'whoami', output: ['Joel Faldín - web and systems developer'] },
  { command: 'cat focus.txt', output: ['Learning how computers work by rebuilding the pieces from scratch. Mostly in Go, in my free time.'] },
  { command: 'ls ~/interests', output: ['networking/ concurrenct/ web-development/ linux/'] }
])
let currentInput = $state('');
let scrollEl: HTMLDivElement;
let inputEl: HTMLInputElement;

let isTyping: boolean = $state(false);
let typingTimeout: ReturnType<typeof setTimeout>;

let commandLog: string[] = $state([]);
let historyIndex = $state(-1);

$effect(() => {
  history.length;

  tick().then(() => {
    scrollEl.scrollTo({ top: scrollEl.scrollHeight, behavior: 'smooth' });
  })
})

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

function handleType() {
  isTyping = true;

  clearTimeout(typingTimeout);

  typingTimeout = setTimeout(() => {
    isTyping = false;
  }, 500)
}
</script>

<div
    class="border border-border rounded-lg overflow-hidden font-mono shadow-black/40"
>
    <div class="flex items-center gap-1.5 px-2.5 py-3.5 bg-secondary">
        <span class="w-3 h-3 rounded-full bg-red-500"></span>
        <span class="w-3 h-3 rounded-full bg-gray-500"></span>
        <span class="w-3 h-3 rounded-full bg-blue-500"></span>
        <span class="text-sm text-muted-foreground ml-3">JoelF@dev</span>
    </div>

    <div class="px-4 py-5 bg-background h-60 overflow-y-auto" bind:this={scrollEl}>
        {#each history as entry}
            {#if entry.command}
                <div class="text-foreground">
                    <span class="text-primary">~$</span> {entry.command}
                </div>
            {/if}
            {#each entry.output as line}
                <div class="text-muted-foreground">{line}</div>
            {/each}
        {/each}

        <div class="text-foreground">
            <span class="text-primary">~$</span>
            <input
                bind:this={inputEl}
                bind:value={currentInput}
                onkeydown={(e) => { handleSubmit(e); handleArrows(e); }}
                oninput={handleType}
                spellcheck="false"
                autocomplete="off"
                class="flex-1 bg-transparent border-none outline-none font-mono text-inherit caret-terminal cursor-typing"
                class:typing={isTyping}
            >
        </div>
    </div>
</div>

<style>
    .caret-terminal {
        caret-color: var(--color-primary);
        animation: blink 1s step-end infinite;
    }

    .cursor-typing.typing {
        animation: none;
        opacity: 1;
    }

    @keyframes blink {
        0%, 50% { caret-color: var(--color-primary) }
        50.01%, 100% { caret-color: transparent }
    }
</style>
