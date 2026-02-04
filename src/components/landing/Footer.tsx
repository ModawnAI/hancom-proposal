"use client";

import { Sparkle } from "@phosphor-icons/react";

const navLinks = [
  { label: "문제점", href: "#problem" },
  { label: "솔루션", href: "#solution" },
  { label: "기능", href: "#features" },
  { label: "시장", href: "#market" },
  { label: "기술", href: "#technology" },
  { label: "문의", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo & description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkle weight="fill" className="w-6 h-6 text-amber-400" />
              <span className="text-xl font-bold">DITTO</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              AI 기반 운세 × 인생설계 플랫폼
              <br />
              운세를 행동으로 연결합니다
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-neutral-300">바로가기</h4>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-neutral-300">연락처</h4>
            <div className="space-y-2 text-sm text-neutral-400">
              <p>contact@ditto.ai</p>
              <p>010-1234-5678</p>
              <p>서울특별시 강남구</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} DITTO. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-neutral-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              개인정보처리방침
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
