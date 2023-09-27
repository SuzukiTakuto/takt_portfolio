import React from "react";
import MenuItem from "./MenuItem";

const menuLinks = [
  {
    href: "#about",
    title: "about",
  },
  {
    href: "#works",
    title: "works",
  },
  {
    href: "#contact",
    title: "contact",
  },
];

const Navbar = () => {
  return (
    <div className="fixed mx-auto bg-[#050605] top-0 left-0 right-0">
      <div className="flex container justify-between mx-auto py-8 text-[#89B8BD] px-4">
        <div className="lg:text-5xl text-3xl">ST</div>
        <div className="">
          <ul className="flex flex-raw">
            {menuLinks.map((link, index) => (
              <MenuItem key={index} href={link.href} title={link.title} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
