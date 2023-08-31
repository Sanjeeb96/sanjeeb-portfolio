import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

import { navLinks } from "@/constants";
import { logo1, menu, close } from "@/assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={logo1}
            alt="logo"
            height={30}
            width={30}
            className="object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Sanjeeb
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium `}
              key={link.id}
            >
              <Link href={`#${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            className="object-contain cursor-pointer"
            alt="menu"
            height={28}
            width={28}
            onClick={() => {
              setToggle(!toggle);
            }}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}
          >
            <ul className="list-none flex justify-end flex-col items-start gap-4">
              {navLinks.map((link) => (
                <li
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } text-[16px] font-medium font-poppins cursor-pointer hover:text-white`}
                  key={link.id}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <Link href={`#${link.id}`}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
