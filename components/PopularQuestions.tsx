"use client";

import { useEffect, useState } from "react";
import type { FAQ } from "@/lib/candidates";

interface Props {
  candidateSlug: string;
  fallbackFaqs: FAQ[];
  onQuestionClick: (question: string) => void;
}

export default function PopularQuestions({
  candidateSlug,
  fallbackFaqs,
  onQuestionClick,
}: Props) {
  const [questions, setQuestions] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(`/api/questions?slug=${candidateSlug}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.questions?.length > 0) {
          setQuestions(data.questions.slice(0, 10));
        }
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, [candidateSlug]);

  const displayQuestions =
    questions.length > 0
      ? questions
      : fallbackFaqs.map((f) => f.question);

  if (!loaded) return null;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {displayQuestions.map((q, i) => (
          <button
            key={i}
            onClick={() => onQuestionClick(q)}
            className="rounded-xl bg-[#1e293b] px-3 py-2 text-left text-sm leading-6 text-[#94a3b8] transition-colors hover:bg-[#334155] hover:text-[#faf7f2]"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}
