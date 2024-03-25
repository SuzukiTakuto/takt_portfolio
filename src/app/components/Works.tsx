"use client";
import React, { useState, useEffect, useRef } from "react";
import WorksItem from "./WorksItem";
import WorkDetails from "./WorkDetails";
import { useInView } from "react-intersection-observer";

const workItems = [
  {
    id: 1,
    appName: "ポートフォリオサイト",
    appImg: "/images/works-imgs/works-portfolio.png",
    description: "このサイトです",
    style: "個人",
    isReleased: true,
    appUrl: "https://takt-portfolio.vercel.app/",
    gitHubUrl: "https://github.com/SuzukiTakuto/takt_portfolio",
    technologyStack: [
      "images/skill-icons/next.svg",
      "images/skill-icons/ts.svg",
      "images/skill-icons/tailwind.svg",
    ],
  },
  {
    id: 2,
    appName: "何食",
    appImg: "/images/works-imgs/works-nanitabe.png",
    description:
      "現在地、または指定した駅周辺にある飲食店からランダムに1店舗選んでくれるアプリです。",
    style: "個人",
    isReleased: true,
    appUrl: "https://apps.apple.com/jp/app/%E4%BD%95%E9%A3%9F/id6461529557",
    gitHubUrl: "https://github.com/SuzukiTakuto/Nanitabe",
    technologyStack: [
      "images/skill-icons/react-native.svg",
      "images/skill-icons/ts.svg",
    ],
  },
  {
    id: 3,
    appName: "密話廊",
    appImg: "/images/works-imgs/works-jphacks2023.png",
    achievement: "「JPHacks 2023 Award Day」進出",
    description:
      "マーダーミステリーのシナリオ制作をAIによりサポートします。また、配信されているシナリオをオンライで遊ぶことも可能です。",
    style: "チーム",
    isReleased: false,
    appUrl: "配信予定",
    gitHubUrl: "https://github.com/jphacks/TK_2301",
    technologyStack: [
      "images/skill-icons/react-native.svg",
      "images/skill-icons/ts.svg",
    ],
  },
  {
    id: 4,
    appName: "LINEトーク画面再現アプリ",
    appImg: "/images/works-imgs/works-LINE_Preview.png",
    description:
      "LINEのトーク履歴のテキストデータからをトーク画面を再現するアプリです。",
    style: "個人",
    isReleased: true,
    appUrl: "https://line-preview.vercel.app/",
    gitHubUrl: "https://github.com/SuzukiTakuto/line-preview",
    technologyStack: [
      "images/skill-icons/next.svg",
      "images/skill-icons/ts.svg",
      "images/skill-icons/tailwind.svg",
    ],
  },
];

function Works() {
  const [workItem, setWorkItem] = useState(workItems[0]);
  const [isItemClicked, setIsItemClicked] = useState(false);
  const { ref, inView } = useInView({
    // オプション
    rootMargin: "10px",
    triggerOnce: true, // 最初の一度だけ実行
  });

  const onClick = () => {
    setIsItemClicked(false);
  };

  return (
    <div ref={ref}>
      {inView && (
        <div
          id="works"
          className="animate-fade-in text-[#89B8BD] border border-[#89B8BD] mr-4 ml-4 mb-40"
        >
          <div className="title lg:text-5xl text-3xl mt-3 flex justify-center font-bold">
            <h1>works</h1>
          </div>
          <div className="flex justify-center lg:px-24 md:px-12 py-5">
            <div className="md:flex md:justify-between relative">
              <div className="md:flex md:flex-wrap md:justify-between md:mr-8 h-[473px] max-h-full overflow-scroll hidden-scrollbar">
                {workItems.map((workItem, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setWorkItem(workItem);
                      if (window.innerWidth < 768) setIsItemClicked(true);
                    }}
                  >
                    <WorksItem
                      appName={workItem.appName}
                      appImg={workItem.appImg}
                    />
                  </div>
                ))}
              </div>
              {(window.innerWidth < 768 && isItemClicked) ||
              window.innerWidth >= 768 ? (
                <div
                  className={
                    window.innerWidth < 768 ? "absolute top-0 z-10" : ""
                  }
                >
                  <WorkDetails
                    id={workItem.id}
                    appName={workItem.appName}
                    appImg={workItem.appImg}
                    achievement={workItem.achievement}
                    description={workItem.description}
                    style={workItem.style}
                    isReleased={workItem.isReleased}
                    appUrl={workItem.appUrl}
                    gitHubUrl={workItem.gitHubUrl}
                    technologyStack={workItem.technologyStack}
                    onClick={onClick}
                  />
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Works;
