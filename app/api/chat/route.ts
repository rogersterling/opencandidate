import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { getCandidate, buildSystemPrompt } from "@/lib/candidates";

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages, candidateSlug } = await req.json();

  const candidate = getCandidate(candidateSlug);
  if (!candidate) {
    return new Response("Candidate not found", { status: 404 });
  }

  // Convert UI messages to model messages
  const modelMessages = messages.map(
    (m: { role: string; parts?: { type: string; text: string }[]; content?: string }) => ({
      role: m.role as "user" | "assistant",
      content:
        m.parts
          ?.filter((p: { type: string }) => p.type === "text")
          .map((p: { text: string }) => p.text)
          .join("") || m.content || "",
    })
  );

  const result = streamText({
    model: openai("gpt-4o"),
    system: buildSystemPrompt(candidate),
    messages: modelMessages,
  });

  return result.toUIMessageStreamResponse();
}
