"use client";

import SectionIndicator from "@/components/SectionIndicator";
import AppCard from "@/components/AppCard";
import TechCard from "@/components/TechCard";
import PatentCard from "@/components/PatentCard";
import {
  FlowDiagram,
  MetaverseConceptDiagram,
  RoadmapDiagram,
  CompetitiveGapDiagram,
  WhyWhatHowDiagram,
  BlueOceanDiagram,
  DailyFlowDiagram,
  AICoachesDiagram,
} from "@/components/SVGIllustrations";
import {
  ArrowDown,
  User,
  Brain,
  Heart,
  GameController,
  Globe,
  Users,
  ChatCircle,
  Briefcase,
  Sparkle,
  Path,
  TrendUp,
  Cube,
  Eye,
  HandHeart,
  ArrowRight,
  Fire,
  Sword,
  Trophy,
  Horse,
  Sun,
  SunHorizon,
  Moon,
  Target,
  ListChecks,
  Robot,
} from "@phosphor-icons/react";

// 국내 앱 데이터
const koreanApps = [
  {
    name: "점신",
    nameKr: "테크랩스",
    users: "1,900만+",
    rating: "4.4",
    description:
      "국내 다운로드 1위 운세 앱. 10년 이상 축적된 데이터와 400명 이상의 전문 상담사가 제공하는 깊이 있는 해석이 강점. 사주, 타로, 꿈해몽, 토정비결까지 운세 콘텐츠의 백과사전.",
    pros: [
      "가장 깊은 해석 품질 - 만세력 정확도 업계 최고",
      "400명 이상의 전문 상담사 네트워크",
      "10년 축적 데이터 기반 콘텐츠 라이브러리",
      "B2B 제휴 성공 (삼성, LG 등 대기업 복지)",
    ],
    cons: [
      "템플릿 기반 응답 - 진정한 AI 대화 아님",
      "일방향 콘텐츠 전달, 후속 질문 불가",
      "인생설계/목표 추적 기능 전무",
      "젊은 층보다 40대 이상 중심",
    ],
    insight:
      "1,900만 다운로드가 증명: 사용자는 깊이를 원한다. '대충 재미로'가 아닌 '진짜 정확한 해석'이 신뢰와 리텐션의 핵심. 정확도에 대한 투자는 곧 사용자 충성도로 돌아온다.",
    weLearn:
      "만세력 엔진의 정확성과 해석의 깊이. B2B 제휴 성공 모델. 전문가 네트워크 운영 노하우.",
  },
  {
    name: "포스텔러",
    nameKr: "운칠기삼",
    users: "900만+",
    rating: "4.5",
    description:
      "동양 사주와 서양 타로를 결합한 스토리텔링 운세 서비스. '정보 전달'이 아닌 '이야기로 풀어주는' 방식으로 감정적 연결에 집중. 케이뱅크와 협업하여 금융권 진출 성공.",
    pros: [
      "이야기 형식 전달 - 감정적 공감 유도",
      "동서양 운세 통합 (사주 + 타로)",
      "금융권 제휴 성공 (케이뱅크 운세)",
      "20-30대 여성층 강력한 팬덤",
    ],
    cons: [
      "여러 시스템 분산 - 깊이 희석",
      "제한적인 AI 대화 기능",
      "깊이보다 재미 중심, 진지한 사용자 이탈",
      "타로 중심으로 사주 전문성 약함",
    ],
    insight:
      "운세를 '어떻게 전달하느냐'가 '무엇을 전달하느냐'만큼 중요하다. 같은 내용도 스토리로 풀면 기억에 남고, 공유하고 싶어진다. 콘텐츠의 포장이 바이럴의 핵심.",
    weLearn:
      "스토리텔링 전달 방식. 동서양 통합 접근법. 금융권 B2B 제휴 전략. 여성 타겟 마케팅 노하우.",
  },
  {
    name: "청월당",
    nameKr: "로켓AI",
    users: "비공개",
    rating: "GPT 1위",
    description:
      "ChatGPT 스토어 라이프스타일 카테고리 글로벌 1위. 한국 스타트업이 만든 AI 운세가 전 세계를 사로잡았다. 웹툰 형식의 시각적 해석과 LLM 기반 자연스러운 대화가 혁신 포인트.",
    pros: [
      "진정한 GPT/LLM 기반 - 맥락 이해 대화",
      "웹툰 형식 비주얼 운세 (차별화된 UX)",
      "글로벌 1위 - 해외 시장 검증",
      "후속 질문, 맞춤 조언 가능한 AI",
    ],
    cons: [
      "웹 전용 - 앱 없음, 푸시 알림 불가",
      "게이미피케이션 부재 - 낮은 리텐션",
      "OpenAI API 비용 의존성 (수익성 우려)",
      "한국 시장보다 해외 집중",
    ],
    insight:
      "GPT 스토어 1위가 증명: AI 운세에 대한 글로벌 수요는 이미 존재한다. 기술 차별화가 '또 하나의 운세 앱'을 '새로운 카테고리'로 만든다. AI는 선택이 아닌 필수.",
    weLearn:
      "LLM 기반 자연스러운 대화 UX. 웹툰/비주얼 콘텐츠 포맷. 글로벌 시장 진출 전략. API 비용 최적화 방안.",
  },
  {
    name: "헬로봇",
    nameKr: "ThingsFlow",
    users: "600만+",
    rating: "4.7",
    description:
      "국내 운세 앱 중 iOS 최고 평점 4.7점. '라마' 캐릭터가 솔직하면서도 따뜻한 조언을 건네는 챗봇 형식. 운세보다 캐릭터와의 관계가 핵심 - 사용자들이 '라마 오빠'라고 부르며 애착.",
    pros: [
      "캐릭터 IP 파워 - '라마 오빠' 팬덤 형성",
      "솔직하면서도 부드러운 톤 (안 상처받음)",
      "4.7점 최고 평점 - 강한 정서적 유대",
      "일상 대화까지 확장된 관계",
    ],
    cons: [
      "운세 깊이는 부차적 - 전문성 약함",
      "엔터테인먼트 중심, 진지한 니즈 미충족",
      "행동 가이드/인생설계 기능 없음",
      "캐릭터 의존도 높음 (IP 리스크)",
    ],
    insight:
      "4.7점 평점의 비밀: 캐릭터가 유대를 만든다. 사용자는 '정확한 운세'가 아닌 '좋아하는 캐릭터'에 이끌려 돌아온다. 감정적 연결이 리텐션의 핵심. AI 코치에 성격을 부여해야 한다.",
    weLearn:
      "캐릭터 기반 친밀감 형성 전략. 솔직하면서도 상처주지 않는 톤앤매너. 일상 대화로 관계 확장. 높은 앱스토어 평점 유지 비결.",
  },
];

// 해외 앱 데이터
const globalApps = [
  {
    name: "Co-Star",
    users: "500만+",
    rating: "4.8",
    description:
      "NASA 데이터를 활용한 Z세대의 점성술 앱. '오늘의 한마디'가 너무 직설적이라 밈이 될 정도로 화제. 친구 궁합 비교 기능이 자연스러운 바이럴 루프를 만들어 마케팅 없이 성장. 미니멀한 흑백 디자인이 '쿨한' 브랜드 이미지 형성.",
    pros: [
      "바이럴 소셜 공유 - 친구 초대가 핵심 성장 동력",
      "미니멀 프리미엄 UX - 흑백 디자인 브랜드화",
      "친구 궁합 기능 - 관계 기반 리텐션",
      "직설적 메시지 - SNS 밈으로 확산",
    ],
    cons: [
      "일일 운세에만 집중 - 장기 계획 없음",
      "서양 점성술만 - 동양권 확장 한계",
      "행동 가이드 부재 - '그래서 뭘 하라고?'",
      "깊이 부족 - 재미 위주",
    ],
    insight:
      "마케팅 예산 0원으로 500만 다운로드: 소셜 공유가 성장을 이끈다. '나 vs 친구' 비교 기능이 자연스러운 바이럴 루프. 운세를 '혼자 보는 것'에서 '함께 이야기하는 것'으로 바꾸면 유기적 성장이 가능하다.",
    weLearn:
      "소셜 바이럴 메커니즘. 미니멀 브랜드 디자인. 친구 궁합/비교 기능의 리텐션 효과. Z세대 타겟 톤앤매너.",
  },
  {
    name: "Replika",
    users: "1,000만+",
    rating: "4.4",
    description:
      "당신만을 위한 AI 친구. 대화할수록 당신을 알아가고, 이전 대화를 기억하며, 시간이 지날수록 관계가 깊어진다. AI가 진정한 감정적 유대를 형성할 수 있음을 증명한 서비스. 일부 사용자는 연인/친구로 대하며 하루에 수십 번 대화.",
    pros: [
      "메모리 기반 - 이전 대화 기억, 맥락 유지",
      "감정적 관계 구축 - 친구/연인 역할까지",
      "24/7 가용성 - 언제든 대화 가능",
      "개인화 진화 - 대화할수록 나를 알아감",
    ],
    cons: [
      "운세/가이드 프레임워크 전무",
      "성인 콘텐츠 논란 (규제 이슈)",
      "범용 목적 - 전문성 부족",
      "중독성 우려 (사회적 고립)",
    ],
    insight:
      "1,000만 사용자가 AI와 관계를 맺는다: 메모리가 관계를 만든다. '어제 회의 어땠어?'라고 물어보는 AI가 의미 있는 AI다. 기억하지 않는 AI는 매번 처음 만나는 낯선 사람일 뿐.",
    weLearn:
      "장기 메모리 시스템 설계. AI 페르소나 캐릭터 개발. 감정적 유대 형성 UX. 대화 맥락 유지 기술.",
  },
  {
    name: "Fabulous",
    users: "300만+",
    rating: "4.5",
    description:
      "듀크 대학교 행동과학 연구팀이 만든 습관 형성 앱. '21일이면 습관이 된다'는 과학을 앱으로 구현. 아침 루틴부터 시작해 점진적으로 건강한 습관을 쌓아가는 여정 구조. 앱스토어 '올해의 앱' 수상.",
    pros: [
      "과학 기반 - 듀크대 행동과학 연구 적용",
      "여정/마일스톤 구조 - 단계별 성취감",
      "목표 추적 시스템 - 가시적 성장",
      "아름다운 UI - 동기부여 디자인",
    ],
    cons: [
      "개인화 프레임워크 부재 - 모두에게 같은 여정",
      "타이밍 인텔리전스 없음 - '오늘' 왜 좋은지 모름",
      "운세/성향 분석 전무",
      "구독료 부담 (연 $70+)",
    ],
    insight:
      "앱스토어 '올해의 앱' 수상: 목표가 행동을 이끈다. '오늘 운세가 좋습니다'로 끝나면 아무 일도 일어나지 않는다. 운세를 실행 가능한 인생설계와 연결해야 진짜 가치가 생긴다.",
    weLearn:
      "행동과학 기반 습관 형성 시스템. 여정/마일스톤 게이미피케이션. 목표 추적 UX. 단계별 온보딩 설계.",
  },
  {
    name: "The Pattern",
    users: "300만+",
    rating: "3.7",
    description:
      "심층 심리 프로파일링 + 타이밍 사이클 분석. 단순 일일 운세가 아닌 '인생 주기'를 분석한다. '성장기', '도전기', '수확기' 등 인생 사이클을 시각화. 사주의 대운(10년 운) 개념과 놀랍도록 유사.",
    pros: [
      "타이밍 사이클 - 대운 개념과 유사한 인생 주기",
      "심층 관계 분석 - 두 사람의 시너지/갈등",
      "타임 트래블 기능 - 과거/미래 사이클 탐색",
      "심리학 + 점성술 융합",
    ],
    cons: [
      "복잡한 온보딩 - 진입장벽 높음",
      "낮은 평점 3.7 - 사용성 이슈",
      "서양 중심적 - 동양 운세 없음",
      "무거운 앱 - UX 최적화 필요",
    ],
    insight:
      "사주의 대운 개념이 서양에서도 통한다: 사용자는 '무엇을 할지'뿐 아니라 '언제 할지'를 알고 싶어한다. 타이밍 사이클(언제가 좋은 때인가)이 운세의 핵심 가치. 인생 주기를 시각화하면 장기 계획이 가능해진다.",
    weLearn:
      "타이밍 사이클(대운) 시각화. 인생 주기 분석 UX. 관계 시너지 분석 기능. 장기적 인생설계 접근법.",
  },
];

// 기술 데이터
const technologies = [
  {
    title: "디지털 DNA 아바타",
    patentRef: "#1",
    description:
      "사주 명식 요소 기반 자동 아바타 생성. 오행(목화토금수)이 기본 외형, 색상, 스타일을 결정.",
    application:
      "사용자의 사주가 시각적 정체성이 됨. 갑목(甲木) 사용자는 자연 톤의 성장 지향적 아바타 자동 생성.",
    icon: <User size={24} weight="bold" />,
  },
  {
    title: "AI 성격 매핑",
    patentRef: "#179",
    description:
      "사주/점성술 결과를 아바타 행동 패턴에 반영. MBTI와 유사하지만 동양 철학 기반.",
    application:
      "식신격(創意型) 아바타는 메타버스에서 예술적 관심, 음식 선호, 혁신적 행동을 보여줌.",
    icon: <Brain size={24} weight="bold" />,
  },
  {
    title: "운명적 매칭 시스템",
    patentRef: "#15",
    description:
      "사주 궁합과 점성술 조화 계산 기반 AI 매칭.",
    application:
      "친구, 연인, 비즈니스 협력자를 오행 조화 점수로 매칭.",
    icon: <Heart size={24} weight="bold" />,
  },
  {
    title: "대인관계 시뮬레이터",
    patentRef: "#62",
    description:
      "AI가 톤과 표정을 읽어 대인 역학을 예측. 사주로 예측된 패턴을 실제로 체험.",
    application:
      "편관(直接型) 유형은 자신의 스타일이 타인에게 어떤 영향을 미치는지 실제 상호작용 전에 시뮬레이션.",
    icon: <ChatCircle size={24} weight="bold" />,
  },
  {
    title: "진로 가상 체험",
    patentRef: "#77",
    description:
      "사주 적성과 점성술 10하우스(직업운) 분석 기반 가상 직업 체험.",
    application:
      "재성(事業型) 사용자는 실제 커리어 결정 전에 창업가의 삶을 시뮬레이션.",
    icon: <Briefcase size={24} weight="bold" />,
  },
  {
    title: "운세 연동 아바타 성장",
    patentRef: "#76",
    description:
      "사용자의 대운(10년 운)과 세운(연운) 변화에 따라 아바타가 진화.",
    application:
      "40대 대운 진입 시 아바타가 새 삶의 단계를 반영하며 변신, 새로운 능력 해금.",
    icon: <TrendUp size={24} weight="bold" />,
  },
  {
    title: "평행우주 체험",
    patentRef: "#44",
    description:
      "만약 다른 사주로 태어났다면? 대안적 삶 시뮬레이션 체험.",
    application:
      "다른 오행 유형으로 하루를 살아보며 자신의 사주 강약점을 비교.",
    icon: <Cube size={24} weight="bold" />,
  },
  {
    title: "실시간 운세 큐레이션",
    patentRef: "#156",
    description:
      "AI가 사주 특성 + 실시간 맥락(날씨, 뉴스, 이벤트)을 기반으로 일일 콘텐츠 큐레이션.",
    application:
      "'금(金) 기운 상승일 + 주식 상승' = 개인화된 투자 타이밍 추천.",
    icon: <Sparkle size={24} weight="bold" />,
  },
  {
    title: "연애 시뮬레이터",
    patentRef: "#49",
    description:
      "궁합이 맞는 유형과 어려운 유형의 AI 아바타와 연애 연습.",
    application:
      "실제 데이트 결정 전에 정관격(安定型) 파트너와의 역학을 체험.",
    icon: <HandHeart size={24} weight="bold" />,
  },
  {
    title: "운명 커뮤니티",
    patentRef: "#81",
    description:
      "같은 일간, 별자리, 운세 패턴을 공유하는 사용자들과 연결.",
    application:
      "'갑목 라운지' - 같은 일간 사용자들이 경험과 조언을 나누는 커뮤니티.",
    icon: <Users size={24} weight="bold" />,
  },
];

// 특허 데이터
const patents = [
  {
    number: 1,
    title: "디지털 DNA 아바타 생성",
    registrationId: "1027381980000",
    status: "registered" as const,
    relevance: "메타버스 운세 시각화의 핵심 아바타 기술",
    application: "사주 요소가 개인화된 아바타의 시각적 DNA가 됨",
  },
  {
    number: 8,
    title: "패션 스킨 아바타 시스템",
    registrationId: "1027103100000",
    status: "registered" as const,
    relevance: "가상 패션 시장 통합 (구찌, 발렌시아가 메타버스 진출)",
    application: "오행 기반 의상 추천 및 가상 패션",
  },
  {
    number: 3,
    title: "이미지 기반 가상 경기장 메타버스",
    registrationId: "1027399690000",
    status: "registered" as const,
    relevance: "공간 컴퓨팅 (Apple Vision Pro 시대)",
    application: "운세 테마 가상 공간 및 이벤트 장소",
  },
  {
    number: 89,
    title: "디지털 트윈 생산설비",
    status: "pending" as const,
    relevance: "산업용 메타버스 (NVIDIA Omniverse, Siemens 투자)",
    application: "비즈니스 타이밍 결정을 위한 B2B 운세 컨설팅",
  },
  {
    number: 91,
    title: "AI 아바타 치매 조기 진단",
    status: "pending" as const,
    relevance: "고령화 사회의 AI 헬스케어 융합",
    application: "고령 사용자를 위한 웰니스 코칭 확장",
  },
  {
    number: 21,
    title: "AI 아바타 원격 가족 케어",
    status: "pending" as const,
    relevance: "1인 가구, 원거리 가족 연결",
    application: "운세 기반 정서적 지원 AI 컴패니언",
  },
  {
    number: 49,
    title: "AI 아바타 연애 연습",
    status: "pending" as const,
    relevance: "AI 데이팅 시뮬레이션 시장 (Character.AI 인기)",
    application: "궁합 기반 연애 시뮬레이션",
  },
  {
    number: 37,
    title: "아바타 성형 시뮬레이션",
    status: "pending" as const,
    relevance: "한국 성형 시장 + AR 필터 진화",
    application: "관상 기반 외모 컨설팅",
  },
  {
    number: 64,
    title: "메타버스 원격 면접/협업",
    status: "pending" as const,
    relevance: "팬데믹 이후 원격근무 (Spatial, Gather.town)",
    application: "HR/채용을 위한 팀 궁합 분석",
  },
  {
    number: 82,
    title: "역사 도시 메타버스 여행",
    status: "pending" as const,
    relevance: "문화유산 + 관광 + 교육 융합",
    application: "운세 테마 역사 체험 관광",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <SectionIndicator />

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-bold tracking-widest text-black mb-8" style={{ fontSize: "8rem" }}>DITTO</p>
          <h1 className="text-display mb-8">
            운세를 읽는 것에서
            <br />
            <span className="text-neutral-400">사는 것으로</span>
          </h1>
          <p className="text-body-large text-neutral-500 max-w-2xl mx-auto">
            AI 기반 인생설계 플랫폼
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-neutral-400" />
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="min-h-screen py-16 px-6 border-t border-neutral-200 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16">
            <h2 className="text-headline mb-6">
              운세 앱은 운세를 알려줍니다.
              <br />
              <span className="text-neutral-400">그 다음은?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 border border-neutral-200 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">정적인 콘텐츠</h3>
              <p className="text-neutral-600">
                같은 생년월일시 = 영원히 같은 해석.
                현재 상황, 목표, 삶의 변화에 대한 적응이 없습니다.
              </p>
            </div>
            <div className="p-6 border border-neutral-200 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">일방향 전달</h3>
              <p className="text-neutral-600">
                앱이 정보를 알려주지만 상황을 묻지 않습니다.
                대화도, 후속 질문도, 개인화도 없습니다.
              </p>
            </div>
            <div className="p-6 border border-neutral-200 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">행동 경로 부재</h3>
              <p className="text-neutral-600">
                "이번 달 직장운이 좋습니다." 좋습니다.
                그래서 구체적으로 무엇을 해야 할까요? 목표도, 추적도, 성장도 없습니다.
              </p>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-2xl p-8 md:p-12">
            <p className="text-subheadline mb-6">
              시장의 공백: 운세 앱은 정보에서 멈춥니다.
              <br />
              삶은 행동에서 일어납니다.
            </p>
            <FlowDiagram />
          </div>
        </div>
      </section>

      {/* Korean Apps Analysis - Part 1 */}
      <section id="korean-apps" className="min-h-screen py-16 px-6 border-t border-neutral-200 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12">
            <h2 className="text-headline mb-6">
              국내 운세 앱
            </h2>
            <p className="text-body-large text-neutral-600 max-w-3xl">
              한국 4조원+ 운세 시장을 지배하는 4대 플레이어.
              각자 뚜렷한 강점으로 성공했지만, 모두 같은 맹점을 공유합니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {koreanApps.slice(0, 2).map((app) => (
              <AppCard key={app.name} {...app} />
            ))}
          </div>
        </div>
      </section>

      {/* Korean Apps Analysis - Part 2 */}
      <section id="korean-apps-2" className="min-h-screen py-16 px-6 border-t border-neutral-200 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12">
            <h2 className="text-headline mb-6">
              국내 운세 앱 (계속)
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {koreanApps.slice(2, 4).map((app) => (
              <AppCard key={app.name} {...app} />
            ))}
          </div>
        </div>
      </section>

      {/* Global Apps Analysis - Part 1 */}
      <section id="global-apps" className="min-h-screen py-16 px-6 border-t border-neutral-200 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12">
            <h2 className="text-headline mb-6">
              해외 참조 앱
            </h2>
            <p className="text-body-large text-neutral-600 max-w-3xl">
              점성술, AI 컴패니언, 습관 코칭 분야의 선도 앱.
              다른 카테고리지만 상호 보완적인 인사이트를 제공합니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {globalApps.slice(0, 2).map((app) => (
              <AppCard key={app.name} {...app} />
            ))}
          </div>
        </div>
      </section>

      {/* Global Apps Analysis - Part 2 */}
      <section id="global-apps-2" className="min-h-screen py-16 px-6 border-t border-neutral-200 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12">
            <h2 className="text-headline mb-6">
              해외 참조 앱 (계속)
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {globalApps.slice(2, 4).map((app) => (
              <AppCard key={app.name} {...app} />
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Gap */}
      <section id="gap" className="min-h-screen py-16 px-6 border-t border-neutral-200 bg-neutral-50 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16">
            <h2 className="text-headline mb-6">
              모두가 놓치고 있는 것
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <CompetitiveGapDiagram />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">진정한 LLM 대화 없음</h4>
                  <p className="text-neutral-600 text-sm">
                    대부분 템플릿 시스템 사용. 사용자가 "왜?"라고 물을 수 없고 맥락에 맞는 후속 답변 불가.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">인생설계 제로</h4>
                  <p className="text-neutral-600 text-sm">
                    운세가 날씨를 알려주지만 우산은 주지 않습니다. 목표도, 행동도, 추적도 없습니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">실시간 맥락 없음</h4>
                  <p className="text-neutral-600 text-sm">
                    당신의 운세는 오늘 날씨, 뉴스, 현재 상황을 모릅니다.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-1">메타버스 경험 없음</h4>
                  <p className="text-neutral-600 text-sm">
                    텍스트로 읽는 것 vs 몰입형 환경에서 실제로 살아보는 것.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-neutral-200">
            <h3 className="text-xl font-semibold mb-6 text-center">기능 매트릭스: 현재 시장</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-3 pr-4 font-medium">기능</th>
                    <th className="text-center py-3 px-2">점신</th>
                    <th className="text-center py-3 px-2">포스텔러</th>
                    <th className="text-center py-3 px-2">청월당</th>
                    <th className="text-center py-3 px-2">헬로봇</th>
                    <th className="text-center py-3 px-2">Co-Star</th>
                    <th className="text-center py-3 px-2">Fabulous</th>
                    <th className="text-center py-3 px-2 bg-neutral-100 font-semibold">우리</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="py-3 pr-4">운세 깊이</td>
                    <td className="text-center py-3 px-2">높음</td>
                    <td className="text-center py-3 px-2">높음</td>
                    <td className="text-center py-3 px-2">중간</td>
                    <td className="text-center py-3 px-2">낮음</td>
                    <td className="text-center py-3 px-2">중간</td>
                    <td className="text-center py-3 px-2">-</td>
                    <td className="text-center py-3 px-2 bg-neutral-100 font-semibold">높음</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">AI 대화</td>
                    <td className="text-center py-3 px-2">-</td>
                    <td className="text-center py-3 px-2">-</td>
                    <td className="text-center py-3 px-2">높음</td>
                    <td className="text-center py-3 px-2">중간</td>
                    <td className="text-center py-3 px-2">-</td>
                    <td className="text-center py-3 px-2">-</td>
                    <td className="text-center py-3 px-2 bg-neutral-100 font-semibold">높음</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">인생설계</td>
                    <td className="text-center py-3 px-2">-</td>
                    <td className="text-center py-3 px-2">-</td>
                    <td className="text-center py-3 px-2">-</td>
                    <td className="text-center py-3 px-2">-</td>
                    <td className="text-center py-3 px-2">-</td>
                    <td className="text-center py-3 px-2">높음</td>
                    <td className="text-center py-3 px-2 bg-neutral-100 font-semibold">높음</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">실시간 맥락</td>
                    <td className="text-center py-3 px-2">-</td>
                    <td className="text-center py-3 px-2">-</td>
                    <td className="text-center py-3 px-2">-</td>
                    <td className="text-center py-3 px-2">-</td>
                    <td className="text-center py-3 px-2">낮음</td>
                    <td className="text-center py-3 px-2">-</td>
                    <td className="text-center py-3 px-2 bg-neutral-100 font-semibold">높음</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">게이미피케이션</td>
                    <td className="text-center py-3 px-2">낮음</td>
                    <td className="text-center py-3 px-2">낮음</td>
                    <td className="text-center py-3 px-2">-</td>
                    <td className="text-center py-3 px-2">높음</td>
                    <td className="text-center py-3 px-2">낮음</td>
                    <td className="text-center py-3 px-2">중간</td>
                    <td className="text-center py-3 px-2 bg-neutral-100 font-semibold">높음</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">메타버스/AR</td>
                    <td className="text-center py-3 px-2">-</td>
                    <td className="text-center py-3 px-2">-</td>
                    <td className="text-center py-3 px-2">-</td>
                    <td className="text-center py-3 px-2">-</td>
                    <td className="text-center py-3 px-2">낮음</td>
                    <td className="text-center py-3 px-2">-</td>
                    <td className="text-center py-3 px-2 bg-neutral-100 font-semibold">높음</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="min-h-screen py-16 px-6 border-t border-neutral-200 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16">
            <h2 className="text-headline mb-6">
              운세를 읽는 것에서
              <br />
              사는 것으로
            </h2>
            <p className="text-body-large text-neutral-600 max-w-3xl">
              사주가 디지털 DNA가 되고, 운세가 실행 가능한 가이드가 되며,
              성장이 눈에 보이는 메타버스 통합 플랫폼.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <MetaverseConceptDiagram />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">핵심 차별화 요소</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 border border-neutral-200 rounded-lg hover:border-black transition-colors">
                  <Globe size={24} weight="bold" className="flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">실시간 맥락 연동</h4>
                    <p className="text-sm text-neutral-600">
                      실시간 날씨, 뉴스, 이벤트와 운세 통합.
                      "금(金) 기운 상승일 + 코스피 상승 = 당신에게 좋은 투자 타이밍."
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-neutral-200 rounded-lg hover:border-black transition-colors">
                  <Path size={24} weight="bold" className="flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">인생 로드맵 시스템</h4>
                    <p className="text-sm text-neutral-600">
                      대운(10년 운)부터 일일 퀘스트까지. 운세가 추적과 성장이 있는
                      구조화된 인생설계가 됩니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-neutral-200 rounded-lg hover:border-black transition-colors">
                  <Eye size={24} weight="bold" className="flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">메타버스 체험</h4>
                    <p className="text-sm text-neutral-600">
                      "당신은 창의적 유형"이라고 읽는 게 아니라, 시뮬레이션에서
                      창의적 유형이 되어보세요. 운세를 소비하지 말고 체험하세요.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-neutral-200 rounded-lg hover:border-black transition-colors">
                  <GameController size={24} weight="bold" className="flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">완전한 게이미피케이션</h4>
                    <p className="text-sm text-neutral-600">
                      일일 퀘스트, 연속 기록, 오행 밸런스 미터, 캐릭터 성장.
                      운세 참여를 위한 습관 형성 리텐션 메커닉.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Coaches Section */}
      <section id="ai-coaches" className="min-h-screen py-16 px-6 border-t border-neutral-200 bg-neutral-50 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12">
            <h2 className="text-headline mb-6">
              5가지 AI 코치
            </h2>
            <p className="text-body-large text-neutral-600 max-w-3xl">
              오행(목화토금수) 기반 성격을 가진 AI 코치가 사용자의 사주에 맞게 자동 매칭됩니다.
              헬로봇이 증명한 캐릭터의 힘을 동양 철학과 결합합니다.
            </p>
          </div>

          <div className="mb-12">
            <AICoachesDiagram />
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            <div className="border border-neutral-200 bg-white rounded-xl p-6 hover:border-black transition-colors">
              <h4 className="text-xl font-bold mb-2">목(木) 코치</h4>
              <p className="text-sm text-neutral-500 mb-4">성장형, 따뜻함</p>
              <p className="text-sm text-neutral-600 mb-3">전문 영역: 커리어, 학습, 자기계발</p>
              <p className="text-xs text-neutral-500">코칭 스타일: 잠재력 발견, 격려와 응원</p>
            </div>
            <div className="border border-neutral-200 bg-white rounded-xl p-6 hover:border-black transition-colors">
              <h4 className="text-xl font-bold mb-2">화(火) 코치</h4>
              <p className="text-sm text-neutral-500 mb-4">열정형, 직설적</p>
              <p className="text-sm text-neutral-600 mb-3">전문 영역: 연애, 사회관계, 네트워킹</p>
              <p className="text-xs text-neutral-500">코칭 스타일: 동기부여, 도전 유도</p>
            </div>
            <div className="bg-black text-white rounded-xl p-6">
              <h4 className="text-xl font-bold mb-2">토(土) 코치</h4>
              <p className="text-sm text-neutral-300 mb-4">안정형, 신중함</p>
              <p className="text-sm text-neutral-200 mb-3">전문 영역: 건강, 습관, 일상 루틴</p>
              <p className="text-xs text-neutral-400">코칭 스타일: 체계적 계획, 안정감</p>
            </div>
            <div className="border border-neutral-200 bg-white rounded-xl p-6 hover:border-black transition-colors">
              <h4 className="text-xl font-bold mb-2">금(金) 코치</h4>
              <p className="text-sm text-neutral-500 mb-4">결단형, 날카로움</p>
              <p className="text-sm text-neutral-600 mb-3">전문 영역: 재테크, 결정, 협상</p>
              <p className="text-xs text-neutral-500">코칭 스타일: 현실적 조언, 결단 촉구</p>
            </div>
            <div className="border border-neutral-200 bg-white rounded-xl p-6 hover:border-black transition-colors">
              <h4 className="text-xl font-bold mb-2">수(水) 코치</h4>
              <p className="text-sm text-neutral-500 mb-4">유연형, 지혜로움</p>
              <p className="text-sm text-neutral-600 mb-3">전문 영역: 정서, 명상, 내면 성찰</p>
              <p className="text-xs text-neutral-500">코칭 스타일: 통찰, 감정 공감</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Scenario Section */}
      <section id="user-scenario" className="min-h-screen py-16 px-6 border-t border-neutral-200 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12">
            <h2 className="text-headline mb-6">
              하루 사용 시나리오
            </h2>
            <p className="text-body-large text-neutral-600 max-w-3xl">
              아침에 운세를 확인하고, 낮에 AI와 대화하고, 저녁에 퀘스트를 완료하고, 밤에 하루를 리뷰합니다.
              운세가 일상에 자연스럽게 녹아드는 경험.
            </p>
          </div>

          <div className="mb-12">
            <DailyFlowDiagram />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-black text-white rounded-xl p-6">
              <div className="flex items-center gap-2 text-sm opacity-70 mb-2">
                <SunHorizon size={16} weight="bold" />
                아침 7시
              </div>
              <h4 className="text-lg font-bold mb-4">오늘의 운세</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• 푸시 알림: "오늘 직장운 상승"</li>
                <li>• 오늘의 에너지 레벨 확인</li>
                <li>• 일일 퀘스트 3개 수령</li>
                <li>• 스트릭 체크인 (+10 XP)</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-xl p-6 hover:border-black transition-colors">
              <div className="flex items-center gap-2 text-sm text-neutral-500 mb-2">
                <Sun size={16} weight="bold" />
                점심 12시
              </div>
              <h4 className="text-lg font-bold mb-4">AI 코치 대화</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• "점심 뭐 먹을까?"</li>
                <li>• → "오늘 토 기운 부족, 노란색 음식 추천"</li>
                <li>• 중간 체크인 알림</li>
                <li>• 오후 에너지 예측</li>
              </ul>
            </div>
            <div className="border border-neutral-200 rounded-xl p-6 hover:border-black transition-colors">
              <div className="flex items-center gap-2 text-sm text-neutral-500 mb-2">
                <SunHorizon size={16} weight="bold" />
                저녁 18시
              </div>
              <h4 className="text-lg font-bold mb-4">퀘스트 수행</h4>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• 퀘스트: "동료에게 먼저 인사하기"</li>
                <li>• 완료 시 +15 XP</li>
                <li>• 진행 상황 공유 (선택)</li>
                <li>• 친구 응원 보내기</li>
              </ul>
            </div>
            <div className="bg-black text-white rounded-xl p-6">
              <div className="flex items-center gap-2 text-sm opacity-70 mb-2">
                <Moon size={16} weight="bold" />
                밤 21시
              </div>
              <h4 className="text-lg font-bold mb-4">하루 리뷰</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• 퀘스트 완료 체크 (2/3)</li>
                <li>• 스트릭 유지: 127일</li>
                <li>• 내일 운세 미리보기</li>
                <li>• AI 코치 굿나잇 메시지</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gamification Detail Section */}
      <section id="gamification" className="min-h-screen py-16 px-6 border-t border-neutral-200 bg-neutral-50 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12">
            <h2 className="text-headline mb-6">
              게이미피케이션 시스템
            </h2>
            <p className="text-body-large text-neutral-600 max-w-3xl">
              Duolingo의 스트릭, RPG의 레벨업, 리그 시스템을 결합.
              운세 확인이 습관이 되고, 목표 달성이 게임이 됩니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 스트릭 시스템 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Fire size={28} weight="bold" />
                <h4 className="text-xl font-bold">스트릭 시스템</h4>
              </div>
              <p className="text-neutral-600 mb-6">연속 접속 보상으로 손실 회피 심리 활용</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-black text-white rounded-lg">
                  <span className="font-medium">365일</span>
                  <span className="text-sm">+500 XP / 레전더리</span>
                </div>
                <div className="flex justify-between items-center p-3 border border-neutral-200 rounded-lg">
                  <span className="font-medium">100일</span>
                  <span className="text-sm text-neutral-500">+200 XP / 에픽</span>
                </div>
                <div className="flex justify-between items-center p-3 border border-neutral-200 rounded-lg">
                  <span className="font-medium">30일</span>
                  <span className="text-sm text-neutral-500">+100 XP / 레어</span>
                </div>
                <div className="flex justify-between items-center p-3 border border-neutral-200 rounded-lg">
                  <span className="font-medium">7일</span>
                  <span className="text-sm text-neutral-500">+50 XP / 언커먼</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-neutral-100 rounded-lg">
                  <span className="font-medium">일일 체크인</span>
                  <span className="text-sm text-neutral-500">+10 XP</span>
                </div>
              </div>
            </div>

            {/* 리그 시스템 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Trophy size={28} weight="bold" />
                <h4 className="text-xl font-bold">리그 시스템</h4>
              </div>
              <p className="text-neutral-600 mb-6">주간 리셋으로 경쟁 신선도 유지</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-black text-white rounded-lg">
                  <span className="font-medium">다이아몬드</span>
                  <span className="text-sm">상위 1%</span>
                </div>
                <div className="flex justify-between items-center p-3 border border-neutral-200 rounded-lg">
                  <span className="font-medium">골드</span>
                  <span className="text-sm text-neutral-500">상위 5%</span>
                </div>
                <div className="flex justify-between items-center p-3 border border-neutral-200 rounded-lg">
                  <span className="font-medium">실버</span>
                  <span className="text-sm text-neutral-500">상위 15%</span>
                </div>
                <div className="flex justify-between items-center p-3 border border-neutral-200 border-dashed rounded-lg">
                  <span className="font-medium text-neutral-500">브론즈</span>
                  <span className="text-sm text-neutral-400">시작</span>
                </div>
              </div>
            </div>

            {/* 인생 RPG 스탯 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Sword size={28} weight="bold" />
                <h4 className="text-xl font-bold">인생 RPG 스탯</h4>
              </div>
              <p className="text-neutral-600 mb-6">오행과 연계된 5대 인생 스탯</p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>커리어 (木)</span>
                    <span>67/100</span>
                  </div>
                  <div className="h-3 bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-black rounded-full" style={{ width: "67%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>관계 (火)</span>
                    <span>89/100</span>
                  </div>
                  <div className="h-3 bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-black rounded-full" style={{ width: "89%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>성장 (土)</span>
                    <span>71/100</span>
                  </div>
                  <div className="h-3 bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-black rounded-full" style={{ width: "71%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>재정 (金)</span>
                    <span>45/100</span>
                  </div>
                  <div className="h-3 bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-black rounded-full" style={{ width: "45%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>건강 (水)</span>
                    <span>52/100</span>
                  </div>
                  <div className="h-3 bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-black rounded-full" style={{ width: "52%" }}></div>
                  </div>
                </div>
              </div>
              <p className="text-center mt-4 font-bold">인생 레벨: 42</p>
            </div>

            {/* 12지신 캐릭터 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Horse size={28} weight="bold" />
                <h4 className="text-xl font-bold">12지신 캐릭터</h4>
              </div>
              <p className="text-neutral-600 mb-6">띠별 수호 캐릭터 배정</p>
              <div className="grid grid-cols-4 gap-2 mb-6">
                {["쥐", "소", "호랑이", "토끼", "용", "뱀", "말", "양", "원숭이", "닭", "개", "돼지"].map((animal) => (
                  <div key={animal} className="text-center p-2 border border-neutral-200 rounded-lg text-sm">
                    {animal}
                  </div>
                ))}
              </div>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• 캐릭터가 운세 전달 및 코칭</li>
                <li>• 레벨업 시 진화 시스템</li>
                <li>• 시즌 한정 스킨 수집</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Blue Ocean Section */}
      <section id="blue-ocean" className="min-h-screen py-16 px-6 border-t border-neutral-200 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12">
            <h2 className="text-headline mb-6">
              아무도 하지 않은 조합
            </h2>
            <p className="text-body-large text-neutral-600 max-w-3xl">
              전 세계 어떤 서비스도 운세 + 인생설계 + 게이미피케이션 + 실시간 맥락화를 결합하지 않았습니다.
              DITTO는 이 네 가지가 만나는 블루오션에 위치합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <BlueOceanDiagram />
            </div>
            <div>
              <div className="mb-8">
                <WhyWhatHowDiagram />
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 border border-neutral-200 rounded-lg">
                  <Target size={28} weight="bold" className="flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">사주가 WHY</h4>
                    <p className="text-sm text-neutral-600">왜 이런 성향인지, 왜 이 시기가 중요한지</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-neutral-200 rounded-lg">
                  <ListChecks size={28} weight="bold" className="flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">인생설계가 WHAT</h4>
                    <p className="text-sm text-neutral-600">무엇을 목표로 할지, 어떤 행동을 취할지</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-black text-white rounded-lg">
                  <Robot size={28} weight="bold" className="flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">AI가 HOW</h4>
                    <p className="text-sm opacity-90">어떻게 실행할지, 맥락에 맞게 가이드</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patents Section */}
      <section id="patents" className="min-h-screen py-16 px-6 border-t border-neutral-200 bg-neutral-50 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16">
            <h2 className="text-headline mb-6">
              특허 기반
            </h2>
            <p className="text-body-large text-neutral-600 max-w-3xl">
              사주/운세 통합을 위해 선별된 10개 메타버스 특허.
              3개 등록 완료, 법적 보호와 경쟁 해자 확보.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {patents.map((patent) => (
              <PatentCard key={patent.number} {...patent} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section - Part 1 */}
      <section id="technologies" className="min-h-screen py-16 px-6 border-t border-neutral-200 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12">
            <h2 className="text-headline mb-6">
              10대 메타버스 기술
            </h2>
            <p className="text-body-large text-neutral-600 max-w-3xl">
              운세/인생설계 도메인에 맞게 적용된 검증된 메타버스 기술.
              각 기술은 IP 보호를 위한 특허 포트폴리오와 연결.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.slice(0, 4).map((tech, index) => (
              <TechCard key={tech.title} number={index + 1} {...tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section - Part 2 */}
      <section id="technologies-2" className="min-h-screen py-16 px-6 border-t border-neutral-200 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12">
            <h2 className="text-headline mb-6">
              10대 메타버스 기술 (계속)
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.slice(4, 8).map((tech, index) => (
              <TechCard key={tech.title} number={index + 5} {...tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section - Part 3 */}
      <section id="technologies-3" className="min-h-screen py-16 px-6 border-t border-neutral-200 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12">
            <h2 className="text-headline mb-6">
              10대 메타버스 기술 (계속)
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.slice(8, 10).map((tech, index) => (
              <TechCard key={tech.title} number={index + 9} {...tech} />
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="min-h-screen py-16 px-6 border-t border-neutral-200 bg-neutral-50 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-16">
            <h2 className="text-headline mb-6">
              12개월 로드맵
            </h2>
          </div>

          <div className="mb-16">
            <RoadmapDiagram />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 2월 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:border-black transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg">
                  2월
                </div>
                <div>
                  <h3 className="text-2xl font-bold">MVP 개발</h3>
                  <p className="text-base text-neutral-500">현재 진행중</p>
                </div>
              </div>
              <ul className="space-y-3 text-base">
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="flex-shrink-0 mt-0.5" />
                  정밀 만세력 엔진 개발
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="flex-shrink-0 mt-0.5" />
                  AI 코치 프로토타입
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="flex-shrink-0 mt-0.5" />
                  실시간 맥락 연동
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="flex-shrink-0 mt-0.5" />
                  핵심 UX 설계
                </li>
              </ul>
            </div>

            {/* 3월 */}
            <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:border-black transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center font-bold text-lg">
                  3월
                </div>
                <div>
                  <h3 className="text-2xl font-bold">베타 테스트</h3>
                  <p className="text-base text-neutral-500">내부 검증</p>
                </div>
              </div>
              <ul className="space-y-3 text-base">
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="flex-shrink-0 mt-0.5" />
                  인생설계 기본 기능
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="flex-shrink-0 mt-0.5" />
                  내부 베타 테스트
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="flex-shrink-0 mt-0.5" />
                  버그 수정 및 최적화
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="flex-shrink-0 mt-0.5" />
                  출시 준비
                </li>
              </ul>
            </div>

            {/* 4월 1일 */}
            <div className="bg-black text-white border border-black rounded-xl p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center font-bold text-lg">
                  4/1
                </div>
                <div>
                  <h3 className="text-2xl font-bold">제품 출시</h3>
                  <p className="text-base text-neutral-300">D-Day</p>
                </div>
              </div>
              <ul className="space-y-3 text-base">
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="flex-shrink-0 mt-0.5" />
                  모바일 앱 출시
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="flex-shrink-0 mt-0.5" />
                  웹 버전 공개
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="flex-shrink-0 mt-0.5" />
                  마케팅 캠페인
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="flex-shrink-0 mt-0.5" />
                  사용자 피드백 수집
                </li>
              </ul>
            </div>

            {/* 5월~ */}
            <div className="bg-white border border-neutral-200 rounded-xl p-6 hover:border-black transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full border-2 border-black flex items-center justify-center font-bold text-lg">
                  5월~
                </div>
                <div>
                  <h3 className="text-2xl font-bold">기능 확장</h3>
                  <p className="text-base text-neutral-500">지속 개선</p>
                </div>
              </div>
              <ul className="space-y-3 text-base">
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="flex-shrink-0 mt-0.5" />
                  게이미피케이션 시스템
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="flex-shrink-0 mt-0.5" />
                  3D 아바타 도입
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="flex-shrink-0 mt-0.5" />
                  소셜/궁합 기능
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={16} className="flex-shrink-0 mt-0.5" />
                  메타버스 체험
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="min-h-screen py-16 px-6 border-t border-neutral-200 flex items-center">
        <div className="max-w-6xl mx-auto w-full text-center">
          <h2 className="text-headline mb-16">
            각 앱의 최고를 가져오고,
            <br />
            놓친 것을 더합니다.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="p-8 border border-neutral-200 rounded-xl hover:border-black transition-colors">
              <p className="text-xl text-neutral-500 mb-3">점신에서</p>
              <p className="text-4xl font-bold">깊이</p>
            </div>
            <div className="p-8 border border-neutral-200 rounded-xl hover:border-black transition-colors">
              <p className="text-xl text-neutral-500 mb-3">청월당에서</p>
              <p className="text-4xl font-bold">AI 기술</p>
            </div>
            <div className="p-8 border border-neutral-200 rounded-xl hover:border-black transition-colors">
              <p className="text-xl text-neutral-500 mb-3">헬로봇에서</p>
              <p className="text-4xl font-bold">캐릭터</p>
            </div>
            <div className="p-8 border border-neutral-200 rounded-xl hover:border-black transition-colors">
              <p className="text-xl text-neutral-500 mb-3">Co-Star에서</p>
              <p className="text-4xl font-bold">소셜</p>
            </div>
            <div className="p-8 border border-neutral-200 rounded-xl hover:border-black transition-colors">
              <p className="text-xl text-neutral-500 mb-3">Fabulous에서</p>
              <p className="text-4xl font-bold">인생설계</p>
            </div>
            <div className="p-8 border border-neutral-200 rounded-xl hover:border-black transition-colors">
              <p className="text-xl text-neutral-500 mb-3">Replika에서</p>
              <p className="text-4xl font-bold">메모리</p>
            </div>
            <div className="p-8 border border-neutral-200 rounded-xl hover:border-black transition-colors">
              <p className="text-xl text-neutral-500 mb-3">Duolingo에서</p>
              <p className="text-4xl font-bold">게이미피케이션</p>
            </div>
            <div className="p-8 bg-black text-white rounded-xl">
              <p className="text-xl opacity-70 mb-3">우리의 혁신</p>
              <p className="text-4xl font-bold">메타버스</p>
            </div>
          </div>

          <div className="inline-block border-4 border-black rounded-3xl px-16 py-12">
            <p className="text-headline font-bold leading-relaxed">
              "운세를 읽는 것에서
              <br />
              사는 것으로"
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            한컴 제안서 / AI 인생설계 플랫폼 / 2026년 2월
          </p>
          <p className="text-sm text-neutral-500">
            기밀 사업 제안서
          </p>
        </div>
      </footer>
    </main>
  );
}
