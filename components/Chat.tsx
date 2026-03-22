"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useRef, useEffect, useState, useMemo } from "react";

export default function Chat({
  candidateSlug,
  initialQuestion,
  onQuestionSent,
}: {
  candidateSlug: string;
  initialQuestion?: string;
  onQuestionSent?: () => void;
}) {
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

  useEffect(() => {
    if (initialQuestion && !isLoading) {
      sendMessage({ text: initialQuestion });
      fetch("/api/questions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: candidateSlug, question: initialQuestion }),
      }).catch(() => {});
      onQuestionSent?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuestion]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const question = input.trim();
    sendMessage({ text: question });
    setInput("");
    fetch("/api/questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug: candidateSlug, question }),
    }).catch(() => {});
  };

  return (
    <div className="flex h-[560px] flex-col rounded-[24px] border border-[#223046] bg-[#111827]/22 p-4 sm:p-5 md:h-[600px] md:p-6">
      <div ref={scrollRef} className="flex-1 space-y-6 overflow-y-auto pb-4">
        {messages.length === 0 && (
          <p className="pt-12 text-center italic text-[#94a3b8]">
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
              className={`inline-block max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed sm:max-w-[80%] ${
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
              <div className="inline-block rounded-2xl bg-[#1e293b] px-4 py-3 text-sm text-[#94a3b8]">
                Thinking...
              </div>
            </div>
          )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-4 grid gap-3 border-t border-[#1e293b] pt-4 sm:grid-cols-[minmax(0,1fr)_auto]"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="min-w-0 rounded-xl bg-[#1e293b] px-4 py-3 text-sm text-[#e2e8f0] placeholder-[#64748b] focus:outline-none focus:ring-1 focus:ring-[#d97706]"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#d97706] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#b45309] disabled:opacity-40"
        >
          Send
        </button>
      </form>
    </div>
  );
}
