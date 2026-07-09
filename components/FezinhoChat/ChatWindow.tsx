import { useChat, Message } from 'ai/react';
import { useEffect, useRef } from 'react';
import { Send, Loader2, RefreshCw } from 'lucide-react';
import { ChatMessage } from './ChatMessage';

import { ChatDict } from './ChatWidget';

interface ChatWindowProps {
  onClose: () => void;
  dict: ChatDict;
}

export function ChatWindow({ onClose, dict }: ChatWindowProps) {
  const { messages, input, handleInputChange, handleSubmit, isLoading, reload } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: 'welcome-msg',
        role: 'assistant',
        content: dict.welcome
      }
    ]
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="flex flex-col h-[420px] w-[calc(100vw-3rem)] sm:w-[400px] rounded-2xl bg-[#0F172A]/90 [.light_&]:bg-white/95 backdrop-blur-xl border border-white/10 [.light_&]:border-indigo-200 shadow-2xl [.light_&]:shadow-xl [.light_&]:shadow-indigo-100/50 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-white/5 [.light_&]:bg-indigo-50/80 border-b border-white/10 [.light_&]:border-indigo-200">
        <div className="flex items-center gap-2">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-blue-500">
            <span className="text-white text-xs font-bold">Fe</span>
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border border-[#0F172A]"></span>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white [.light_&]:text-indigo-950">{dict.title}</h3>
            <p className="text-xs text-gray-400 [.light_&]:text-indigo-500 leading-none">{dict.online}</p>
          </div>
        </div>
        <button
          onClick={() => reload()}
          className="p-2 text-gray-400 hover:text-white [.light_&]:text-indigo-400 [.light_&]:hover:text-indigo-700 transition-colors rounded-full hover:bg-white/10 [.light_&]:hover:bg-indigo-100"
          title={dict.reload}
        >
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-purple-600/50 scrollbar-track-transparent">
        {messages.map((m: Message) => (
          <ChatMessage key={m.id} role={m.role as 'user' | 'assistant' | 'system' | 'data'} content={m.content} />
        ))}
        {isLoading && (
          <div className="flex items-center gap-2 text-gray-400 [.light_&]:text-indigo-400 text-sm">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>{dict.typing}</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-3 bg-white/5 [.light_&]:bg-indigo-50/80 border-t border-white/10 [.light_&]:border-indigo-200">
        <div className="relative flex items-center">
          <input
            className="w-full bg-white/10 [.light_&]:bg-white text-white [.light_&]:text-indigo-950 text-sm rounded-full pl-4 pr-12 py-3 border border-transparent [.light_&]:border-indigo-100 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-gray-400 [.light_&]:placeholder:text-indigo-300 shadow-none [.light_&]:shadow-sm"
            value={input}
            onChange={handleInputChange}
            placeholder={dict.placeholder}
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-1 p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
