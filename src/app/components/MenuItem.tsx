import React from "react";
import Link from "next/link";

type MenuItemProps = {
  href: string;
  title: string;
};

const MenuItem = ({ href, title }: MenuItemProps) => {
  return (
    <Link href={href} className="px-5 lg:text-2xl md:text-xl hover:opacity-70">
      {title}
    </Link>
  );
};

export default MenuItem;
