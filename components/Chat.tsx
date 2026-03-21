"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useRef, useEffect, useState, useMemo } from "react";

export default function Chat({ candidateSlug }: { candidateSlug: string }) {
  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
        body: { candidateSlug },
      }),
    [candidateSlug]
  );

  const { messages, sendMessage, status } = useChat({ transport });

  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const isLoading = status === "streaming" || status === "submitted";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  };

  return (
    <div className="flex flex-col h-[600px]">
      <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-6 pb-4">
        {messages.length === 0 && (
          <p className="text-[#94a3b8] italic text-center pt-12">
            Ask this candidate anything about their positions, priorities, or
            how they&apos;d handle a specific issue.
          </p>
        )}
        {messages.map((m) => (
          <div
            key={m.id}
            className={`${m.role === "user" ? "text-right" : "text-left"}`}
          >
            <div
              className={`inline-block max-w-[80%] px-4 py-3 rounded-lg text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-[#d97706] text-white"
                  : "bg-[#1e293b] text-[#e2e8f0]"
              }`}
            >
              <p className="whitespace-pre-wrap">
                {m.parts
                  ?.filter((p) => p.type === "text")
                  .map((p) => p.text)
                  .join("") || ""}
              </p>
            </div>
          </div>
        ))}
        {isLoading &&
          messages.length > 0 &&
          messages[messages.length - 1]?.role === "user" && (
            <div className="text-left">
              <div className="inline-block px-4 py-3 rounded-lg bg-[#1e293b] text-[#94a3b8] text-sm">
                Thinking...
              </div>
            </div>
          )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex gap-3 pt-4 border-t border-[#1e293b]"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 bg-[#1e293b] text-[#e2e8f0] placeholder-[#64748b] px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#d97706]"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="px-6 py-3 bg-[#d97706] text-white rounded-lg text-sm font-medium hover:bg-[#b45309] disabled:opacity-40 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
}
