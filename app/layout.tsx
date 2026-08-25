import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://website-alpha-drab-34.vercel.app"),
  title: "AI Contest Korea | AI 공모전 모음",
  description: "대한민국 AI 공모전의 접수 일정과 참가 대상을 간결하게 비교하세요.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: "AI Contest Korea",
    description: "대한민국 AI 공모전의 접수 일정과 참가 대상을 간결하게 비교하세요.",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "AI Contest Korea",
    description: "대한민국 AI 공모전의 접수 일정과 참가 대상을 간결하게 비교하세요.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
