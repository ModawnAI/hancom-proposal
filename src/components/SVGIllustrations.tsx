"use client";

export function FlowDiagram() {
  return (
    <svg viewBox="0 0 650 200" className="w-full max-w-5xl mx-auto" fill="none">
      {/* Fortune Box */}
      <rect x="20" y="70" width="110" height="60" rx="8" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="75" y="95" textAnchor="middle" className="fill-current text-sm font-medium">운세</text>
      <text x="75" y="115" textAnchor="middle" className="fill-current text-xs opacity-60">사주 / 점성술</text>

      {/* Arrow 1 */}
      <line x1="130" y1="100" x2="170" y2="100" className="stroke-current" strokeWidth="2" />
      <polygon points="170,95 185,100 170,105" className="fill-current" />

      {/* AI Box */}
      <rect x="185" y="70" width="110" height="60" rx="8" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="240" y="95" textAnchor="middle" className="fill-current text-sm font-medium">AI 엔진</text>
      <text x="240" y="115" textAnchor="middle" className="fill-current text-xs opacity-60">실시간 맥락화</text>

      {/* Arrow 2 */}
      <line x1="295" y1="100" x2="335" y2="100" className="stroke-current" strokeWidth="2" />
      <polygon points="335,95 350,100 335,105" className="fill-current" />

      {/* Action Box */}
      <rect x="350" y="70" width="110" height="60" rx="8" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="405" y="95" textAnchor="middle" className="fill-current text-sm font-medium">인생설계</text>
      <text x="405" y="115" textAnchor="middle" className="fill-current text-xs opacity-60">행동 / 목표</text>

      {/* Arrow 3 */}
      <line x1="460" y1="100" x2="510" y2="100" className="stroke-current" strokeWidth="2" />
      <polygon points="510,95 525,100 510,105" className="fill-current" />

      {/* Growth Circle */}
      <circle cx="570" cy="100" r="35" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="570" y="105" textAnchor="middle" className="fill-current text-sm font-bold">성장</text>
    </svg>
  );
}

export function MetaverseConceptDiagram() {
  return (
    <svg viewBox="0 0 540 320" className="w-full max-w-3xl mx-auto" fill="none">
      {/* Top: Saju Data */}
      <rect x="170" y="20" width="200" height="50" rx="8" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="270" y="50" textAnchor="middle" className="fill-current text-sm font-medium">사주 / 점성술 데이터</text>

      {/* Arrow down */}
      <line x1="270" y1="70" x2="270" y2="100" className="stroke-current" strokeWidth="2" />
      <polygon points="265,100 270,115 275,100" className="fill-current" />

      {/* Digital DNA Box */}
      <rect x="170" y="115" width="200" height="50" rx="8" className="stroke-current" strokeWidth="2" strokeDasharray="4 4" fill="none" />
      <text x="270" y="145" textAnchor="middle" className="fill-current text-sm font-medium">디지털 DNA</text>

      {/* Split arrows */}
      <line x1="220" y1="165" x2="140" y2="200" className="stroke-current" strokeWidth="2" />
      <line x1="320" y1="165" x2="400" y2="200" className="stroke-current" strokeWidth="2" />

      {/* Left: Avatar */}
      <rect x="40" y="200" width="160" height="50" rx="8" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="120" y="225" textAnchor="middle" className="fill-current text-sm font-medium">아바타 외형</text>
      <text x="120" y="240" textAnchor="middle" className="fill-current text-xs opacity-60">성격 반영</text>

      {/* Right: AI Behavior */}
      <rect x="340" y="200" width="160" height="50" rx="8" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="420" y="225" textAnchor="middle" className="fill-current text-sm font-medium">AI 행동 패턴</text>
      <text x="420" y="240" textAnchor="middle" className="fill-current text-xs opacity-60">격국별 특성</text>

      {/* Merge arrows */}
      <line x1="120" y1="250" x2="220" y2="275" className="stroke-current" strokeWidth="2" />
      <line x1="420" y1="250" x2="320" y2="275" className="stroke-current" strokeWidth="2" />

      {/* Bottom: Experience */}
      <rect x="170" y="275" width="200" height="35" rx="8" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="270" y="298" textAnchor="middle" className="fill-current text-sm font-medium">메타버스 체험</text>
    </svg>
  );
}

export function RoadmapDiagram() {
  return (
    <svg viewBox="0 0 900 120" className="w-full max-w-6xl mx-auto" fill="none">
      {/* Timeline */}
      <line x1="30" y1="40" x2="870" y2="40" className="stroke-current opacity-30" strokeWidth="2" />

      {/* 2월 */}
      <circle cx="80" cy="40" r="20" className="stroke-current fill-current" strokeWidth="2" />
      <text x="80" y="45" textAnchor="middle" className="fill-white text-xs font-bold">2월</text>
      <text x="80" y="85" textAnchor="middle" className="fill-current text-sm font-medium">MVP 개발</text>

      {/* Arrow 1 */}
      <polygon points="140,35 155,40 140,45" className="fill-current opacity-50" />

      {/* 3월 - Launch */}
      <circle cx="230" cy="40" r="24" className="fill-black stroke-black" strokeWidth="3" />
      <text x="230" y="46" textAnchor="middle" fill="white" className="text-xs font-bold">3월</text>
      <text x="230" y="85" textAnchor="middle" className="fill-current text-sm font-bold">1차 출시</text>

      {/* Arrow 2 */}
      <polygon points="300,35 315,40 300,45" className="fill-current opacity-50" />

      {/* 4-6월 */}
      <circle cx="400" cy="40" r="20" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="400" y="45" textAnchor="middle" className="fill-current text-xs font-bold">4-6월</text>
      <text x="400" y="85" textAnchor="middle" className="fill-current text-sm font-medium">확장 1단계</text>

      {/* Arrow 3 */}
      <polygon points="470,35 485,40 470,45" className="fill-current opacity-50" />

      {/* 7월 - Major Update */}
      <circle cx="570" cy="40" r="22" className="fill-black stroke-black" strokeWidth="2" />
      <text x="570" y="46" textAnchor="middle" fill="white" className="text-xs font-bold">7월</text>
      <text x="570" y="85" textAnchor="middle" className="fill-current text-sm font-bold">대규모 업데이트</text>

      {/* Arrow 4 */}
      <polygon points="640,35 655,40 640,45" className="fill-current opacity-50" />

      {/* 하반기 */}
      <circle cx="780" cy="40" r="20" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="780" y="45" textAnchor="middle" className="fill-current text-xs font-bold">하반기</text>
      <text x="780" y="85" textAnchor="middle" className="fill-current text-sm font-medium">생태계 확장</text>
    </svg>
  );
}

export function CompetitiveGapDiagram() {
  return (
    <svg viewBox="0 0 600 250" className="w-full max-w-4xl mx-auto" fill="none">
      {/* Matrix Grid */}
      <line x1="100" y1="50" x2="100" y2="200" className="stroke-current opacity-30" strokeWidth="1" />
      <line x1="50" y1="125" x2="550" y2="125" className="stroke-current opacity-30" strokeWidth="1" />

      {/* Axis Labels */}
      <text x="300" y="230" textAnchor="middle" className="fill-current text-xs opacity-60">인생설계 통합도</text>
      <text x="30" y="125" textAnchor="middle" className="fill-current text-xs opacity-60" transform="rotate(-90, 30, 125)">AI 깊이</text>

      {/* Competitor Dots */}
      {/* 점신 */}
      <circle cx="150" cy="80" r="12" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="150" y="60" textAnchor="middle" className="fill-current text-xs">점신</text>

      {/* 청월당 */}
      <circle cx="200" cy="100" r="12" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="200" y="80" textAnchor="middle" className="fill-current text-xs">청월당</text>

      {/* 헬로봇 */}
      <circle cx="180" cy="140" r="12" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="180" y="165" textAnchor="middle" className="fill-current text-xs">헬로봇</text>

      {/* Fabulous */}
      <circle cx="380" cy="170" r="12" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="380" y="195" textAnchor="middle" className="fill-current text-xs">Fabulous</text>

      {/* Co-Star */}
      <circle cx="250" cy="90" r="12" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="275" y="85" textAnchor="start" className="fill-current text-xs">Co-Star</text>

      {/* Our Position */}
      <circle cx="450" cy="70" r="18" className="fill-current" />
      <text x="450" y="75" textAnchor="middle" className="fill-white text-xs font-bold">우리</text>
      <text x="450" y="45" textAnchor="middle" className="fill-current text-sm font-medium">목표 포지션</text>
    </svg>
  );
}

export function PentagramDiagram() {
  return (
    <svg viewBox="0 0 300 300" className="w-full max-w-xs mx-auto" fill="none">
      {/* Pentagon points */}
      {/* Wood - Top */}
      <circle cx="150" cy="30" r="25" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="150" y="35" textAnchor="middle" className="fill-current text-xs font-medium">목(木)</text>

      {/* Fire - Top Right */}
      <circle cx="250" cy="100" r="25" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="250" y="105" textAnchor="middle" className="fill-current text-xs font-medium">화(火)</text>

      {/* Earth - Bottom Right */}
      <circle cx="220" cy="220" r="25" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="220" y="225" textAnchor="middle" className="fill-current text-xs font-medium">토(土)</text>

      {/* Metal - Bottom Left */}
      <circle cx="80" cy="220" r="25" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="80" y="225" textAnchor="middle" className="fill-current text-xs font-medium">금(金)</text>

      {/* Water - Top Left */}
      <circle cx="50" cy="100" r="25" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="50" y="105" textAnchor="middle" className="fill-current text-xs font-medium">수(水)</text>

      {/* Connections */}
      <line x1="150" y1="55" x2="225" y2="85" className="stroke-current opacity-40" strokeWidth="1" />
      <line x1="265" y1="120" x2="235" y2="195" className="stroke-current opacity-40" strokeWidth="1" />
      <line x1="195" y1="230" x2="105" y2="230" className="stroke-current opacity-40" strokeWidth="1" />
      <line x1="65" y1="195" x2="40" y2="125" className="stroke-current opacity-40" strokeWidth="1" />
      <line x1="65" y1="85" x2="130" y2="45" className="stroke-current opacity-40" strokeWidth="1" />

      {/* Center */}
      <circle cx="150" cy="140" r="30" className="stroke-current" strokeWidth="2" strokeDasharray="4 4" fill="none" />
      <text x="150" y="145" textAnchor="middle" className="fill-current text-xs font-medium">균형</text>
    </svg>
  );
}

export function WhyWhatHowDiagram() {
  return (
    <svg viewBox="0 0 700 140" className="w-full max-w-4xl mx-auto" fill="none">
      {/* WHY Box - 사주/운세 */}
      <rect x="20" y="40" width="140" height="60" rx="8" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="90" y="65" textAnchor="middle" className="fill-current text-sm font-bold">사주 / 운세</text>
      <text x="90" y="85" textAnchor="middle" className="fill-current text-xs opacity-60">WHY</text>

      {/* Arrow 1 */}
      <line x1="160" y1="70" x2="210" y2="70" className="stroke-current" strokeWidth="2" />
      <polygon points="210,65 225,70 210,75" className="fill-current" />

      {/* WHAT Box - 인생설계 */}
      <rect x="225" y="40" width="140" height="60" rx="8" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="295" y="65" textAnchor="middle" className="fill-current text-sm font-bold">인생설계</text>
      <text x="295" y="85" textAnchor="middle" className="fill-current text-xs opacity-60">WHAT</text>

      {/* Arrow 2 */}
      <line x1="365" y1="70" x2="415" y2="70" className="stroke-current" strokeWidth="2" />
      <polygon points="415,65 430,70 415,75" className="fill-current" />

      {/* HOW Box - AI 기술 */}
      <rect x="430" y="40" width="140" height="60" rx="8" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="500" y="65" textAnchor="middle" className="fill-current text-sm font-bold">AI 기술</text>
      <text x="500" y="85" textAnchor="middle" className="fill-current text-xs opacity-60">HOW</text>

      {/* Arrow 3 */}
      <line x1="570" y1="70" x2="620" y2="70" className="stroke-current" strokeWidth="2" />
      <polygon points="620,65 635,70 620,75" className="fill-current" />

      {/* Result Circle - 행동 */}
      <circle cx="665" cy="70" r="30" className="fill-current" />
      <text x="665" y="75" textAnchor="middle" fill="white" className="text-xs font-bold">행동</text>
    </svg>
  );
}

export function DataToLifeDesignDiagram() {
  return (
    <svg viewBox="0 0 800 320" className="w-full max-w-5xl mx-auto" fill="none">
      {/* User Data Sources - Top Row */}
      <text x="400" y="25" textAnchor="middle" className="fill-current text-sm font-bold">나의 데이터</text>

      {/* Data input boxes */}
      <rect x="40" y="40" width="100" height="45" rx="6" className="stroke-current" strokeWidth="1.5" fill="none" />
      <text x="90" y="58" textAnchor="middle" className="fill-current text-xs font-medium">생년월일시</text>
      <text x="90" y="73" textAnchor="middle" className="fill-current text-[10px] opacity-60">사주 명식</text>

      <rect x="160" y="40" width="100" height="45" rx="6" className="stroke-current" strokeWidth="1.5" fill="none" />
      <text x="210" y="58" textAnchor="middle" className="fill-current text-xs font-medium">일상 패턴</text>
      <text x="210" y="73" textAnchor="middle" className="fill-current text-[10px] opacity-60">수면, 활동, 습관</text>

      <rect x="280" y="40" width="100" height="45" rx="6" className="stroke-current" strokeWidth="1.5" fill="none" />
      <text x="330" y="58" textAnchor="middle" className="fill-current text-xs font-medium">목표 & 고민</text>
      <text x="330" y="73" textAnchor="middle" className="fill-current text-[10px] opacity-60">커리어, 관계</text>

      <rect x="400" y="40" width="100" height="45" rx="6" className="stroke-current" strokeWidth="1.5" fill="none" />
      <text x="450" y="58" textAnchor="middle" className="fill-current text-xs font-medium">대화 히스토리</text>
      <text x="450" y="73" textAnchor="middle" className="fill-current text-[10px] opacity-60">맥락, 선호</text>

      <rect x="520" y="40" width="100" height="45" rx="6" className="stroke-current" strokeWidth="1.5" fill="none" />
      <text x="570" y="58" textAnchor="middle" className="fill-current text-xs font-medium">행동 데이터</text>
      <text x="570" y="73" textAnchor="middle" className="fill-current text-[10px] opacity-60">퀘스트, 실천</text>

      <rect x="640" y="40" width="100" height="45" rx="6" className="stroke-current" strokeWidth="1.5" fill="none" />
      <text x="690" y="58" textAnchor="middle" className="fill-current text-xs font-medium">실시간 맥락</text>
      <text x="690" y="73" textAnchor="middle" className="fill-current text-[10px] opacity-60">날씨, 이벤트</text>

      {/* Arrows down to DITTO */}
      <line x1="90" y1="85" x2="350" y2="120" className="stroke-current opacity-40" strokeWidth="1.5" />
      <line x1="210" y1="85" x2="370" y2="120" className="stroke-current opacity-40" strokeWidth="1.5" />
      <line x1="330" y1="85" x2="390" y2="120" className="stroke-current opacity-40" strokeWidth="1.5" />
      <line x1="450" y1="85" x2="410" y2="120" className="stroke-current opacity-40" strokeWidth="1.5" />
      <line x1="570" y1="85" x2="430" y2="120" className="stroke-current opacity-40" strokeWidth="1.5" />
      <line x1="690" y1="85" x2="450" y2="120" className="stroke-current opacity-40" strokeWidth="1.5" />

      {/* DITTO AI Analysis Center */}
      <rect x="300" y="120" width="200" height="70" rx="12" className="fill-current" />
      <text x="400" y="150" textAnchor="middle" fill="white" className="text-sm font-bold">DITTO AI 분석</text>
      <text x="400" y="170" textAnchor="middle" fill="white" className="text-[10px] opacity-80">사주 기반 맞춤 인생 설계 엔진</text>

      {/* Arrows down to Life Design outputs */}
      <line x1="340" y1="190" x2="120" y2="230" className="stroke-current" strokeWidth="2" />
      <line x1="370" y1="190" x2="280" y2="230" className="stroke-current" strokeWidth="2" />
      <line x1="400" y1="190" x2="400" y2="230" className="stroke-current" strokeWidth="2" />
      <line x1="430" y1="190" x2="520" y2="230" className="stroke-current" strokeWidth="2" />
      <line x1="460" y1="190" x2="680" y2="230" className="stroke-current" strokeWidth="2" />

      {/* Life Design Output Boxes */}
      <rect x="60" y="230" width="120" height="50" rx="8" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="120" y="252" textAnchor="middle" className="fill-current text-xs font-bold">커리어 로드맵</text>
      <text x="120" y="268" textAnchor="middle" className="fill-current text-[10px] opacity-60">적성 × 시기 분석</text>

      <rect x="220" y="230" width="120" height="50" rx="8" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="280" y="252" textAnchor="middle" className="fill-current text-xs font-bold">관계 설계</text>
      <text x="280" y="268" textAnchor="middle" className="fill-current text-[10px] opacity-60">궁합 × 소통 가이드</text>

      <rect x="340" y="230" width="120" height="50" rx="8" className="fill-current" />
      <text x="400" y="252" textAnchor="middle" fill="white" className="text-xs font-bold">건강 플랜</text>
      <text x="400" y="268" textAnchor="middle" fill="white" className="text-[10px] opacity-80">체질 × 습관 코칭</text>

      <rect x="460" y="230" width="120" height="50" rx="8" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="520" y="252" textAnchor="middle" className="fill-current text-xs font-bold">재정 전략</text>
      <text x="520" y="268" textAnchor="middle" className="fill-current text-[10px] opacity-60">재운 × 투자 타이밍</text>

      <rect x="620" y="230" width="120" height="50" rx="8" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="680" y="252" textAnchor="middle" className="fill-current text-xs font-bold">성장 여정</text>
      <text x="680" y="268" textAnchor="middle" className="fill-current text-[10px] opacity-60">대운 × 목표 설정</text>

      {/* Bottom - Final outcome */}
      <line x1="120" y1="280" x2="350" y2="305" className="stroke-current opacity-40" strokeWidth="1.5" />
      <line x1="280" y1="280" x2="370" y2="305" className="stroke-current opacity-40" strokeWidth="1.5" />
      <line x1="400" y1="280" x2="400" y2="305" className="stroke-current opacity-40" strokeWidth="1.5" />
      <line x1="520" y1="280" x2="430" y2="305" className="stroke-current opacity-40" strokeWidth="1.5" />
      <line x1="680" y1="280" x2="450" y2="305" className="stroke-current opacity-40" strokeWidth="1.5" />

      <polygon points="400,305 392,295 408,295" className="fill-current" />
    </svg>
  );
}

export function BlueOceanDiagram() {
  return (
    <svg viewBox="0 0 500 400" className="w-full max-w-lg mx-auto" fill="none">
      {/* Four overlapping circles */}
      {/* Top Left - 운세 */}
      <circle cx="180" cy="150" r="100" className="stroke-current" strokeWidth="2" fill="none" opacity="0.3" />
      <text x="120" y="100" textAnchor="middle" className="fill-current text-sm font-medium">운세</text>

      {/* Top Right - 인생설계 */}
      <circle cx="320" cy="150" r="100" className="stroke-current" strokeWidth="2" fill="none" opacity="0.3" />
      <text x="380" y="100" textAnchor="middle" className="fill-current text-sm font-medium">인생설계</text>

      {/* Bottom Left - 게이미피케이션 */}
      <circle cx="180" cy="270" r="100" className="stroke-current" strokeWidth="2" fill="none" opacity="0.3" />
      <text x="100" y="340" textAnchor="middle" className="fill-current text-sm font-medium">게이미피케이션</text>

      {/* Bottom Right - 실시간 맥락 */}
      <circle cx="320" cy="270" r="100" className="stroke-current" strokeWidth="2" fill="none" opacity="0.3" />
      <text x="400" y="340" textAnchor="middle" className="fill-current text-sm font-medium">실시간 맥락</text>

      {/* Center - DITTO */}
      <circle cx="250" cy="210" r="50" className="fill-current" />
      <text x="250" y="205" textAnchor="middle" fill="white" className="text-sm font-bold">DITTO</text>
      <text x="250" y="220" textAnchor="middle" fill="white" className="text-xs opacity-80">블루오션</text>
    </svg>
  );
}

export function DailyFlowDiagram() {
  return (
    <svg viewBox="0 0 800 200" className="w-full max-w-5xl mx-auto" fill="none">
      {/* Morning */}
      <circle cx="100" cy="80" r="40" className="fill-current" />
      <text x="100" y="75" textAnchor="middle" fill="white" className="text-xs font-bold">아침</text>
      <text x="100" y="90" textAnchor="middle" fill="white" className="text-xs opacity-80">7시</text>
      <text x="100" y="140" textAnchor="middle" className="fill-current text-xs">운세 확인</text>
      <text x="100" y="155" textAnchor="middle" className="fill-current text-xs opacity-60">오늘의 퀘스트</text>

      {/* Arrow 1 */}
      <line x1="150" y1="80" x2="210" y2="80" className="stroke-current" strokeWidth="2" />
      <polygon points="210,75 225,80 210,85" className="fill-current" />

      {/* Noon */}
      <circle cx="280" cy="80" r="40" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="280" y="75" textAnchor="middle" className="fill-current text-xs font-bold">점심</text>
      <text x="280" y="90" textAnchor="middle" className="fill-current text-xs opacity-60">12시</text>
      <text x="280" y="140" textAnchor="middle" className="fill-current text-xs">AI 코치 대화</text>
      <text x="280" y="155" textAnchor="middle" className="fill-current text-xs opacity-60">중간 체크인</text>

      {/* Arrow 2 */}
      <line x1="330" y1="80" x2="390" y2="80" className="stroke-current" strokeWidth="2" />
      <polygon points="390,75 405,80 390,85" className="fill-current" />

      {/* Evening */}
      <circle cx="460" cy="80" r="40" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="460" y="75" textAnchor="middle" className="fill-current text-xs font-bold">저녁</text>
      <text x="460" y="90" textAnchor="middle" className="fill-current text-xs opacity-60">18시</text>
      <text x="460" y="140" textAnchor="middle" className="fill-current text-xs">퀘스트 수행</text>
      <text x="460" y="155" textAnchor="middle" className="fill-current text-xs opacity-60">행동 실천</text>

      {/* Arrow 3 */}
      <line x1="510" y1="80" x2="570" y2="80" className="stroke-current" strokeWidth="2" />
      <polygon points="570,75 585,80 570,85" className="fill-current" />

      {/* Night */}
      <circle cx="640" cy="80" r="40" className="fill-current" />
      <text x="640" y="75" textAnchor="middle" fill="white" className="text-xs font-bold">밤</text>
      <text x="640" y="90" textAnchor="middle" fill="white" className="text-xs opacity-80">21시</text>
      <text x="640" y="140" textAnchor="middle" className="fill-current text-xs">하루 리뷰</text>
      <text x="640" y="155" textAnchor="middle" className="fill-current text-xs opacity-60">스트릭 유지</text>

      {/* Loop Arrow back to morning */}
      <path d="M 680 80 Q 750 80 750 180 Q 750 280 400 280 Q 50 280 50 180 Q 50 80 60 80" className="stroke-current opacity-30" strokeWidth="2" fill="none" strokeDasharray="4 4" />
      <polygon points="60,75 45,80 60,85" className="fill-current opacity-30" />
    </svg>
  );
}

export function AICoachesDiagram() {
  return (
    <svg viewBox="0 0 750 280" className="w-full max-w-5xl mx-auto" fill="none">
      {/* 목(木) Coach - Growth */}
      <circle cx="80" cy="100" r="45" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="80" y="95" textAnchor="middle" className="fill-current text-sm font-bold">목(木)</text>
      <text x="80" y="112" textAnchor="middle" className="fill-current text-xs opacity-60">성장</text>
      <text x="80" y="170" textAnchor="middle" className="fill-current text-xs">커리어/학습</text>
      <text x="80" y="185" textAnchor="middle" className="fill-current text-xs opacity-60">격려 코칭</text>

      {/* 화(火) Coach - Passion */}
      <circle cx="230" cy="100" r="45" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="230" y="95" textAnchor="middle" className="fill-current text-sm font-bold">화(火)</text>
      <text x="230" y="112" textAnchor="middle" className="fill-current text-xs opacity-60">열정</text>
      <text x="230" y="170" textAnchor="middle" className="fill-current text-xs">연애/관계</text>
      <text x="230" y="185" textAnchor="middle" className="fill-current text-xs opacity-60">동기부여</text>

      {/* 토(土) Coach - Stability (Center, filled) */}
      <circle cx="380" cy="100" r="45" className="fill-current" />
      <text x="380" y="95" textAnchor="middle" fill="white" className="text-sm font-bold">토(土)</text>
      <text x="380" y="112" textAnchor="middle" fill="white" className="text-xs opacity-80">안정</text>
      <text x="380" y="170" textAnchor="middle" className="fill-current text-xs">건강/습관</text>
      <text x="380" y="185" textAnchor="middle" className="fill-current text-xs opacity-60">체계적 계획</text>

      {/* 금(金) Coach - Decision */}
      <circle cx="530" cy="100" r="45" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="530" y="95" textAnchor="middle" className="fill-current text-sm font-bold">금(金)</text>
      <text x="530" y="112" textAnchor="middle" className="fill-current text-xs opacity-60">결단</text>
      <text x="530" y="170" textAnchor="middle" className="fill-current text-xs">재테크/결정</text>
      <text x="530" y="185" textAnchor="middle" className="fill-current text-xs opacity-60">현실적 조언</text>

      {/* 수(水) Coach - Wisdom */}
      <circle cx="680" cy="100" r="45" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="680" y="95" textAnchor="middle" className="fill-current text-sm font-bold">수(水)</text>
      <text x="680" y="112" textAnchor="middle" className="fill-current text-xs opacity-60">지혜</text>
      <text x="680" y="170" textAnchor="middle" className="fill-current text-xs">정서/명상</text>
      <text x="680" y="185" textAnchor="middle" className="fill-current text-xs opacity-60">감정 공감</text>

      {/* Connections */}
      <line x1="125" y1="100" x2="185" y2="100" className="stroke-current opacity-30" strokeWidth="1" />
      <line x1="275" y1="100" x2="335" y2="100" className="stroke-current opacity-30" strokeWidth="1" />
      <line x1="425" y1="100" x2="485" y2="100" className="stroke-current opacity-30" strokeWidth="1" />
      <line x1="575" y1="100" x2="635" y2="100" className="stroke-current opacity-30" strokeWidth="1" />

      {/* User matching label */}
      <text x="380" y="250" textAnchor="middle" className="fill-current text-sm">사용자 사주의 용신(用神)에 맞는 코치 자동 매칭</text>
    </svg>
  );
}

export function GamificationPyramidDiagram() {
  return (
    <svg viewBox="0 0 300 220" className="w-full max-w-xs mx-auto" fill="none">
      {/* Simple vertical bar chart */}

      {/* 365일 */}
      <rect x="20" y="20" width="180" height="28" rx="4" className="fill-current" />
      <text x="110" y="39" textAnchor="middle" fill="white" className="text-sm font-bold">365일</text>
      <text x="210" y="39" className="fill-current text-xs">+500 XP</text>

      {/* 100일 */}
      <rect x="20" y="58" width="180" height="28" rx="4" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="110" y="77" textAnchor="middle" className="fill-current text-sm">100일</text>
      <text x="210" y="77" className="fill-current text-xs">+200 XP</text>

      {/* 30일 */}
      <rect x="20" y="96" width="180" height="28" rx="4" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="110" y="115" textAnchor="middle" className="fill-current text-sm">30일</text>
      <text x="210" y="115" className="fill-current text-xs">+100 XP</text>

      {/* 7일 */}
      <rect x="20" y="134" width="180" height="28" rx="4" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="110" y="153" textAnchor="middle" className="fill-current text-sm">7일</text>
      <text x="210" y="153" className="fill-current text-xs">+50 XP</text>

      {/* 일일 */}
      <rect x="20" y="172" width="180" height="28" rx="4" className="fill-current" />
      <text x="110" y="191" textAnchor="middle" fill="white" className="text-sm font-bold">일일</text>
      <text x="210" y="191" className="fill-current text-xs">+10 XP</text>
    </svg>
  );
}

export function LeagueSystemDiagram() {
  return (
    <svg viewBox="0 0 300 220" className="w-full max-w-xs mx-auto" fill="none">
      {/* Diamond */}
      <rect x="20" y="20" width="180" height="35" rx="4" className="fill-current" />
      <text x="110" y="43" textAnchor="middle" fill="white" className="text-sm font-bold">다이아몬드</text>
      <text x="210" y="43" className="fill-current text-xs">상위 1%</text>

      {/* Gold */}
      <rect x="20" y="65" width="180" height="35" rx="4" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="110" y="88" textAnchor="middle" className="fill-current text-sm font-medium">골드</text>
      <text x="210" y="88" className="fill-current text-xs">상위 5%</text>

      {/* Silver */}
      <rect x="20" y="110" width="180" height="35" rx="4" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="110" y="133" textAnchor="middle" className="fill-current text-sm font-medium">실버</text>
      <text x="210" y="133" className="fill-current text-xs">상위 15%</text>

      {/* Bronze */}
      <rect x="20" y="155" width="180" height="35" rx="4" className="stroke-current" strokeWidth="2" strokeDasharray="4 4" fill="none" />
      <text x="110" y="178" textAnchor="middle" className="fill-current text-sm opacity-60">브론즈</text>
      <text x="210" y="178" className="fill-current text-xs opacity-60">시작</text>

      {/* Note */}
      <text x="110" y="210" textAnchor="middle" className="fill-current text-xs opacity-60">주간 리셋</text>
    </svg>
  );
}

export function RPGStatsDiagram() {
  return (
    <svg viewBox="0 0 300 200" className="w-full max-w-xs mx-auto" fill="none">
      {/* Stats bars */}
      {/* 커리어 */}
      <text x="65" y="30" textAnchor="end" className="fill-current text-xs">커리어</text>
      <rect x="70" y="20" width="150" height="14" rx="3" className="stroke-current" strokeWidth="1" fill="none" />
      <rect x="70" y="20" width="100" height="14" rx="3" className="fill-current" />
      <text x="230" y="30" className="fill-current text-xs">67</text>

      {/* 건강 */}
      <text x="65" y="60" textAnchor="end" className="fill-current text-xs">건강</text>
      <rect x="70" y="50" width="150" height="14" rx="3" className="stroke-current" strokeWidth="1" fill="none" />
      <rect x="70" y="50" width="78" height="14" rx="3" className="fill-current" />
      <text x="230" y="60" className="fill-current text-xs">52</text>

      {/* 재정 */}
      <text x="65" y="90" textAnchor="end" className="fill-current text-xs">재정</text>
      <rect x="70" y="80" width="150" height="14" rx="3" className="stroke-current" strokeWidth="1" fill="none" />
      <rect x="70" y="80" width="67" height="14" rx="3" className="fill-current" />
      <text x="230" y="90" className="fill-current text-xs">45</text>

      {/* 관계 */}
      <text x="65" y="120" textAnchor="end" className="fill-current text-xs">관계</text>
      <rect x="70" y="110" width="150" height="14" rx="3" className="stroke-current" strokeWidth="1" fill="none" />
      <rect x="70" y="110" width="133" height="14" rx="3" className="fill-current" />
      <text x="230" y="120" className="fill-current text-xs">89</text>

      {/* 성장 */}
      <text x="65" y="150" textAnchor="end" className="fill-current text-xs">성장</text>
      <rect x="70" y="140" width="150" height="14" rx="3" className="stroke-current" strokeWidth="1" fill="none" />
      <rect x="70" y="140" width="106" height="14" rx="3" className="fill-current" />
      <text x="230" y="150" className="fill-current text-xs">71</text>

      {/* Level */}
      <text x="150" y="185" textAnchor="middle" className="fill-current text-sm font-bold">Lv. 42</text>
    </svg>
  );
}
