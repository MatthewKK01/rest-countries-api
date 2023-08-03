import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between items-center bg-white py-8 px-4 shadow-alabama">
      <Link href={"/"}>
        <h2>Where in the world?</h2>
      </Link>{" "}
      <div className="flex justify-between items-center gap-2">
        <Image
          src={"/moon.svg"}
          alt="moon"
          width={20}
          height={20}
          className="cursor-pointer"
        />
        <h1>Dark Mode</h1>
      </div>
    </header>
  );
}

export default Header;
