import type { Metadata } from "next";
import { Noto_Sans_KR, Geist_Mono } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI 인생설계 플랫폼 | 한컴 제안서",
  description: "AI 코칭, 실시간 맥락화, 게이미피케이션을 결합한 메타버스 기반 운세 및 인생설계 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="light">
      <body
        className={`${notoSansKr.variable} ${geistMono.variable} antialiased bg-white text-neutral-900`}
        style={{ fontFamily: 'var(--font-noto-sans-kr), "Noto Sans KR", sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
