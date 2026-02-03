"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Monitor, Eye } from "@phosphor-icons/react";

// Section data with narrative-driven scripts - each explains WHY
const sections = [
  {
    id: "hero",
    label: "시작",
    script: `회장님, 안녕하십니까.

오늘 제가 드리고 싶은 이야기는 하나의 질문에서 시작됩니다.

운세 앱을 열면 이런 말이 나옵니다. "오늘 운이 좋습니다."

그런데 사용자들은 속으로 이렇게 묻습니다. "그래서요? 그래서 제가 뭘 하면 됩니까?"

4조원 규모의 시장, 수천만 명의 사용자. 그런데 놀랍게도 아무도 이 질문에 답하지 않았습니다.

왜냐하면 기존 운세 앱들은 '알려주는 것'에서 멈췄기 때문입니다. DITTO는 '행동하게 하는 것'까지 가고자 합니다.`
  },
  {
    id: "problem",
    label: "문제",
    script: `왜 기존 앱들은 행동까지 연결하지 못했을까요? 세 가지 구조적 한계가 있습니다.

첫째, 정적인 콘텐츠입니다. 같은 생년월일이면 10년 전이나 오늘이나 같은 해석입니다. 제가 어제 승진했든, 이혼했든, 아무 상관없이 똑같은 말을 합니다. 사용자의 현재 상황을 반영하지 못하니, 구체적인 조언이 불가능합니다.

둘째, 일방향 전달입니다. "왜 오늘 직장운이 좋아요?"라고 물을 수 없습니다. 대화가 안 되니, 사용자의 맥락을 파악할 수 없습니다.

셋째, 행동 경로의 부재입니다. "재물운이 좋다"면서 정작 무엇을 하라는 건지 알려주지 않습니다.

이 세 가지가 해결되지 않으면, 운세는 영원히 '읽고 끝나는 것'으로 남습니다. 여기에 DITTO의 기회가 있습니다.`
  },
  {
    id: "korean-apps",
    label: "국내 앱 1",
    script: `저희는 먼저 4조원 국내 시장을 깊이 분석했습니다. 왜 이 앱들이 성공했는지, 무엇이 부족한지를 파악하기 위해서입니다.

점신은 1,900만 다운로드로 국내 1위입니다. 성공 비결은 '깊이'입니다. 10년간 축적된 만세력 데이터, 400명 전문가 네트워크. 대충 재미로 보는 게 아니라, 정확하고 깊은 해석이 사용자 충성도로 이어졌습니다. 하지만 대화가 불가능합니다. "왜 그런가요?"라고 물을 수 없습니다.

포스텔러는 '스토리텔링'으로 차별화했습니다. 같은 사주 해석도 이야기로 전달하면 기억에 남고, 친구에게 공유하고 싶어집니다. 케이뱅크 제휴로 금융권까지 확장했습니다. 하지만 "재물운이 좋습니다" 후에 무엇을 해야 하는지는 알려주지 않습니다.

깊이와 스토리텔링. 이 두 가지는 DITTO가 반드시 가져가야 할 요소입니다.`
  },
  {
    id: "korean-apps-2",
    label: "국내 앱 2",
    script: `청월당은 흥미로운 사례입니다. ChatGPT 스토어 라이프스타일 카테고리에서 글로벌 1위를 달성한 한국 스타트업입니다.

이게 왜 중요하냐면, AI 운세에 대한 글로벌 수요가 이미 존재한다는 걸 증명했기 때문입니다. 기술 차별화가 새로운 카테고리를 만들 수 있다는 증거입니다. 하지만 범용 GPT라서 사주 전문 지식의 깊이가 부족합니다. 후속 대화의 일관성도 떨어집니다.

헬로봇은 iOS 최고 평점 4.7점입니다. '라마' 캐릭터 하나가 강력한 팬덤을 만들었습니다. 사용자들은 정확한 운세보다 좋아하는 캐릭터에 이끌려 돌아옵니다. 감정적 연결이 리텐션의 핵심이라는 걸 보여줍니다.

결론적으로, 국내 앱들은 모두 "당신은 이런 사람입니다"로 끝납니다. 어떻게 더 나은 내가 될 수 있는지는 아무도 알려주지 않습니다. 이게 국내 시장의 공백입니다.`
  },
  {
    id: "global-apps",
    label: "해외 앱 1",
    script: `해외 앱을 분석한 이유가 있습니다. DITTO는 K-사주를 글로벌로 확장하고 싶습니다. 그래서 해외에서 성공한 앱들의 접근 방식을 연구했습니다.

Co-Star는 Z세대 점성술 앱으로 500만 다운로드를 달성했는데, 마케팅 비용이 0원이었습니다. 어떻게 가능했을까요? 친구 궁합 비교 기능입니다. 운세를 혼자 보는 게 아니라 함께 이야기하는 것으로 바꿨습니다. 자연스러운 바이럴 루프가 만들어졌습니다. 소셜이 유기적 성장을 만든다는 걸 증명했습니다.

Replika는 1,000만 사용자가 AI와 감정적 관계를 맺고 있습니다. 핵심은 '메모리'입니다. "어제 회의 어땠어?"라고 물어보는 AI. 기억하지 않는 AI는 매번 처음 만나는 낯선 사람일 뿐입니다. 기억하는 AI가 의미 있는 관계를 만듭니다.

소셜과 메모리. 이 두 가지가 해외 앱들이 찾은 답입니다.`
  },
  {
    id: "global-apps-2",
    label: "해외 앱 2",
    script: `Fabulous는 운세 앱이 아닙니다. 습관 형성 앱인데, 앱스토어 '올해의 앱'을 수상했습니다.

왜 이걸 분석했냐면, DITTO가 하려는 것이 바로 이것이기 때문입니다. 목표에서 습관으로, 습관에서 결과로 연결하는 것. "오늘 운세가 좋습니다"로 끝나면 아무 일도 일어나지 않습니다. 목표가 행동을 이끌어야 합니다.

The Pattern은 인생 주기를 시각화하는 앱입니다. 놀라운 발견이 있었습니다. 이게 사주의 대운 개념과 거의 똑같습니다. "무엇을"뿐 아니라 "언제"를 알고 싶어하는 건 동서양이 같다는 겁니다.

해외 앱들을 분석하면서 깨달았습니다. 국내 앱들은 결과를 알려줍니다. 해외 앱들은 성장을 돕습니다. 이것이 DITTO가 지향하는 방향입니다.`
  },
  {
    id: "solution",
    label: "DITTO의 답",
    script: `8개 앱을 분석한 끝에 DITTO의 프레임워크를 도출했습니다.

운세 앱들이 놓친 것은 '연결'이었습니다. 사주가 있고, 행동이 있고, 지속이 있는데, 이것들이 따로 놀았습니다.

DITTO는 이렇게 연결합니다.

사주가 WHY를 설명합니다. 왜 이런 성향인지, 왜 이 시기가 중요한지. 이건 점신의 깊이에서 배웠습니다.

인생설계가 WHAT을 제시합니다. 무엇을 목표로 할지, 무엇을 실천할지. 이건 Fabulous에서 배웠습니다.

AI가 HOW를 안내합니다. 어떻게 실행할지, 어떻게 지속할지. 이건 Replika와 Duolingo에서 배웠습니다.

그래서 DITTO는 운세 앱이 아닙니다. AI 기반 인생설계 플랫폼입니다.`
  },
  {
    id: "ai-coaches",
    label: "5인의 코치",
    script: `왜 다섯 명의 코치인가?

헬로봇의 '라마' 캐릭터가 증명했습니다. 캐릭터가 유대를 만든다는 걸요. 하지만 라마는 하나뿐입니다. 커리어도, 연애도, 건강도 한 캐릭터가 다 담당합니다.

저희는 사주의 오행에서 답을 찾았습니다. 목화토금수. 각각 다른 에너지, 다른 영역을 담당합니다.

목 코치는 성장을 담당합니다. 커리어와 학습. 위로 뻗어나가는 에너지입니다.
화 코치는 열정을 담당합니다. 연애와 관계. 뜨겁게 타오르는 에너지입니다.
토 코치는 안정을 담당합니다. 건강과 습관. 묵묵히 쌓아가는 에너지입니다.
금 코치는 결단을 담당합니다. 재테크와 의사결정. 날카롭게 자르는 에너지입니다.
수 코치는 지혜를 담당합니다. 정서와 명상. 깊이 흐르는 에너지입니다.

사용자의 사주에서 용신을 분석해서, 가장 필요한 코치가 먼저 다가갑니다. 이게 개인화입니다.`
  },
  {
    id: "user-scenario",
    label: "하루의 여정",
    script: `이론만으로는 와닿지 않습니다. 한 사용자의 하루를 따라가 보겠습니다.

아침 7시. 눈을 뜨면 오늘의 운세가 와 있습니다. "오늘 화 기운이 강합니다. 관계에서 좋은 일이 있을 거예요." 여기까지는 기존 앱과 같습니다. 하지만 DITTO는 여기서 멈추지 않습니다. 오늘의 퀘스트가 뜹니다: "동료에게 먼저 인사하기."

점심시간. "뭐 먹을까?" 물어보면 토 코치가 답합니다. "오늘 토 기운이 부족하시네요. 노란색 음식이 좋겠어요." 사주와 실시간 맥락이 결합된 조언입니다.

퇴근 후. 퀘스트를 완료합니다. 동료에게 인사했더니 정말 좋은 대화가 됐습니다. 경험치 15XP를 받습니다.

밤. 하루를 돌아봅니다. 스트릭이 127일째입니다. 내일도 접속하게 됩니다.

운세가 하루의 일부가 됩니다. 읽는 것에서, 사는 것으로.`
  },
  {
    id: "gamification",
    label: "습관의 힘",
    script: `왜 게이미피케이션인가?

Duolingo를 보십시오. 어학 앱인데, 사람들이 127일 스트릭을 끊기 싫어서 새벽에도 접속합니다. 손실 회피 심리입니다. 인간은 얻는 것보다 잃는 것을 더 두려워합니다.

운세 앱의 가장 큰 문제는 리텐션입니다. 오늘 운세 보고, 내일 또 올까요? 대부분 안 옵니다. 저희는 이걸 해결해야 했습니다.

스트릭 시스템. 매일 접속하면 스트릭이 쌓입니다. 7일, 30일, 100일, 365일. 마일스톤마다 보상이 있습니다.

리그 시스템. 같은 띠끼리, 같은 사주 그룹끼리 주간 경쟁을 합니다. 매주 리셋되니 신선함이 유지됩니다.

인생 RPG. 커리어, 관계, 건강, 재정, 성장. 다섯 가지 스탯이 있습니다. 퀘스트를 완료하면 스탯이 오릅니다.

그리고 12지신 캐릭터. 내 띠에 맞는 수호 캐릭터가 나와 함께 레벨업합니다.

운세를 보는 게 아니라, 운세를 삽니다.`
  },
  {
    id: "data-life-design",
    label: "데이터의 연결",
    script: `여기서 핵심 질문이 나옵니다. "어떻게 개인화된 행동 제안이 가능한가?"

기존 앱들은 생년월일만 봅니다. 그래서 같은 사람에게 영원히 같은 말을 합니다.

DITTO는 다릅니다. 다섯 가지 데이터를 연결합니다.

타고난 사주 명식. 이건 변하지 않는 기본 설정입니다.
일상 패턴. 수면, 활동, 습관. 이건 매일 변합니다.
대화 히스토리. 무엇을 고민하는지, 무엇을 좋아하는지. 맥락이 쌓입니다.
행동 데이터. 어떤 퀘스트를 완료했는지, 어떤 걸 건너뛰었는지.
실시간 맥락. 오늘 날씨, 뉴스, 이벤트.

이 모든 것이 하나로 엮여서 5가지 인생 로드맵을 만듭니다. 커리어, 관계, 건강, 재정, 성장.

"재물운이 좋습니다"가 아니라, "3월에 투자를 시작하세요. 당신의 대운이 재성을 만나는 시기입니다. 지난달 금 코치와의 대화에서 부동산에 관심 있다고 하셨는데, 이번 달 부동산 시장 동향을 보면..."

구체적인 시기, 구체적인 행동, 개인화된 맥락. 그게 인생설계입니다.`
  },
  {
    id: "patents",
    label: "검증된 기술",
    script: `"이게 정말 가능한가?"라고 물으실 수 있습니다.

저희가 만들려는 것이 허황된 이야기가 아니라는 걸 보여드리겠습니다. 모든 기술이 이미 시장에서 검증되었습니다.

LLM 대화? ChatGPT가 전 세계 1억 명에게 증명했습니다.
AI Agent 협업? CrewAI, AutoGPT가 새로운 패러다임을 열었습니다.
게이미피케이션? Duolingo가 5억 다운로드로 증명했습니다.
아바타와 메타버스? Roblox, Zepeto가 수억 명의 사용자를 확보했습니다.

기술은 이미 있습니다. 문제는 통합입니다.

아무도 이 기술들을 운세와 인생설계라는 도메인에 통합하지 않았습니다. DITTO가 처음입니다.`
  },
  {
    id: "technologies",
    label: "기술 스택",
    script: `10가지 핵심 기술로 DITTO를 구성합니다.

간단히 설명드리면,

대화 레이어. LLM 대화 엔진과 AI Agent 시스템으로 다섯 코치가 자연스럽게 협업합니다. 사주 전문 RAG로 범용 GPT가 아닌 전문가 수준의 깊이를 확보합니다.

맥락 레이어. 실시간 맥락 분석으로 오늘 날씨, 뉴스, 이벤트를 사주와 결합합니다. 개인화 추천 엔진으로 사용자 행동을 학습합니다.

표현 레이어. 디지털 DNA 아바타는 사주에 따라 자동 생성되고, 대운에 따라 진화합니다. 메타버스 통합으로 가상 공간까지 확장합니다.

참여 레이어. 게이미피케이션 엔진으로 스트릭, 퀘스트, 리그를 운영합니다. 궁합 매칭 엔진으로 소셜 기능을 지원합니다.

모두 검증된 기술입니다. 저희는 이걸 하나로 통합합니다.`
  },
  {
    id: "roadmap",
    label: "실행 계획",
    script: `12개월 안에 시장에 나갑니다. 왜 이 일정인지 설명드리겠습니다.

1-2월은 MVP 개발입니다. 정밀 만세력 엔진과 AI 코치 프로토타입을 완성합니다. 핵심 기능만 빠르게 만들어서 시장 반응을 봅니다.

3월에 1차 출시합니다. 모바일과 웹을 동시에 런칭합니다. 초기 사용자 피드백을 받으면서 제품을 다듬습니다.

4-6월은 확장 1단계입니다. 커뮤니티 기능, 콘텐츠 다양화, 안정화를 진행합니다. 사용자 기반을 키웁니다.

7월에 대규모 업데이트를 합니다. 프리미엄 구독, 3D 아바타, 본격 게이미피케이션을 도입합니다. 수익 모델을 본격화합니다.

하반기에는 생태계를 확장합니다. 메타버스 환경 설계, 파트너십 구축, 글로벌 진출을 준비합니다.

빠른 출시, 빠른 학습, 빠른 확장. 이게 저희의 전략입니다.`
  },
  {
    id: "summary",
    label: "DITTO의 본질",
    script: `정리하겠습니다. DITTO가 하려는 것은 무엇인가?

8개 앱을 분석하면서 각각의 성공 요인을 추출했습니다.

점신에서 배운 것: 깊이. 대충 재미로 보는 게 아니라 정확해야 신뢰가 쌓입니다.
포스텔러에서 배운 것: 스토리텔링. 같은 내용도 이야기로 전달하면 기억에 남습니다.
청월당에서 배운 것: AI 기술. 글로벌 수요가 있고, 기술 차별화가 카테고리를 만듭니다.
헬로봇에서 배운 것: 캐릭터. 감정적 연결이 리텐션의 핵심입니다.
Co-Star에서 배운 것: 소셜. 함께 이야기하면 유기적으로 성장합니다.
Replika에서 배운 것: 메모리. 기억하는 AI가 의미 있는 관계를 만듭니다.
Fabulous에서 배운 것: 행동 설계. 목표가 행동을 이끕니다.
Duolingo에서 배운 것: 게이미피케이션. 손실 회피가 습관을 만듭니다.

기존 앱들이 각각 하나씩 잘한 것을, 저희는 하나로 통합합니다. 그리고 K-사주를 세계로 가져갑니다.`
  },
  {
    id: "metaverse-insight",
    label: "미래",
    script: `마지막으로 한 가지 더 말씀드리겠습니다. 왜 메타버스를 준비하는가?

2027년 하반기가 전환점입니다. Apple Vision Pro 이후 경량 스마트글래스가 대중화되면, 메타버스는 게임에서 일상으로 전환됩니다.

지금 모바일 앱으로 시작하지만, 2년 후에는 완전히 다른 세상이 열립니다. 그때 준비가 안 되어 있으면 늦습니다.

DITTO는 처음부터 이걸 염두에 두고 설계하고 있습니다. 모바일에서 시작해서, 웹으로, AR로, 메타버스로 자연스럽게 전환되는 경로를 준비합니다.

사주 기반 디지털 DNA 아바타는 메타버스에 바로 들어갈 수 있도록 3D로 설계됩니다. 지금은 2D로 보여주지만, 데이터 구조는 3D입니다.`
  },
  {
    id: "metaverse-insight-2",
    label: "비전",
    script: `메타버스에서 DITTO는 어떤 모습일까요?

같은 운명을 가진 사람들이 가상 공간에서 만납니다. 운세 라운지에서 같은 띠끼리 모여 이야기합니다. 오늘 운세가 비슷한 사람들끼리 그룹이 형성됩니다.

AI 코치가 3D 아바타로 눈앞에 나타나서 조언합니다. 명상 퀘스트를 수 코치와 함께 가상 정원에서 수행합니다.

그리고 산업 융합의 가능성이 열립니다. 교육, 헬스케어, 엔터테인먼트, 커머스, HR. 사주 기반 개인화가 모든 산업에 적용될 수 있습니다.

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
