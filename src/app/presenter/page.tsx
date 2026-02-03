"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Monitor, Eye } from "@phosphor-icons/react";

// Section data with narrative-driven scripts that tell a story
const sections = [
  {
    id: "hero",
    label: "시작",
    script: `회장님, 안녕하십니까.

저희가 오늘 드리고 싶은 이야기는 하나의 질문에서 시작됩니다.

"오늘 운이 좋습니다."

그래서요? 그래서 제가 뭘 하면 됩니까?

4조원 규모의 한국 운세 시장, 수천만 명의 사용자. 그런데 아무도 이 질문에 답하지 않았습니다.

DITTO는 그 답을 드리고자 합니다.`
  },
  {
    id: "problem",
    label: "문제",
    script: `현재 운세 앱들을 보십시오.

같은 생년월일이면 10년 전이나 오늘이나 같은 해석입니다. 제가 어제 승진했든, 이혼했든, 아무 상관없이 똑같은 말을 합니다.

"왜요?" 물어볼 수도 없습니다. 일방적으로 결과만 던져주고 끝입니다.

가장 답답한 건, "재물운이 좋다"면서 정작 무엇을 하라는 건지 알려주지 않는다는 겁니다.

결과만 있고, 행동이 없습니다.

이게 4조원 시장의 현실입니다. 그리고 이게 바로 기회입니다.`
  },
  {
    id: "korean-apps",
    label: "국내 앱 1",
    script: `한국 운세 시장은 4조원 이상의 규모입니다. 먼저 국내 주요 앱들을 분석했습니다.

점신. 1,900만 다운로드로 국내 1위입니다. 10년간 축적된 만세력 데이터, 400명 전문가 네트워크. 깊이 있는 해석으로 사용자 신뢰를 쌓았습니다. 하지만 대화가 불가능합니다. "왜 그런가요?"라고 물을 수 없습니다.

포스텔러. 동양 사주와 서양 타로를 결합했습니다. 스토리텔링이 강점입니다. 같은 내용도 이야기로 전달하면 기억에 남고, 공유하고 싶어집니다. 케이뱅크와 제휴해서 금융권에도 진출했습니다. 하지만 행동 제안이 없습니다. "재물운이 좋습니다" 후에 무엇을 해야 하는지 알려주지 않습니다.`
  },
  {
    id: "korean-apps-2",
    label: "국내 앱 2",
    script: `청월당. ChatGPT 스토어 라이프스타일 카테고리에서 글로벌 1위를 달성한 한국 스타트업입니다. AI 운세에 대한 글로벌 수요가 있다는 걸 증명했습니다. 하지만 범용 GPT라서 사주 전문 지식의 깊이가 부족합니다.

헬로봇. iOS 최고 평점 4.7점입니다. '라마' 캐릭터에 대한 강한 팬덤이 형성되어 있습니다. 캐릭터가 유대를 만든다는 걸 증명했습니다. 하지만 캐릭터가 하나뿐입니다.

결론적으로, 국내 앱들은 모두 같은 한계가 있습니다. "당신은 이런 사람입니다"로 끝납니다. 어떻게 더 나은 내가 될 수 있는지는 아무도 알려주지 않습니다.`
  },
  {
    id: "global-apps",
    label: "해외 앱 1",
    script: `해외에서 성공한 앱들을 분석했습니다. 접근 방식이 달랐습니다.

Co-Star. Z세대 점성술 앱으로 500만 다운로드를 달성했는데, 마케팅 비용이 0원이었습니다. 비결은 친구 궁합 비교 기능입니다. 운세를 혼자 보는 게 아니라 함께 이야기하는 것으로 바꿨습니다. 소셜이 유기적 성장을 만든다는 걸 증명했습니다.

Replika. 1,000만 사용자가 AI와 감정적 관계를 맺고 있습니다. "어제 회의 어땠어?"라고 물어보는 AI. 사용자의 이야기를 기억하는 AI가 의미 있는 관계를 형성합니다. 기억하는 AI가 관계를 만든다는 걸 증명했습니다.`
  },
  {
    id: "global-apps-2",
    label: "해외 앱 2",
    script: `Fabulous. 앱스토어 '올해의 앱'을 수상한 습관 형성 앱입니다. 목표에서 습관으로, 습관에서 결과로 연결합니다. 게이미피케이션으로 지속성도 확보했습니다. 목표가 행동을 이끈다는 걸 증명했습니다.

The Pattern. 인생 주기를 시각화하는 앱인데, 놀라운 건 이게 사주의 대운 개념과 거의 똑같다는 겁니다. "무엇을"뿐 아니라 "언제"를 알고 싶어하는 건 동서양이 같습니다.

해외 앱들은 점성술로 결과를 알려주는 게 아니라, 자기 이해와 성장을 돕습니다. 이것이 바로 DITTO가 지향하는 방향입니다.`
  },
  {
    id: "solution",
    label: "DITTO의 답",
    script: `DITTO는 이 모든 분석 끝에 답을 찾았습니다.

사주가 WHY를 설명합니다. 왜 이런 성향인지, 왜 이 시기가 중요한지.
인생설계가 WHAT을 제시합니다. 무엇을 목표로 할지, 무엇을 실천할지.
AI가 HOW를 안내합니다. 어떻게 실행할지, 어떻게 지속할지.

운세 앱이 아닙니다.
AI 기반 인생설계 플랫폼입니다.

"운세를 읽는 것에서, 사는 것으로."`
  },
  {
    id: "ai-coaches",
    label: "5인의 코치",
    script: `DITTO에는 다섯 명의 AI 코치가 있습니다.

오행을 기반으로 설계했습니다.

목 코치는 커리어와 학습을 담당합니다. 성장하고 싶을 때 찾아가는 코치입니다.
화 코치는 연애와 관계를 담당합니다. 마음이 뜨거울 때 도움이 됩니다.
토 코치는 건강과 습관을 담당합니다. 꾸준함이 필요할 때 함께합니다.
금 코치는 재테크와 결정을 담당합니다. 날카로운 판단이 필요할 때 조언합니다.
수 코치는 정서와 명상을 담당합니다. 마음을 가라앉히고 싶을 때 찾아옵니다.

사용자의 사주를 분석해서 가장 필요한 코치가 먼저 다가갑니다.`
  },
  {
    id: "user-scenario",
    label: "하루의 여정",
    script: `한 사용자의 하루를 따라가 보겠습니다.

아침 7시. 눈을 뜨면 오늘의 운세가 와 있습니다. "오늘 화 기운이 강합니다. 관계에서 좋은 일이 있을 거예요." 오늘의 퀘스트: "동료에게 먼저 인사하기."

점심시간. "뭐 먹을까?" 물어보면 코치가 답합니다. "오늘 토 기운이 부족하시네요. 노란색 음식이 좋겠어요."

퇴근 후. 퀘스트를 완료하면 경험치를 받습니다. 동료에게 인사했더니 정말 좋은 대화가 됐습니다.

밤. 하루를 돌아봅니다. 스트릭이 쌓입니다. 127일째. 내일도 접속하게 됩니다.

운세가 하루의 일부가 됩니다.`
  },
  {
    id: "gamification",
    label: "습관의 힘",
    script: `Duolingo가 어떻게 사람들을 매일 돌아오게 만들었는지 아십니까?

손실 회피 심리입니다. 127일 스트릭을 끊기 싫어서라도 오늘 접속합니다.

저희는 이걸 운세에 적용했습니다.

스트릭 시스템으로 매일 돌아오게 합니다.
리그 시스템으로 같은 띠끼리 경쟁합니다.
인생 RPG로 퀘스트를 완료하면 스탯이 오릅니다.

그리고 12지신 캐릭터. 내 띠에 맞는 수호 캐릭터가 레벨업하면서 함께 성장합니다.

운세를 보는 게 아니라, 운세를 사는 겁니다.`
  },
  {
    id: "data-life-design",
    label: "데이터의 연결",
    script: `DITTO는 사용자의 모든 것을 연결합니다.

타고난 사주 명식.
매일의 행동 데이터.
AI와의 대화 히스토리.
오늘의 날씨와 뉴스.

이 모든 것이 하나로 엮여서 5가지 인생 로드맵을 만듭니다.

커리어. 관계. 건강. 재정. 성장.

"재물운이 좋습니다"가 아니라, "3월에 투자를 시작하세요. 당신의 대운이 재성을 만나는 시기입니다."

구체적인 시기와 구체적인 행동. 그게 인생설계입니다.`
  },
  {
    id: "patents",
    label: "검증된 기술",
    script: `저희가 만들려는 것이 허황된 이야기가 아닙니다.

LLM 대화는 ChatGPT가 증명했습니다.
AI Agent 협업은 CrewAI가 증명했습니다.
게이미피케이션은 Duolingo가 증명했습니다.
아바타와 메타버스는 Roblox가 증명했습니다.

모든 기술이 이미 검증되어 있습니다.

저희는 이걸 운세와 인생설계라는 도메인에 처음으로 통합합니다.`
  },
  {
    id: "technologies",
    label: "기술 스택 1",
    script: `핵심 기술 스택을 설명드리겠습니다.

LLM 대화 엔진. 사주 도메인에 특화된 자연어 대화 시스템입니다. "왜 오늘 직장운이 좋아요?"라고 물으면 상세한 해석과 행동 가이드를 제공합니다.

AI Agent 시스템. 오행 기반 다섯 코치가 각자 전문성을 가지고 협업합니다. 커리어 고민은 목 코치가, 재테크 질문은 금 코치가 응답합니다.

사주 RAG 시스템. 만세력, 격국, 용신 전문 지식을 벡터 데이터베이스로 구축합니다. 범용 GPT가 아닌 전문가 수준의 깊이를 확보합니다.

실시간 맥락 분석. 날씨, 뉴스, 이벤트를 사주와 결합해서 살아있는 운세를 만듭니다.`
  },
  {
    id: "technologies-2",
    label: "기술 스택 2",
    script: `이어서 설명드리겠습니다.

개인화 추천 엔진. 사용자의 행동 데이터, 퀘스트 완료율, 대화 패턴을 학습해서 추천 정확도를 지속적으로 높입니다.

디지털 DNA 아바타. 사주 명식의 오행 비율이 아바타의 외형, 색상, 스타일을 자동으로 결정합니다. 갑목 일간이면 자연 톤의 성장 지향적 아바타가 생성됩니다.

운세 연동 성장 시스템. 대운과 세운 변화에 따라 아바타와 콘텐츠가 함께 진화합니다. 40대 대운 진입 시 아바타가 변신하고 새로운 인생 단계 코칭이 시작됩니다.

궁합 매칭 엔진. 사주 궁합 알고리즘으로 연애, 비즈니스, 친구 관계를 분석하고 개선 전략을 제안합니다.`
  },
  {
    id: "technologies-3",
    label: "기술 스택 3",
    script: `마지막 두 가지입니다.

게이미피케이션 엔진. 스트릭, 퀘스트, 리그, XP 시스템으로 지속적인 참여를 이끌어냅니다. Duolingo에서 검증된 모델을 운세에 적용합니다.

메타버스 통합. 3D 아바타, 가상 공간, AR 필터를 통한 몰입형 운세 체험을 제공합니다. 운세 테마 가상 공간에서 같은 띠 사용자들이 만나고 소통합니다.

이 10가지 기술이 DITTO를 구성하는 핵심 스택입니다.`
  },
  {
    id: "roadmap",
    label: "실행 계획",
    script: `12개월 안에 시장에 나갑니다.

1-2월. MVP 개발. 정밀 만세력 엔진과 AI 코치 프로토타입을 완성합니다.

3월. 1차 출시. 모바일과 웹을 동시에 런칭합니다.

4-6월. 확장. 커뮤니티 기능, 콘텐츠 다양화, 안정화를 진행합니다.

7월. 대규모 업데이트. 프리미엄 구독, 3D 아바타, 본격 게이미피케이션을 도입합니다.

하반기. 생태계 확장. 메타버스 환경 설계, 파트너십 구축, 글로벌 진출을 준비합니다.`
  },
  {
    id: "summary",
    label: "DITTO의 본질",
    script: `DITTO가 하려는 것을 정리하겠습니다.

점신처럼 깊이 있게.
포스텔러처럼 이야기로.
청월당처럼 AI로.
헬로봇처럼 캐릭터와 함께.
Co-Star처럼 소셜하게.
Replika처럼 기억하며.
Fabulous처럼 행동으로.
Duolingo처럼 매일.

그리고 저희만의 것. K-사주를 세계로.

기존 앱들이 각각 하나씩 잘한 것을, 저희는 하나로 통합합니다.`
  },
  {
    id: "metaverse-insight",
    label: "미래",
    script: `마지막으로 한 가지 더 말씀드리겠습니다.

2027년 하반기. Apple Vision Pro 이후 경량 스마트글래스가 대중화되면, 메타버스는 게임에서 일상으로 전환됩니다.

DITTO는 이미 준비하고 있습니다.

모바일에서 시작해서, 웹으로, AR로, 메타버스로 자연스럽게 전환되는 경로를 설계하고 있습니다.

사주 기반 디지털 DNA 아바타는 메타버스에 바로 들어갈 수 있도록 설계되어 있습니다.`
  },
  {
    id: "metaverse-insight-2",
    label: "비전",
    script: `같은 운명을 가진 사람들이 가상 공간에서 만납니다.

운세 라운지에서 같은 띠끼리 모여 이야기합니다.

교육, 헬스케어, 엔터테인먼트, 커머스, HR. 모든 산업과 융합할 수 있습니다.

DITTO의 비전은 "메타버스 시대의 첫 번째 운세 및 인생설계 플랫폼"입니다.

운세를 읽는 것에서, 사는 것으로.

감사합니다.`
  },
];

export default function PresenterPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [channel, setChannel] = useState<BroadcastChannel | null>(null);

  useEffect(() => {
    // Create broadcast channel for communication
    const bc = new BroadcastChannel("ditto-presenter");
    setChannel(bc);

    // Listen for connection confirmations
    bc.onmessage = (event) => {
      if (event.data.type === "viewer-connected") {
        setIsConnected(true);
      }
    };

    // Announce presenter is ready
    bc.postMessage({ type: "presenter-ready" });

    return () => bc.close();
  }, []);

  const goToSection = (index: number) => {
    if (index >= 0 && index < sections.length) {
      setCurrentIndex(index);
      channel?.postMessage({
        type: "navigate",
        sectionId: sections[index].id,
      });
    }
  };

  const goNext = () => goToSection(currentIndex + 1);
  const goPrev = () => goToSection(currentIndex - 1);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const currentSection = sections[currentIndex];

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">DITTO Presenter Mode</h1>
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
              isConnected ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
            }`}>
              <div className={`w-2 h-2 rounded-full ${isConnected ? "bg-green-400" : "bg-yellow-400"}`} />
              {isConnected ? "Viewer Connected" : "Waiting for Viewer..."}
            </div>
            <a
              href="/"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors"
            >
              <Monitor size={16} weight="bold" />
              Open Viewer Tab
            </a>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / sections.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto">
        {/* Section navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-700 transition-colors"
          >
            <ArrowLeft size={20} weight="bold" />
            이전
          </button>
          <div className="text-center">
            <p className="text-sm text-neutral-400 mb-1">
              {currentIndex + 1} / {sections.length}
            </p>
            <h2 className="text-xl font-bold">{currentSection.label}</h2>
          </div>
          <button
            onClick={goNext}
            disabled={currentIndex === sections.length - 1}
            className="flex items-center gap-2 px-4 py-2 bg-neutral-800 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-700 transition-colors"
          >
            다음
            <ArrowRight size={20} weight="bold" />
          </button>
        </div>

        {/* Script content */}
        <div className="bg-neutral-800 rounded-2xl p-8 mb-6">
          <div className="flex items-center gap-2 text-neutral-400 text-sm mb-4">
            <Eye size={16} weight="bold" />
            스크립트
          </div>
          <div className="text-xl leading-loose whitespace-pre-line font-light">
            {currentSection.script}
          </div>
        </div>

        {/* Section thumbnails */}
        <div className="grid grid-cols-6 gap-2">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => goToSection(index)}
              className={`p-2 rounded-lg text-xs text-center transition-colors ${
                index === currentIndex
                  ? "bg-white text-black"
                  : index < currentIndex
                  ? "bg-neutral-700 text-neutral-300"
                  : "bg-neutral-800 text-neutral-500 hover:bg-neutral-700"
              }`}
            >
              {index + 1}. {section.label}
            </button>
          ))}
        </div>

        {/* Keyboard hints */}
        <div className="mt-8 text-center text-neutral-500 text-sm">
          <p>키보드: ← 이전 | → / Space / Enter 다음</p>
        </div>
      </div>
    </div>
  );
}
