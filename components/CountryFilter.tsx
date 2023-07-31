"use client";

import React from "react";
import { useRef } from "react";
import Image from "next/image";

function CountryFilter() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div
      onClick={handleDivClick}
      className="search bg-white shadow-alabama w-[343px] pl-8 mx-auto flex items-center justify-between h-12 my-20"
    >
      <Image
        src={"/search.svg"}
        width={16}
        height={16}
        className="absolute cursor-pointer"
        alt="search"
      />
      <input
        ref={inputRef}
        type="text"
        className="pl-[26px] text-xs font-normal  focus:outline-none placeholder:text-gray-300"
        placeholder="Search for a country…"
      />
    </div>
  );
}

export default CountryFilter;
