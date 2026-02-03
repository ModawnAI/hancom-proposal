"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Monitor, Eye } from "@phosphor-icons/react";

// Section data with narrative-driven scripts - each explains WHY
const sections = [
  {
    id: "hero",
    label: "시작: 질문",
    script: `회장님, / 안녕하십니까.

오늘 발표는 / 누구나 한 번쯤 겪어보셨을 **'허무한 순간'**에서 시작합니다.

(핸드폰을 보는 시늉)
스마트폰에서 운세 앱을 켭니다. 화면에는 이렇게 뜹니다.
"오늘 당신의 운이 **아주** 좋습니다."

그 순간, / 우리는 본능적으로 되묻게 됩니다.
(의문 섞인 어조로) **"그래서요?** / **그래서** 지금 당장 / 제가 **뭘** 하면 됩니까?"

**4조 원**의 거대한 시장, / **수천만 명**의 사용자가 매일 이 질문을 던지지만...
놀랍게도 / 그 **누구도** 답을 주지 않고 있습니다.

기존의 운세는 **'읽어주는 것'**에서 멈췄습니다.
하지만 DITTO는 다릅니다. / 우리는 운세를 **'행동하게 만드는 것'**으로 정의합니다.`
  },
  {
    id: "problem",
    label: "문제: 단절",
    script: `왜 그동안 아무도 행동을 이끌어내지 못했을까요?
단순한 기능 부족이 아닙니다. / 구조적인 **'세 가지 단절'** 때문입니다.

(손가락으로 하나씩 꼽으며)
첫째, **'현실과의 단절'**입니다.
10년 전의 저와 / 오늘의 저는 다른 사람입니다. / 하지만 기존 앱은 생년월일이 같다는 이유로, / 제가 이혼을 했든 승진을 했든 **똑같은 텍스트**만 띄웁니다. / **죽어있는 정보**입니다.

둘째, **'소통의 단절'**입니다.
"왜 오늘 조심해야 하죠?"라고 물을 수 없습니다. / 일방적인 통보만 있을 뿐, / 맥락을 파악할 **대화**가 없습니다.

셋째, **'행동의 단절'**입니다.
"재물운이 좋다"는 말은 공허합니다. / 당장 주식 앱을 켜야 할지, 적금을 들어야 할지 / **알려주지 않습니다.**

이 세 가지 벽을 넘지 못하면, / 운세는 영원히 **'재미로 보고 잊혀지는 가십'**에 머물게 됩니다.`
  },
  {
    id: "korean-apps",
    label: "국내 시장: 한계",
    script: `우리는 답을 찾기 위해 / 먼저 **시장의 지배자들**을 분석했습니다.

국내 1위 **'점신'**은 1,900만 다운로드를 기록했습니다. / 그들은 **'정통성'**을 증명했습니다. / 사람들은 가벼운 재미보다 **깊이 있는 데이터**를 원한다는 것을 확인시켜 주었죠. / 하지만 여전히 / **대화**는 불가능합니다.

**'포스텔러'**는 **'스토리'**의 힘을 보여줬습니다. / 딱딱한 사주풀이를 이야기로 풀어내니 / MZ세대가 반응했습니다. / 하지만 "재물운이 좋다"는 이야기 끝에... / **구체적인 액션 플랜**은 여전히 비어있습니다.

깊이와 스토리. / 이 두 가지는 훌륭한 기초지만, / **'행동'**으로 이어지지 않는다는 / **치명적인 한계**가 여전히 남아있습니다.`
  },
  {
    id: "korean-apps-2",
    label: "국내 시장: 가능성",
    script: `여기서 / **흥미로운 신호들**이 포착됩니다.

**'청월당'**을 보십시오. / 한국 스타트업이 글로벌 GPT 스토어 **1위**를 했습니다. / K-운세에 대한 **글로벌 갈증**이 / 이미 폭발 직전이라는 증거입니다. / 하지만 범용 기술이라 깊이가 얕습니다.

**'헬로봇'**은 **'캐릭터'**가 곧 리텐션임을 증명했습니다. / 사람들은 운세가 아니라 / **'라마'**라는 캐릭터를 보러 들어옵니다. / **감정적 애착**이 형성된 것이죠.

국내 시장을 정리하면 이렇습니다.
데이터도 있고, / 스토리도 있고, / 캐릭터도 있습니다.
하지만 여전히... **"그래서 어떻게 살아야 하나?"**라는 질문에는 / 아무도 답하지 못하고 있습니다.

이것이 바로 / **DITTO가 파고들 빈틈**입니다.`
  },
  {
    id: "global-apps",
    label: "해외 시장: 힌트",
    script: `시야를 세계로 넓혀보겠습니다. / DITTO의 목표는 **글로벌**이기 때문입니다. / 해외의 성공 방정식은 우리와 달랐습니다.

미국의 **'Co-Star'**는 마케팅비 0원으로 / 500만 유저를 모았습니다. / 비결은 **'소셜'**입니다. / 운세를 혼자 보는 비밀이 아니라, / **친구와 공유하고 비교하는 이야깃거리**로 만들었습니다.

**'Replika'**는 1,000만 명이 사용하는 AI 친구입니다. / 핵심은 **'기억'**입니다.
(따뜻한 어조로) "어제 그 미팅 어땠어?"라고 먼저 물어봐주는 AI. / **기억**이 관계를 만들고, / **관계**가 사용자를 붙잡아둡니다.

**'함께 이야기하는 것'**과 / **'나를 기억해주는 것'**.
해외 앱들은 이 **감성적 터치**를 통해 / 기술적 한계를 넘어서고 있었습니다.`
  },
  {
    id: "global-apps-2",
    label: "해외 시장: 인사이트",
    script: `가장 결정적인 힌트는 / 운세 앱이 **아닌 곳**에서 찾았습니다.

**'Fabulous'**는 습관 형성 앱입니다. / 앱스토어 **'올해의 앱'**을 받았죠.
운세 앱들이 단순히 "운이 좋다"고 말할 때, / 이들은 **작은 습관**을 제안하고 / **행동**을 바꿉니다. / DITTO가 가고자 하는 길이 바로 여기입니다.

**'The Pattern'**은 인생의 흐름을 그래프로 보여줍니다. / 놀랍게도 이것은 / 사주의 **'대운'** 개념과 정확히 일치합니다. / "내가 **언제** 나아갈지"를 알고 싶은 욕망은 / 동서양을 막론하고 **본능**이라는 뜻입니다.

결론이 나왔습니다.
국내 앱은 **'결과'**를 통보하고, / 해외 앱은 **'성장'**을 돕습니다.
DITTO는 이 둘을 합칩니다. / **결과를 예측하고**, / **성장을 설계합니다.**`
  },
  {
    id: "solution",
    label: "DITTO의 정의",
    script: `수많은 앱을 해부한 끝에, / DITTO만의 **성공 방정식**을 도출했습니다.

그동안 운세 시장은 파편화되어 있었습니다. / 사주 따로, 행동 따로, 지속성은 없었습니다.
DITTO는 / 이 모든 것을 **'연결'**합니다.

(제스처와 함께 명확하게)
1. **사주 데이터**가 **WHY**를 설명합니다. "당신이 왜 지금 힘든지, / 왜 지금이 기회인지."
2. **인생 설계**가 **WHAT**을 제시합니다. "그래서 **무엇**을 목표로 해야 하는지."
3. **AI 코치**가 **HOW**를 가이드합니다. "**어떻게** 실행하고 지속할지."

한마디로 정의하겠습니다.
(천천히, 힘주어) DITTO는 운세 앱이 아닙니다. / **'AI 기반 인생 설계 플랫폼'**입니다.`
  },
  {
    id: "ai-coaches",
    label: "솔루션: 5인의 이사회",
    script: `어떻게 설계할 것인가? / 우리는 사용자를 위한 **'개인 이사회'**를 꾸려주기로 했습니다.

헬로봇의 라마는 혼자서 모든 걸 다 합니다. / 하지만 현실의 멘토는 분야별로 다릅니다.
우리는 사주의 **오행(Five Elements)**을 / **다섯 명의 AI 코치**로 의인화했습니다.

목(Wood) 코치는 **성장**을, / 화(Fire) 코치는 **열정과 관계**를.
토(Earth) 코치는 **건강과 습관**을, / 금(Metal) 코치는 **재무적 결단**을.
수(Water) 코치는 **멘탈과 지혜**를 담당합니다.

중요한 건 **'동적 할당'**입니다. / 사용자의 사주에서 / 지금 **가장 필요한 기운**이 무엇인지 분석해, / 그에 맞는 코치가 먼저 말을 겁니다.
이것이 진정한 의미의 **'초개인화'**입니다.`
  },
  {
    id: "user-scenario",
    label: "사용자 경험",
    script: `이론은 접어두고, / 실제 사용자의 **하루**를 보여드리겠습니다.

(빠르고 경쾌하게)
아침 7시. 알림이 울립니다.
단순한 운세가 아닙니다. / "오늘 화(Fire) 기운이 강합니다. / 사람을 만나는 게 유리해요."
그리고 바로 **퀘스트**가 뜹니다. / "오늘 점심, 동료에게 먼저 말 걸기."

점심시간. "뭐 먹지?" 고민할 때 / **토(Earth) 코치**가 끼어듭니다.
"오늘 기운이 좀 쇠하네요. / 소화가 잘되는 노란색 호박죽 어때요?"
사주 데이터와 / 실시간 상황이 **결합된 순간**입니다.

저녁. 퀘스트 완료 버튼을 누릅니다. / 경험치(XP)가 오르고, 아바타가 성장합니다.
"오늘 참 잘했어요"라는 AI의 칭찬과 함께 / 하루를 마감합니다.

운세는 / 더 이상 아침에 읽고 버리는 텍스트가 아닙니다. / 하루 종일 나와 함께 호흡하는 **'라이프 OS'**가 됩니다.`
  },
  {
    id: "gamification",
    label: "리텐션 전략",
    script: `좋은 조언도 안 지키면 소용없습니다. / 어떻게 사용자를 계속 움직이게 할까요?
답은 **'게이미피케이션'**입니다.

듀오링고의 사용자들이 왜 새벽 2시에 일어나 영어 공부를 할까요? / 100일 넘게 쌓은 **스트릭(Streak)**이 깨지는 게 두렵기 때문입니다. / 우리는 이 강력한 **'손실 회피 심리'**를 가져옵니다.

1. **스트릭 시스템**: 접속이 끊기면 공든 탑이 무너집니다. / 매일 들어올 수밖에 없습니다.
2. **리그 시스템**: 나와 사주가 비슷한 사람들끼리 경쟁합니다. / "같은 쥐띠인데 쟤는 레벨이 높네?" / 경쟁심을 자극합니다.
3. **인생 RPG**: 내 인생의 5가지 스탯을 시각화합니다.

현실의 내 인생을 / 게임처럼 레벨업하는 재미.
이것이 DITTO가 사용자를 365일 붙잡아두는 / 강력한 **락인(Lock-in) 전략**입니다.`
  },
  {
    id: "data-life-design",
    label: "기술적 차별점",
    script: `혹자는 묻습니다. / **"그게 정말 기술적으로 됩니까?"**
가능합니다. / DITTO는 **5차원의 데이터**를 융합하기 때문입니다.

1. 불변의 데이터: **태어난 사주 명식**
2. 변하는 데이터: 매일의 **수면, 활동 패턴**
3. 언어 데이터: **고민 상담, 대화 기록**
4. 행동 데이터: **퀘스트 수행 여부**
5. 환경 데이터: **날씨, 뉴스, 경제 상황**

기존 앱들이 1번, 사주만 볼 때, / 우리는 5가지를 **교차 분석**합니다.

"재물운이 좋다"가 아니라,
"회원님, 대운이 재성을 만나는 3월입니다. / 지난주 부동산 고민하셨죠? / 요즘 금리가 변동 중이니, / 이번 주말엔 **임장을 다녀오는 퀘스트**를 드릴게요."

이것이 우리가 말하는 **'데이터 기반 인생 설계'**입니다.`
  },
  {
    id: "patents",
    label: "실현 가능성",
    script: `이것은 먼 미래의 공상과학이 아닙니다.
우리가 필요한 모든 기술은 / 이미 시장에서 **개별적으로 검증**되었습니다.

ChatGPT는 대화형 AI를, / CrewAI는 에이전트 협업을 증명했습니다.
듀오링고는 게이미피케이션을, / 로블록스는 아바타 경제를 입증했죠.

기술은 이미 있습니다. / 하지만 아무도 이 기술들을 **'운세'**와 **'인생 설계'**라는 그릇에 담아내지 못했습니다.
조각난 기술들을 통합하여 / **새로운 가치**를 만드는 것, / 그것이 DITTO의 혁신입니다.`
  },
  {
    id: "technologies",
    label: "핵심 기술 스택",
    script: `DITTO를 지탱하는 기술 기둥은 / 크게 **네 가지**입니다.

첫째, **대화 레이어**.
범용 LLM이 아닙니다. / 사주 전문 데이터를 학습한 RAG 엔진과 / 5명의 페르소나 에이전트가 **유기적으로** 대화합니다.

둘째, **맥락 레이어**.
실시간 외부 데이터를 사주 해석에 반영하는 / **추천 엔진**입니다.

셋째, **표현 레이어**.
사주에 따라 생성되고, 대운에 따라 늙거나 젊어지는 / **'진화형 디지털 DNA 아바타'** 기술입니다.

넷째, **참여 레이어**.
사용자를 몰입시키는 / 게이미피케이션 및 소셜 매칭 엔진입니다.

**검증된 기술 블록**들을 / DITTO만의 설계도로 / 완벽하게 조립하겠습니다.`
  },
  {
    id: "roadmap",
    label: "로드맵",
    script: `우리는 **속도전**으로 시장을 장악할 것입니다. / 향후 12개월의 계획입니다.

**1~2월**, MVP 개발입니다. / 화려함보다는 **'정확한 만세력'**과 **'매력적인 코치'**의 페르소나 완성에 집중합니다.

**3월**, 1차 출시. / 모바일과 웹을 동시 오픈하여 / 시장의 데이터를 흡수합니다.

**2분기**, 확장 단계. / 사용자 피드백을 바탕으로 / 커뮤니티 기능을 붙여 **리텐션**을 확보합니다.

**하반기**, 수익화 및 진화. / 3D 아바타, 프리미엄 구독 모델을 도입하고, / 본격적으로 글로벌 및 메타버스 생태계를 준비합니다.

출시, / 검증, / 그리고 **폭발적 확장**.
빈틈없는 스케줄로 움직이겠습니다.`
  },
  {
    id: "summary",
    label: "핵심 요약",
    script: `정리하겠습니다. / DITTO의 본질은 **'통합'**입니다.

우리는 시장의 성공 방정식들을 하나로 모았습니다.
점신의 **깊이**, / 포스텔러의 **재미**, / 헬로봇의 **캐릭터**, / 듀오링고의 **습관**, / 레플리카의 **기억**.

이 모든 요소를 하나의 앱에 담아, / 가장 한국적인 콘텐츠인 **'사주'**를 / 가장 **글로벌한 서비스**로 재탄생시켰습니다.
단순한 짬뽕이 아닙니다. / 이것은 운세 서비스의 **진화**이자 **완성형**입니다.`
  },
  {
    id: "metaverse-insight",
    label: "넥스트 스텝",
    script: `마지막으로 / 우리의 시선이 닿아 있는 곳을 말씀드리겠습니다. / 바로 **'메타버스'**입니다.

2027년, 스마트 글래스가 대중화되는 순간, / 모바일 화면 속의 운세는 **낡은 것**이 됩니다.
DITTO는 그때를 위해 / 처음부터 **3D 데이터**를 기반으로 설계되었습니다.

내 사주 정보를 담은 **'디지털 DNA 아바타'**.
지금은 폰 화면에 있지만, / 2년 뒤에는 사용자의 눈앞에, / **가상 공간**에 서 있게 될 것입니다.
남들이 모바일 앱을 만들 때, / 우리는 이미 **그 다음 세상**을 짓고 있습니다.`
  },
  {
    id: "metaverse-insight-2",
    label: "비전: 삶의 변화",
    script: `상상해 보십시오.

(차분하고 웅장하게)
메타버스 라운지에서 / 나와 운명의 흐름이 비슷한 / 전 세계 사람들이 모입니다.
3D로 구현된 수(Water) 코치와 / 가상의 정원에서 함께 명상하며 스트레스를 풉니다.
단순한 텍스트 쪼가리가 아니라, / 내 삶을 가이드하는 **실체화된 존재**.

DITTO의 비전은 명확합니다.
**"메타버스 시대의 / 첫 번째 인생 설계 플랫폼."**

운세, / 이제 읽지만 마십시오. / **DITTO와 함께 살아가십시오.**

감사합니다.`
  }
];

// Parse script formatting: **bold**, / pause, (stage direction)
function parseScript(script: string) {
  const lines = script.split('\n');
  
  return lines.map((line, lineIndex) => {
    if (line.trim() === '') {
      return <div key={lineIndex} className="h-4" />;
    }
    
    // Split by formatting markers
    const parts: React.ReactNode[] = [];
    let remaining = line;
    let partIndex = 0;
    
    while (remaining.length > 0) {
      // Check for stage direction (text in parentheses at start or standalone)
      const stageMatch = remaining.match(/^\(([^)]+)\)/);
      if (stageMatch) {
        parts.push(
          <span key={partIndex++} className="text-amber-400/70 italic text-base mr-2">
            [{stageMatch[1]}]
          </span>
        );
        remaining = remaining.slice(stageMatch[0].length);
        continue;
      }
      
      // Check for bold **text**
      const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);
      if (boldMatch) {
        const beforeBold = remaining.slice(0, boldMatch.index);
        if (beforeBold) {
          // Process pauses in beforeBold
          parts.push(...parsePauses(beforeBold, partIndex));
          partIndex += beforeBold.split('/').length;
        }
        parts.push(
          <span key={partIndex++} className="text-amber-300 font-bold">
            {boldMatch[1]}
          </span>
        );
        remaining = remaining.slice((boldMatch.index || 0) + boldMatch[0].length);
        continue;
      }
      
      // No more special formatting, process remaining with pauses
      parts.push(...parsePauses(remaining, partIndex));
      break;
    }
    
    return (
      <div key={lineIndex} className="mb-3">
        {parts}
      </div>
    );
  });
}

// Parse pause markers (/)
function parsePauses(text: string, startIndex: number): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const segments = text.split(' / ');
  
  segments.forEach((segment, i) => {
    if (segment.trim()) {
      parts.push(<span key={startIndex + i * 2}>{segment}</span>);
    }
    if (i < segments.length - 1) {
      parts.push(
        <span key={startIndex + i * 2 + 1} className="mx-2 text-neutral-600 select-none">
          •
        </span>
      );
    }
  });
  
  return parts;
}

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
          <div className="flex items-center justify-between text-sm mb-6">
            <div className="flex items-center gap-2 text-neutral-400">
              <Eye size={16} weight="bold" />
              스크립트
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="flex items-center gap-1">
                <span className="text-amber-300 font-bold">강조</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="text-neutral-600">•</span>
                <span className="text-neutral-500">잠깐 멈춤</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="text-amber-400/70 italic">[지시]</span>
              </span>
            </div>
          </div>
          <div className="text-xl leading-relaxed font-light">
            {parseScript(currentSection.script)}
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
