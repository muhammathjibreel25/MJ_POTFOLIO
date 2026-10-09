import React, { useState, useRef, useEffect } from 'react';
import { terminalCommands } from '../data/portfolioData';
import { CornerDownLeft, Copy, Check, RefreshCw } from 'lucide-react';

interface TerminalLine {
  id: string;
  command: string;
  output: string | string[];
  isError?: boolean;
}

export const Terminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      id: 'init-1',
      command: 'whoami',
      output: terminalCommands['whoami']
    },
    {
      id: 'init-2',
      command: 'skills',
      output: terminalCommands['skills']
    }
  ]);
  const [copied, setCopied] = useState(false);
  const terminalBodyRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const hasUserInteracted = useRef(false);

  const availableCommands = ['whoami', 'skills', 'projects', 'experience', 'focus', 'learning', 'contact', 'help', 'clear'];

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    hasUserInteracted.current = true;

    if (trimmed === 'clear') {
      setLines([]);
      setInputVal('');
      return;
    }

    const res = terminalCommands[trimmed];
    const newLine: TerminalLine = {
      id: `line-${Date.now()}-${Math.random()}`,
      command: cmdStr,
      output: res || `command not recognized: '${trimmed}'. Type 'help' to see valid commands.`,
      isError: !res
    };

    setLines((prev) => [...prev, newLine]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  useEffect(() => {
    // Only scroll the terminal's internal body after an intentional user command
    if (hasUserInteracted.current && terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [lines]);

  const copyTerminalHistory = () => {
    const text = lines
      .map((l) => `$ ${l.command}\n${Array.isArray(l.output) ? l.output.join('\n') : l.output}`)
      .join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="relative py-28 px-6 sm:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">07 //</span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">DEVELOPER CONSOLE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
            Interactive Terminal.
          </h2>
        </div>
        <p className="text-slate-400 text-sm font-mono max-w-md">
          // Run commands or click quick prompts below to inspect identity, stack, and current builds directly in the terminal.
        </p>
      </div>

      {/* Terminal Container with High-Tech Styling */}
      <div className="rounded-3xl bg-[#090b10]/95 border border-cyan-500/30 overflow-hidden shadow-2xl backdrop-blur-xl relative transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_25px_60px_-15px_rgba(56,189,248,0.18)]">
        {/* Top Gradient Edge */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-500" />

        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0d1017]/90">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-sm" />
            <span className="ml-3 font-mono text-xs text-slate-300 hidden sm:inline">
              jibreel@portfolio:~ <span className="text-cyan-400 font-semibold">(zsh)</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={copyTerminalHistory}
              className="flex items-center gap-1.5 text-[11px] font-mono text-slate-300 hover:text-cyan-300 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors shadow-sm"
              title="Copy session output"
              data-cursor="pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Log</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => handleCommand('clear')}
              className="flex items-center gap-1.5 text-[11px] font-mono text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors shadow-sm"
              title="Clear screen"
              data-cursor="pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Clear</span>
            </button>
          </div>
        </div>

        {/* Quick Command Chips */}
        <div className="px-6 py-3 border-b border-white/5 bg-[#0b0e14]/60 flex items-center gap-2 overflow-x-auto">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest shrink-0">
            Quick Prompts:
          </span>
          {availableCommands.map((cmd) => (
            <button
              key={cmd}
              type="button"
              onClick={() => handleCommand(cmd)}
              className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 font-mono text-xs border border-white/10 hover:border-cyan-400/40 transition-all shrink-0 shadow-sm"
              data-cursor="pointer"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div
          ref={terminalBodyRef}
          className="p-6 font-mono text-xs sm:text-sm text-slate-300 space-y-4 max-h-[460px] overflow-y-auto custom-scrollbar cursor-text"
          onClick={() => inputRef.current?.focus()}
        >
          {lines.map((line) => (
            <div key={line.id} className="space-y-1.5 animate-in fade-in duration-150">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <span className="text-slate-400">guest@muhammath-jibreel:~$</span>
                <span className="text-white">{line.command}</span>
              </div>
              <div className={`pl-4 leading-relaxed ${line.isError ? 'text-rose-400' : 'text-slate-300'}`}>
                {Array.isArray(line.output) ? (
                  line.output.map((outLine, idx) => (
                    <div key={idx} className="leading-snug py-0.5">
                      {outLine}
                    </div>
                  ))
                ) : (
                  <div>{line.output}</div>
                )}
              </div>
            </div>
          ))}

          {/* Active Input Line */}
          <div className="flex items-center gap-2 text-emerald-400 pt-2">
            <span className="text-slate-400 shrink-0">guest@muhammath-jibreel:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help' or command..."
              className="w-full bg-transparent text-white focus:outline-none font-mono text-xs sm:text-sm placeholder:text-slate-400"
              autoComplete="off"
              spellCheck={false}
              aria-label="Terminal command input"
            />
            <button
              type="button"
              onClick={() => handleCommand(inputVal)}
              className="p-1 rounded text-slate-400 hover:text-emerald-400 transition-colors"
              title="Submit command"
              aria-label="Run command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
