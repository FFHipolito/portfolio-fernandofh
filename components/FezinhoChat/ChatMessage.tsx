import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Bot, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  role: 'user' | 'assistant' | 'system' | 'data';
  content: string;
}

export function ChatMessage({ role, content }: ChatMessageProps) {
  const isUser = role === 'user';

  return (
    <div className={cn("flex w-full gap-3", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="flex-shrink-0 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 shadow-sm">
          <Bot className="h-5 w-5 text-white" />
        </div>
      )}

      <div
        className={cn(
          "relative px-4 py-3 text-sm max-w-[85%] rounded-2xl",
          isUser 
            ? "bg-purple-600 text-white rounded-br-none" 
            : "bg-white/10 [.light_&]:bg-white text-gray-200 [.light_&]:text-indigo-950 backdrop-blur-md border border-white/10 [.light_&]:border-indigo-100 shadow-none [.light_&]:shadow-sm rounded-bl-none"
        )}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">{content}</p>
        ) : (
          <div className="text-gray-200 [.light_&]:text-indigo-900 [&>p]:mb-3 [&>p:last-child]:mb-0 [&>ul]:mb-3 [&>ul]:list-disc [&>ul]:pl-5 [&>li]:mb-1 [&>strong]:text-white [.light_&]:[&>strong]:text-indigo-950">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          </div>
        )}
      </div>

      {isUser && (
        <div className="flex-shrink-0 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-gray-700/50 [.light_&]:bg-indigo-50 backdrop-blur-md border border-white/10 [.light_&]:border-indigo-100">
          <User className="h-5 w-5 text-gray-300 [.light_&]:text-indigo-400" />
        </div>
      )}
    </div>
  );
}
