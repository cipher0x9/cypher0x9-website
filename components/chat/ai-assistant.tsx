'use client';

import { useState, useRef, useEffect, FormEvent, useMemo } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  MessageSquare,
  X,
  Send,
  Loader2,
  Bot,
  User,
  Minimize2,
  Maximize2,
  Sparkles,
  Wallet,
  Copy,
  Check,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface AIAssistantProps {
  className?: string;
}

interface CodeBlockProps {
  inline?: boolean;
  className?: string;
  children: React.ReactNode;
}

function CodeBlock({ inline = false, className, children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const language = className?.replace('language-', '') ?? 'text';
  const code = useMemo(
    () => String(children).replace(/\n$/, ''),
    [children]
  );

  if (inline) {
    return (
      <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-[#00FFB2]">
        {children}
      </code>
    );
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="group relative my-4">
      <button
        type="button"
        onClick={handleCopy}
        className="absolute right-3 top-3 flex items-center gap-1 rounded-lg border border-white/10 bg-black/30 px-2 py-1 text-xs text-white/70 opacity-0 transition-all group-hover:opacity-100"
        aria-label="Copy code"
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-[#00FFB2]" /> Copied
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5 text-white/60" /> Copy
          </>
        )}
      </button>
      <pre className="overflow-auto rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white/90 shadow-inner shadow-[#00D9FF]/20">
        <code className={className}>
          {language !== 'text' && (
            <span className="mb-2 inline-block text-xs uppercase tracking-wide text-white/40">
              {language}
            </span>
          )}
          {code}
        </code>
      </pre>
    </div>
  );
}

const markdownComponents: Components = {
  code({ className, children }) {
    return (
      <CodeBlock className={className}>
        {children as React.ReactNode}
      </CodeBlock>
    );
  },
  p({ children }) {
    return <p className="leading-relaxed text-white/80">{children}</p>;
  },
  a({ children, href }) {
    return (
      <a
        href={href ?? '#'}
        target="_blank"
        rel="noreferrer"
        className="text-[#00D9FF] underline decoration-dotted underline-offset-4 hover:text-[#00FFB2]"
      >
        {children}
      </a>
    );
  },
  ul({ children }) {
    return <ul className="list-disc space-y-1 pl-6 text-white/80">{children}</ul>;
  },
  ol({ children }) {
    return (
      <ol className="list-decimal space-y-1 pl-6 text-white/80">{children}</ol>
    );
  },
};

function ChatMarkdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      className="prose prose-invert prose-sm max-w-none text-white/90"
      components={markdownComponents}
    >
      {content}
    </ReactMarkdown>
  );
}

export function AIAssistant({ className }: AIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'CYPHER AI online. I’m your resident Web3 strategist & AI architect. Ask about protocols, zk proofs, cosmic startups, or anything your curious mind is orbiting. ⚡️',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [walletPrimed, setWalletPrimed] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: input.trim(),
    };

    const conversation = [...messages, userMessage];
    setMessages(conversation);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: conversation.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error('Failed to get response');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';
      const assistantMessageId = `assistant-${Date.now()}`;

      setMessages((prev) => [
        ...prev,
        { id: assistantMessageId, role: 'assistant', content: '' },
      ]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantMessage += decoder.decode(value, { stream: true });
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMessageId ? { ...m, content: assistantMessage } : m
          )
        );
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setIsLoading(false);
    }
  };

  const typingIndicator = (
    <div className="flex gap-3 animate-fadeIn">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#00D9FF]/15 shadow-lg shadow-[#00D9FF]/20">
        <Bot className="h-4 w-4 text-[#00D9FF]" />
      </div>
      <div className="mr-10 flex-1 rounded-2xl border border-white/5 bg-white/5 px-4 py-3 shadow-lg shadow-[#00D9FF]/10">
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">
          CYPHER AI is synthesizing
        </p>
        <div className="mt-2 flex items-center gap-1">
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className="typing-dot"
              style={{ animationDelay: `${dot * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          'fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-[#1A0A3D] to-[#6B21A8] border border-[#00D9FF]/30 shadow-lg shadow-[#00D9FF]/20 hover:shadow-[#00D9FF]/40 transition-all duration-300 group animate-fadeIn',
          className
        )}
        aria-label="Open CYPHER AI"
      >
        <MessageSquare className="w-6 h-6 text-[#00D9FF] group-hover:scale-110 transition-transform" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-[#00FFB2] rounded-full animate-pulse" />
      </button>
    );
  }

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 flex flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-[#030014]/90 to-[#04021c]/80 shadow-[0_0_60px_rgba(0,217,255,0.15)] backdrop-blur-2xl transition-all duration-300 animate-fadeIn',
        isMinimized ? 'w-80 h-16' : 'w-[420px] h-[580px]',
        className
      )}
    >
      <div className="flex items-start justify-between border-b border-white/10 px-5 py-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-[#00D9FF]/40 blur-xl" />
              <Sparkles className="relative h-5 w-5 text-[#00D9FF]" />
            </div>
            <p className="text-sm font-semibold tracking-wide text-white">
              CYPHER AI · Command Console
            </p>
          </div>
          <p className="text-xs text-white/50">
            Web3 tactician & AI co-pilot. Online status:{' '}
            <span className="text-[#00FFB2]">stable</span>
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setWalletPrimed((prev) => !prev)}
            className={cn(
              'flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all',
              walletPrimed
                ? 'border-[#00FFB2]/60 bg-[#00FFB2]/10 text-[#00FFB2]'
                : 'border-white/10 bg-white/5 text-white/70 hover:border-[#00D9FF]/40'
            )}
          >
            <Wallet className="h-3.5 w-3.5" />
            {walletPrimed ? 'Wallet Primed' : 'Prep Wallet'}
          </button>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="rounded-full p-1.5 text-white/60 hover:bg-white/10"
            aria-label={isMinimized ? 'Maximize' : 'Minimize'}
          >
            {isMinimized ? (
              <Maximize2 className="h-4 w-4" />
            ) : (
              <Minimize2 className="h-4 w-4" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-1.5 text-white/60 hover:bg-white/10"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  'flex items-start gap-3 animate-fadeIn',
                  message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                )}
              >
                <div
                  className={cn(
                    'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border shadow-lg',
                    message.role === 'user'
                      ? 'border-[#FFD700]/30 bg-[#FFD700]/10 text-[#FFD700]'
                      : 'border-[#00D9FF]/30 bg-[#00D9FF]/10 text-[#00D9FF]'
                  )}
                >
                  {message.role === 'user' ? (
                    <User className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                </div>
                <div
                  className={cn(
                    'max-w-[70%] rounded-3xl border px-4 py-3 text-sm leading-relaxed shadow-lg backdrop-blur',
                    message.role === 'user'
                      ? 'border-[#FFD700]/30 bg-gradient-to-br from-[#1A0A3D]/60 to-[#6B21A8]/50 text-white glow-gold'
                      : 'border-[#00D9FF]/20 bg-white/5 text-white glow-cyan'
                  )}
                >
                  {message.role === 'assistant' ? (
                    <ChatMarkdown content={message.content || '...'} />
                  ) : (
                    <p className="whitespace-pre-wrap">{message.content}</p>
                  )}
                </div>
              </div>
            ))}

            {isLoading && typingIndicator}

            {error && (
              <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error.message}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-white/10 px-5 py-4"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40">
                <span className="h-1 w-1 rounded-full bg-[#00FFB2] animate-pulse" />
                Neural uplink waiting for your prompt
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 shadow-inner shadow-[#00D9FF]/10 focus-within:border-[#00D9FF]/50">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask CYPHER about zk, L2s, or cosmic ideas..."
                    className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none"
                    disabled={isLoading}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="rounded-2xl border border-[#00D9FF]/40 bg-gradient-to-br from-[#1A0A3D] to-[#6B21A8] p-3 text-[#00D9FF] transition-all hover:border-[#00FFB2]/60 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
