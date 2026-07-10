"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X } from "lucide-react";
import { ChatWindow } from "./ChatWindow";

export interface ChatDict {
  title: string;
  online: string;
  reload: string;
  new_chat?: string;
  typing: string;
  placeholder: string;
  welcome: string;
  suggestions?: string[];
}

interface ChatWidgetProps {
  dict: ChatDict;
}

export function ChatWidget({ dict }: ChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={widgetRef} className="fixed bottom-4 right-6 z-50 flex flex-col items-end gap-2">
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, y: 0, scale: 1, pointerEvents: "auto" } : { opacity: 0, y: 20, scale: 0.9, pointerEvents: "none" }}
        transition={{ duration: 0.3 }}
        className="origin-bottom-right"
      >
        <ChatWindow onClose={() => setIsOpen(false)} dict={dict} />
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300 overflow-hidden"
        aria-label="Toggle Fezinho AI Chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="avatar"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <Bot className="h-6 w-6 text-white" />
              <span className="absolute top-[6px] right-[6px] flex h-[10px] w-[10px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-[10px] w-[10px] bg-green-500 border border-purple-600"></span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
