import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const candidate = searchParams.get("candidate");
  const tagline = searchParams.get("tagline");

  const title = candidate || "OpenCandidate";
  const subtitle = candidate && tagline
    ? tagline
    : "Every politician has a hidden prompt. Make it readable.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          backgroundColor: "#0f172a",
          padding: "80px",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            marginBottom: "40px",
          }}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#d97706"
              strokeWidth="8"
              strokeDasharray="220 32"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div
          style={{
            fontSize: candidate ? 48 : 64,
            fontWeight: 700,
            color: "#d97706",
            lineHeight: 1.1,
            marginBottom: "24px",
            fontFamily: "serif",
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: candidate ? 28 : 32,
            color: "#faf7f2",
            lineHeight: 1.4,
            maxWidth: "900px",
          }}
        >
          {subtitle}
        </div>

        {!candidate && (
          <div
            style={{
              fontSize: 18,
              color: "#64748b",
              marginTop: "40px",
              letterSpacing: "0.15em",
              textTransform: "uppercase" as const,
            }}
          >
            opencandidate.org
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
