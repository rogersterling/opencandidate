"use client";

import { useState } from "react";
import Chat from "./Chat";
import PopularQuestions from "./PopularQuestions";
import type { FAQ } from "@/lib/candidates";

export default function ChatWithQuestions({
  candidateSlug,
  fallbackFaqs,
}: {
  candidateSlug: string;
  fallbackFaqs: FAQ[];
}) {
  const [pendingQuestion, setPendingQuestion] = useState<string | undefined>();

  return (
    <div className="space-y-8">
      <div>
        <p className="text-[#64748b] text-xs uppercase tracking-[0.2em] mb-4">
          Popular Questions
        </p>
        <PopularQuestions
          candidateSlug={candidateSlug}
          fallbackFaqs={fallbackFaqs}
          onQuestionClick={(q) => setPendingQuestion(q)}
        />
      </div>
      <Chat
        candidateSlug={candidateSlug}
        initialQuestion={pendingQuestion}
        onQuestionSent={() => setPendingQuestion(undefined)}
      />
    </div>
  );
}
