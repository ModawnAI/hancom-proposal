import {
  Hero,
  Problem,
  Solution,
  Features,
  DailyExperience,
  MarketValidation,
  Technology,
  CTASection,
  Footer,
} from "@/components/landing";

export const metadata = {
  title: "DITTO - AI 운세 × 인생설계 플랫폼",
  description:
    "운세를 보는 것에서, 운세대로 사는 것으로. AI 기반 실시간 맥락화 운세와 인생 설계 플랫폼",
};

export default function LandingPage() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <DailyExperience />
      <MarketValidation />
      <Technology />
      <CTASection />
      <Footer />
    </main>
  );
}
