import React from "react";
import Image from "next/image";

type WorksItemProps = {
  appName: string;
  appImg: string;
};

const WorksItem = ({ appName, appImg }: WorksItemProps) => {
  return (
    <div className="border border-[#89B8BD] cursor-pointer hover:opacity-70 mb-9 max-w-sm">
      <div className="px-7 py-3">
        <Image src={appImg} alt="work-img" width={256} height={144} />
      </div>
      <h3 className="text-center py-3">{appName}</h3>
    </div>
  );
};

export default WorksItem;
