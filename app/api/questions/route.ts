import { storeQuestion, getPopularQuestions } from "@/lib/questions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { slug, question } = await req.json();
    if (!slug || !question) {
      return NextResponse.json({ error: "Missing slug or question" }, { status: 400 });
    }
    await storeQuestion(slug, question);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true }); // graceful degradation
  }
}

export async function GET(req: NextRequest) {
  try {
    const slug = req.nextUrl.searchParams.get("slug");
    if (!slug) {
      return NextResponse.json({ error: "Missing slug" }, { status: 400 });
    }
    const questions = await getPopularQuestions(slug);
    return NextResponse.json({ questions });
  } catch {
    return NextResponse.json({ questions: [] });
  }
}
