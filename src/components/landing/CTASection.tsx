"use client";

import { motion } from "framer-motion";
import { Envelope, Phone, Handshake, ChartLineUp } from "@phosphor-icons/react";

export function CTASection() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1E3A5F] via-[#2D4A6F] to-[#1E3A5F] text-white overflow-hidden"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            함께 새로운 시장을
            <br />
            <span className="text-amber-400">열어갑니다</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            투자, 파트너십, 사업 협력에 관심이 있으시다면
            <br className="hidden sm:block" />
            언제든지 연락 주세요
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Investment inquiry */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-amber-400/20 flex items-center justify-center">
                <ChartLineUp weight="duotone" className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">투자 문의</h3>
                <p className="text-white/60 text-sm">Investment Inquiry</p>
              </div>
            </div>
            <p className="text-white/70 mb-6">
              시리즈 A 투자 라운드를 준비 중입니다.
              <br />
              IR 자료 및 상세 사업 계획을 공유드립니다.
            </p>
            <a
              href="mailto:invest@ditto.ai"
              className="inline-flex items-center gap-2 text-amber-400 font-medium hover:text-amber-300 transition-colors"
            >
              <Envelope className="w-5 h-5" />
              invest@ditto.ai
            </a>
          </motion.div>

          {/* Partnership inquiry */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-400/20 flex items-center justify-center">
                <Handshake weight="duotone" className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">파트너십 문의</h3>
                <p className="text-white/60 text-sm">Partnership Inquiry</p>
              </div>
            </div>
            <p className="text-white/70 mb-6">
              콘텐츠 제휴, 기술 협력, 사업 협력 등
              <br />
              다양한 형태의 파트너십을 환영합니다.
            </p>
            <a
              href="mailto:partner@ditto.ai"
              className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors"
            >
              <Envelope className="w-5 h-5" />
              partner@ditto.ai
            </a>
          </motion.div>
        </div>

        {/* Direct contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-white/50 text-sm mb-4">또는 직접 연락하기</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="tel:+82-10-1234-5678"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Phone weight="duotone" className="w-5 h-5" />
              <span>010-1234-5678</span>
            </a>
            <span className="text-white/30">|</span>
            <a
              href="mailto:contact@ditto.ai"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Envelope weight="duotone" className="w-5 h-5" />
              <span>contact@ditto.ai</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
