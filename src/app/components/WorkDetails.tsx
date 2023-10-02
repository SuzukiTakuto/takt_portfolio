import React from "react";
import Image from "next/image";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/solid";

type WorkDetailsProps = {
  id: number;
  appName: string;
  appImg: string;
  description: string;
  appUrl: string;
  gitHubUrl: string;
  technologyStack?: string[];
  onClick: () => void;
};

const WorkDetails = ({
  id,
  appName,
  appImg,
  description,
  appUrl,
  gitHubUrl,
  technologyStack,
  onClick,
}: WorkDetailsProps) => {
  return (
    <div className="border bg-[#050605] border-[#89B8BD] w-[320px] h-[473px] max-h-full overflow-scroll flex justify-center relative">
      <div className="absolute top-3 right-3">
        <button onClick={onClick}>
          <XMarkIcon className="w-5 h-5 md:hidden" />
        </button>
      </div>
      <div className="w-5/6">
        <div className="flex justify-center pt-5">
          <Image src={appImg} alt="work-img" width={289} height={175} />
        </div>
        <h3 className="pt-3 border-b-2 border-[#89B8BD] font-bold">
          app name
          <br />
          <span className="font-normal block pt-1">{appName}</span>
        </h3>
        <h3 className="pt-3 border-b-2 border-[#89B8BD] font-bold">
          app url
          <br />
          <span className="font-normal block pt-1">
            <Link href={appUrl}>{appUrl}</Link>
          </span>
        </h3>
        <h3 className="pt-3 border-b-2 border-[#89B8BD] font-bold">
          git hub
          <br />
          <span className="font-normal block pt-1">
            <Link href={gitHubUrl}>{gitHubUrl}</Link>
          </span>
        </h3>
        <h3 className="pt-3 border-b-2 border-[#89B8BD] font-bold">
          description
          <br />
          <span className="font-normal block pt-1">{description}</span>
        </h3>
        <div className="pt-3">
          <h3 className="font-bold">technology Stack</h3>
          <div className="flex flex-wrap items-center gap-x-8 pb-5">
            {technologyStack?.map((stack, index) => (
              <div key={index} className="py-1">
                <Image src={stack} alt="icon" width={30} height={30} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetails;
