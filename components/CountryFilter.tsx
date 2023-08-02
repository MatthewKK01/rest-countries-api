"use client";

import React, { useState } from "react";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function CountryFilter() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const [country, setCountry] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (country == "") {
      alert("Fill in");
    }
    updateSearchParams(country.toLowerCase());
  };

  const updateSearchParams = (country: string) => {
    const searchParams = new URLSearchParams(document.location.search);
    if (country) {
      searchParams.set("name", country);
    } else {
      searchParams.delete("name");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form
      onSubmit={handleSearch}
      onClick={handleDivClick}
      className="search bg-white shadow-alabama w-[343px] pl-8 mx-auto flex items-center justify-between h-12 my-20"
    >
      <Image
        src={"/search.svg"}
        width={16}
        height={16}
        className="absolute "
        alt="search"
      />

      <input
        ref={inputRef}
        name="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        type="text"
        className="pl-[26px] text-xs font-normal  focus:outline-none placeholder:text-gray-300"
        placeholder="Search for a country…"
      />
    </form>
  );
}

export default CountryFilter;
