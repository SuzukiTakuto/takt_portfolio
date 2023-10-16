"use client";
import React, { useState, useEffect, useRef } from "react";
import WorksItem from "./WorksItem";
import WorkDetails from "./WorkDetails";

const workItems = [
  {
    id: 1,
    appName: "ポートフォリオサイト",
    appImg: "/images/works-imgs/works-portfolio.png",
    description: "このサイトです",
    appUrl: "http://localhost:3000/",
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
    appUrl: "https://apps.apple.com/jp/app/%E4%BD%95%E9%A3%9F/id6461529557",
    gitHubUrl: "https://github.com/SuzukiTakuto/Nanitabe",
    technologyStack: [
      "images/skill-icons/react-native.svg",
      "images/skill-icons/ts.svg",
    ],
  },
  {
    id: 3,
    appName: "???",
    appImg: "/images/works-imgs/no-image.png",
    description: "???",
    appUrl: "???",
    gitHubUrl: "???",
    technologyStack: [],
  },
  {
    id: 4,
    appName: "???",
    appImg: "/images/works-imgs/no-image.png",
    description: "???",
    appUrl: "???",
    gitHubUrl: "???",
    technologyStack: [],
  },
];

function Works() {
  const [workItem, setWorkItem] = useState(workItems[0]);
  const [isItemClicked, setIsItemClicked] = useState(false);

  const onClick = () => {
    setIsItemClicked(false);
  };

  return (
    <div
      id="works"
      className="text-[#89B8BD] border border-[#89B8BD] mr-4 ml-4 mb-40"
    >
      <div className="title lg:text-5xl text-3xl mt-3 flex justify-center font-bold">
        <h1>works</h1>
      </div>
      <div className="flex justify-center lg:px-24 md:px-12 py-5">
        <div className="md:flex md:justify-between relative">
          <div className="md:flex md:flex-wrap md:justify-between md:mr-8 h-[473px] max-h-full overflow-scroll">
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
          <div
            className={
              isItemClicked
                ? "block absolute top-0 z-10 md:hidden"
                : "hidden md:block"
            }
          >
            <WorkDetails
              id={workItem.id}
              appName={workItem.appName}
              appImg={workItem.appImg}
              description={workItem.description}
              appUrl={workItem.appUrl}
              gitHubUrl={workItem.gitHubUrl}
              technologyStack={workItem.technologyStack}
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
