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
    <svg viewBox="0 0 800 120" className="w-full max-w-6xl mx-auto" fill="none">
      {/* Timeline */}
      <line x1="50" y1="40" x2="750" y2="40" className="stroke-current opacity-30" strokeWidth="2" />

      {/* 2월 */}
      <circle cx="100" cy="40" r="20" className="stroke-current fill-current" strokeWidth="2" />
      <text x="100" y="45" textAnchor="middle" className="fill-white text-xs font-bold">2월</text>
      <text x="100" y="85" textAnchor="middle" className="fill-current text-sm font-medium">MVP 개발</text>

      {/* Arrow 1 */}
      <polygon points="190,35 205,40 190,45" className="fill-current opacity-50" />

      {/* 3월 */}
      <circle cx="300" cy="40" r="20" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="300" y="45" textAnchor="middle" className="fill-current text-xs font-bold">3월</text>
      <text x="300" y="85" textAnchor="middle" className="fill-current text-sm font-medium">베타 테스트</text>

      {/* Arrow 2 */}
      <polygon points="390,35 405,40 390,45" className="fill-current opacity-50" />

      {/* 4월 1일 - Launch */}
      <circle cx="500" cy="40" r="24" className="fill-black stroke-black" strokeWidth="3" />
      <text x="500" y="46" textAnchor="middle" fill="white" className="text-xs font-bold">4/1</text>
      <text x="500" y="85" textAnchor="middle" className="fill-current text-sm font-bold">제품 출시</text>

      {/* Arrow 3 */}
      <polygon points="590,35 605,40 590,45" className="fill-current opacity-50" />

      {/* 5월~ */}
      <circle cx="700" cy="40" r="20" className="stroke-current" strokeWidth="2" fill="none" />
      <text x="700" y="45" textAnchor="middle" className="fill-current text-xs font-bold">5월~</text>
      <text x="700" y="85" textAnchor="middle" className="fill-current text-sm font-medium">기능 확장</text>
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
