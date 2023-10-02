import React from "react";
import Image from "next/image";

const iconPath = [
  "images/skill-icons/html5.svg",
  "images/skill-icons/css.svg",
  "images/skill-icons/react.svg",
  "images/skill-icons/react-native.svg",
  "images/skill-icons/next.svg",
  "images/skill-icons/js.svg",
  "images/skill-icons/ts.svg",
  "images/skill-icons/node.svg",
  "images/skill-icons/c++.svg",
  "images/skill-icons/tailwind.svg",
  "images/skill-icons/docker.svg",
];

const About = () => {
  return (
    <div className="text-[#89B8BD] border border-[#89B8BD] mr-4 ml-4 mb-40">
      <div className="title lg:text-5xl text-3xl mt-3 flex justify-center font-bold">
        <h1>about me</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 lg:px-40 md:px-24 py-5">
        <div className="col-span-4">
          <Image
            src="/images/profile-img.png"
            alt="profile"
            width={230}
            height={230}
            className="hidden md:block"
          />
          <div className="flex justify-center md:hidden">
            <Image
              src="/images/profile-img-sm.png"
              alt="profile"
              width={120}
              height={120}
            />
          </div>
        </div>
        <div className="col-span-8">
          <h1 className="lg:text-5xl text-3xl font-bold md:text-left text-center">
            鈴木啄斗
            <span className="lg:text-2xl text-sm ml-3">Suzuki Takuto</span>
          </h1>
          <p className="py-5 px-7 md:px-0">
            芝浦工業大学大学院理工学研究科電気電子情報工学専攻の修士1年です。
            研究では主にトランスポート層周りのプロトコルについて考えています。個人的にはフロントエンド、バックエンドの勉強をしており、将来的にはWebアプリ開発に携わることを目標としています。また、React
            Nativeを用いてモバイルアプリ開発を少し触ったりしています。
          </p>
          <div className="px-7 md:px-0">
            <h2 className="text-3xl font-bold">skills</h2>

            <div className="flex flex-wrap items-center gap-x-8">
              {iconPath.map((path, index) => (
                <div key={index} className="py-5">
                  <Image src={path} alt="icon" width={60} height={60} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
