import { useChat, Message } from 'ai/react';
import { useEffect, useRef, useState } from 'react';
import { Send, Loader2, RefreshCw, MessageSquarePlus, X } from 'lucide-react';
import { ChatMessage } from './ChatMessage';

import { ChatDict } from './ChatWidget';

interface ChatWindowProps {
  onClose: () => void;
  dict: ChatDict;
}

export function ChatWindow({ onClose, dict }: ChatWindowProps) {
  const { messages, input, handleInputChange, handleSubmit, isLoading, reload, append, setMessages } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: 'welcome-msg',
        role: 'assistant',
        content: dict.welcome
      }
    ]
  });

  const handleNewChat = () => {
    setMessages([
      {
        id: 'welcome-msg',
        role: 'assistant',
        content: dict.welcome
      }
    ]);
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollRafRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hasDragged, setHasDragged] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const stopEdgeScroll = () => {
    if (scrollRafRef.current !== null) {
      cancelAnimationFrame(scrollRafRef.current);
      scrollRafRef.current = null;
    }
  };

  useEffect(() => {
    return () => stopEdgeScroll();
  }, []);

  const startEdgeScroll = (direction: 'left' | 'right') => {
    if (scrollRafRef.current !== null) return;
    const scrollStep = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += direction === 'left' ? -3 : 3;
        scrollRafRef.current = requestAnimationFrame(scrollStep);
      }
    };
    scrollRafRef.current = requestAnimationFrame(scrollStep);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    stopEdgeScroll();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    stopEdgeScroll();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;

    if (isDragging) {
      e.preventDefault();
      const x = e.pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      if (Math.abs(walk) > 5) setHasDragged(true);
      carouselRef.current.scrollLeft = scrollLeft - walk;
      return;
    }

    const rect = carouselRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const edgeThreshold = 40;

    if (x < edgeThreshold) {
      startEdgeScroll('left');
    } else if (x > rect.width - edgeThreshold) {
      startEdgeScroll('right');
    } else {
      stopEdgeScroll();
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="flex flex-col h-[calc(100dvh-140px)] max-h-[600px] min-h-[300px] w-[calc(100vw-2rem)] sm:w-[480px] md:w-[540px] lg:w-[600px] rounded-2xl bg-[#0F172A]/90 [.light_&]:bg-white/95 backdrop-blur-xl border border-white/10 [.light_&]:border-indigo-200 shadow-2xl [.light_&]:shadow-xl [.light_&]:shadow-indigo-100/50 overflow-hidden">
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
        <div className="flex items-center gap-1">
          <button
            onClick={handleNewChat}
            className="p-2 text-gray-400 hover:text-white [.light_&]:text-indigo-400 [.light_&]:hover:text-indigo-700 transition-colors rounded-full hover:bg-white/10 [.light_&]:hover:bg-indigo-100"
            title={dict.new_chat || "Nova conversa"}
          >
            <MessageSquarePlus className="h-4 w-4" />
          </button>
          <button
            onClick={() => reload()}
            className="p-2 text-gray-400 hover:text-white [.light_&]:text-indigo-400 [.light_&]:hover:text-indigo-700 transition-colors rounded-full hover:bg-white/10 [.light_&]:hover:bg-indigo-100"
            title={dict.reload}
          >
            <RefreshCw className="h-4 w-4" />
          </button>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white [.light_&]:text-indigo-400 [.light_&]:hover:text-indigo-700 transition-colors rounded-full hover:bg-white/10 [.light_&]:hover:bg-indigo-100"
            title="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
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
        {messages.length === 1 && !isLoading && dict.suggestions && (
          <div
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-2 mt-4 overflow-x-auto pb-2 cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {dict.suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={(e) => {
                  if (hasDragged) {
                    e.preventDefault();
                    return;
                  }
                  append({ role: 'user', content: suggestion });
                }}
                className="whitespace-nowrap flex-shrink-0 text-xs bg-white/10 hover:bg-white/20 [.light_&]:bg-indigo-100 [.light_&]:hover:bg-indigo-200 text-white [.light_&]:text-indigo-900 px-3 py-1.5 rounded-full transition-colors border border-white/5 [.light_&]:border-indigo-200 text-left pointer-events-auto select-none"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-3 bg-white/5 [.light_&]:bg-indigo-50/80 border-t border-white/10 [.light_&]:border-indigo-200">
        <div className="relative flex items-center">
          <input
            className="w-full bg-white/10 [.light_&]:bg-white text-white [.light_&]:text-indigo-950 text-base sm:text-sm rounded-full pl-4 pr-12 py-3 border border-transparent [.light_&]:border-indigo-100 outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-gray-400 [.light_&]:placeholder:text-indigo-300 shadow-none [.light_&]:shadow-sm"
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
