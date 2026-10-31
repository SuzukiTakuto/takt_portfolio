import React from "react";
import Image from "next/image";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

type WorkDetailsProps = {
  id: number;
  appName: string;
  appImg: string;
  achievement?: string;
  description: string;
  style: string;
  isReleased: boolean;
  appUrl: string;
  gitHubUrl: string;
  technologyStack?: string[];
  onClick: () => void;
};

const WorkDetails = ({
  id,
  appName,
  appImg,
  achievement,
  description,
  style,
  isReleased,
  appUrl,
  gitHubUrl,
  technologyStack,
  onClick,
}: WorkDetailsProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className="border bg-[#050605] border-[#89B8BD] w-[320px] h-[473px] max-h-full overflow-scroll hidden-scrollbar flex justify-center relative"
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute top-3 right-3 float-right">
          <button onClick={onClick}>
            <XMarkIcon className="w-5 h-5 md:hidden" />
          </button>
        </div>
        <div className="w-5/6 overflow-y-auto hidden-scrollbar">
          {/* パネル幅が固定なので fill + object-contain で縦横比を保つ */}
          <div className="relative h-[175px] w-full pt-5">
            <Image
              src={appImg}
              alt="work-img"
              fill
              sizes="266px"
              className="object-contain"
            />
          </div>
          <h3 className="pt-3 border-b-2 border-[#89B8BD] font-bold">
            app name
            <br />
            <span className="font-normal block pt-1">{appName}</span>
          </h3>
          {achievement && (
            <h3 className="pt-3 border-b-2 border-[#89B8BD] font-bold">
              achievement
              <br />
              <span className="font-normal block pt-1">{achievement}</span>
            </h3>
          )}
          <h3 className="pt-3 border-b-2 border-[#89B8BD] font-bold">
            app url
            <br />
            <span className="font-normal block pt-1">
              {isReleased ? (
                <Link href={appUrl} target="_blank">
                  appへ移動
                </Link>
              ) : (
                appUrl
              )}
            </span>
          </h3>
          <h3 className="pt-3 border-b-2 border-[#89B8BD] font-bold">
            git hub
            <br />
            <span className="font-normal block pt-1">
              <Link href={gitHubUrl} target="_blank">
                git hubへ移動
              </Link>
            </span>
          </h3>
          <h3 className="pt-3 border-b-2 border-[#89B8BD] font-bold">
            description
            <br />
            <span className="font-normal block pt-1">{description}</span>
          </h3>
          <h3 className="pt-3 border-b-2 border-[#89B8BD] font-bold">
            開発形態
            <br />
            <span className="font-normal block pt-1">{style}</span>
          </h3>
          <div className="pt-3">
            <h3 className="font-bold">
              technology Stack {style !== "個人" && <span>(担当領域)</span>}
            </h3>
            <div className="flex flex-wrap gap-2 pb-5 pt-2">
              {technologyStack?.map((stack) => (
                <span
                  key={stack}
                  className="font-mono text-[11px] border border-[#89B8BD]/60 text-[#D6E9EB] px-2 py-1"
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WorkDetails;
