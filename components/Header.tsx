"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useColorMode from "@/hooks/useColorMode";

function Header() {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <header className="flex dark:bg-tuna-500 justify-between items-center bg-white py-8 px-4 shadow-alabama dark:shadow-dark_mode">
      <Link href={"/"}>
        <h2 className="text-sm md:text-2xl font-extrabold dark:text-white">
          Where in the world?
        </h2>
      </Link>{" "}
      <div
        className="flex justify-between items-center gap-2 cursor-pointer"
        onClick={() => {
          setColorMode(colorMode === "light" ? "dark" : "light");
        }}
      >
        {colorMode === "light" ? (
          <Image src={"/moon.svg"} alt="moon" width={20} height={20} />
        ) : colorMode === "dark" ? (
          <Image src={"/full-moon.svg"} alt="moon" width={20} height={20} />
        ) : (
          <Image src={"/moon.svg"} alt="moon" width={20} height={20} />
        )}
        <h1 className="text-xs md:text-base font-semibold dark:text-white">
          Dark Mode
        </h1>
      </div>
    </header>
  );
}

export default Header;
