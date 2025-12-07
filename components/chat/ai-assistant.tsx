'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
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

export function AIAssistant({ className }: AIAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        "Welcome to the Cosmic OS! I'm your AI guide through CYPHER0X9's universe. Ask me about Web3, AI, blockchain, or anything else you'd like to explore.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
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

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';

      const assistantMessageId = `assistant-${Date.now()}`;
      setMessages((prev) => [
        ...prev,
        { id: assistantMessageId, role: 'assistant', content: '' },
      ]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          assistantMessage += chunk;

          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantMessageId
                ? { ...m, content: assistantMessage }
                : m
            )
          );
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          'fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-[#1A0A3D] to-[#6B21A8] border border-[#00D9FF]/30 shadow-lg shadow-[#00D9FF]/20 hover:shadow-[#00D9FF]/40 transition-all duration-300 group',
          className
        )}
        aria-label="Open AI Assistant"
      >
        <MessageSquare className="w-6 h-6 text-[#00D9FF] group-hover:scale-110 transition-transform" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-[#00FFB2] rounded-full animate-pulse" />
      </button>
    );
  }

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 flex flex-col glass-dark rounded-2xl border border-[#00D9FF]/20 shadow-2xl shadow-[#00D9FF]/10 overflow-hidden transition-all duration-300',
        isMinimized ? 'w-80 h-14' : 'w-96 h-[500px]',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-gradient-to-r from-[#1A0A3D]/50 to-[#6B21A8]/50">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Sparkles className="w-5 h-5 text-[#00D9FF]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#00FFB2] rounded-full animate-pulse" />
          </div>
          <span className="font-semibold text-white">Cosmic AI</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label={isMinimized ? 'Maximize' : 'Minimize'}
          >
            {isMinimized ? (
              <Maximize2 className="w-4 h-4 text-white/70" />
            ) : (
              <Minimize2 className="w-4 h-4 text-white/70" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-white/70" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  'flex gap-3',
                  message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                )}
              >
                <div
                  className={cn(
                    'flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center',
                    message.role === 'user'
                      ? 'bg-[#FFD700]/20'
                      : 'bg-[#00D9FF]/20'
                  )}
                >
                  {message.role === 'user' ? (
                    <User className="w-4 h-4 text-[#FFD700]" />
                  ) : (
                    <Bot className="w-4 h-4 text-[#00D9FF]" />
                  )}
                </div>
                <div
                  className={cn(
                    'flex-1 px-4 py-3 rounded-2xl text-sm',
                    message.role === 'user'
                      ? 'bg-[#FFD700]/10 text-white ml-8'
                      : 'bg-white/5 text-white/90 mr-8'
                  )}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}

            {isLoading && messages[messages.length - 1]?.content === '' && (
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#00D9FF]/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-[#00D9FF]" />
                </div>
                <div className="flex-1 px-4 py-3 rounded-2xl bg-white/5 mr-8">
                  <div className="flex items-center gap-2 text-white/60">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">Thinking...</span>
                  </div>
                </div>
              </div>
            )}

            {error && (
              <div className="px-4 py-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                Failed to get response. Please try again.
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="p-4 border-t border-white/10"
          >
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask the Cosmic AI..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#00D9FF]/50 focus:ring-1 focus:ring-[#00D9FF]/50 transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-[#1A0A3D] to-[#6B21A8] border border-[#00D9FF]/30 hover:border-[#00D9FF]/60 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 text-[#00D9FF] animate-spin" />
                ) : (
                  <Send className="w-5 h-5 text-[#00D9FF]" />
                )}
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}
