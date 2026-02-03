"use client";

import Image from "next/image";

const logos = [
  {
    name: "Vesper",
    file: "vesper.png",
    meaning: "저녁별 — 하루의 끝에서 내일을 비추는 빛",
  },
  {
    name: "Rome-way",
    file: "romeway-s04.png",
    meaning: "모든 길은 로마로 — 다양한 인생 경로가 하나의 목표로",
  },
  {
    name: "Solar",
    file: "solar-04.png",
    meaning: "태양 — 삶의 에너지와 방향을 밝히는 원천",
  },
  {
    name: "Theia",
    file: "theia-m05.png",
    meaning: "시각의 여신 — 보이지 않는 것을 보게 하는 통찰",
  },
  {
    name: "Arc",
    file: "arc-09.png",
    meaning: "호(弧) — 인생의 곡선, 시작과 끝을 잇는 여정",
  },
  {
    name: "Aura",
    file: "aura-s03.png",
    meaning: "기운 — 사람마다 고유한 에너지 장",
  },
  {
    name: "Frontier",
    file: "frontier-01.png",
    meaning: "개척지 — 아직 가보지 않은 미래의 가능성",
  },
  {
    name: "Nexus",
    file: "nexus-08.png",
    meaning: "연결점 — 운명과 기회가 만나는 순간",
  },
  {
    name: "Origin",
    file: "origin-10.png",
    meaning: "기원 — 모든 것의 시작, 본질로의 회귀",
  },
  {
    name: "Vertex",
    file: "vertex-s04.png",
    meaning: "정점 — 인생의 절정, 도달해야 할 목표",
  },
];

export default function LogoPage() {
  return (
    <main className="h-screen bg-white p-6 overflow-hidden">
      <div className="h-full max-w-[1800px] mx-auto flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">DITTO Logo Collection</h1>
          <p className="text-lg text-neutral-500">
            AI 코치 캐릭터 로고 및 의미
          </p>
        </div>

        <div className="flex-1 grid grid-cols-5 grid-rows-2 gap-4">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="border border-neutral-200 rounded-xl p-4 flex flex-col items-center justify-center text-center"
            >
              <div className="flex-1 flex items-center justify-center w-full mb-2">
                <Image
                  src={`/image/${logo.file}`}
                  alt={logo.name}
                  width={200}
                  height={200}
                  className="object-contain max-h-[calc(100%-2rem)]"
                />
              </div>
              <h2 className="text-xl font-bold mb-1">{logo.name}</h2>
              <p className="text-neutral-600 text-sm leading-snug">
                {logo.meaning}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
