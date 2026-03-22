import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "OpenCandidate turns a campaign platform into a public governing system. AI applies it to bills, budgets, and major decisions so the public can see alignment, override, and drift.";

export const metadata: Metadata = {
  title: "OpenCandidate — Hold politicians to the platform they ran on.",
  description,
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  metadataBase: new URL("https://opencandidate.org"),
  openGraph: {
    title: "OpenCandidate — Hold politicians to the platform they ran on.",
    description,
    url: "https://opencandidate.org",
    siteName: "OpenCandidate",
    type: "website",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "OpenCandidate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenCandidate — Hold politicians to the platform they ran on.",
    description,
    images: ["/api/og"],
  },
  other: {
    "theme-color": "#0f172a",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-[#0f172a] text-[#faf7f2] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
