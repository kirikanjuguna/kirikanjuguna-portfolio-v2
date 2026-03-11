// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import Dock from "@/components/Dock";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: "Kirika Njuguna | Software Engineer",
  description: "Software Engineer building modern scalable and world-class full-stack applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${sora.variable} bg-[#0f0f14] text-white antialiased`}
      >
        <CursorGlow />
        <ScrollProgress />
        <Dock />
        {children}
      </body>
    </html>
  );
}
