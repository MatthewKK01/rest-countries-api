import { Country, CountryProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const getData = async (country_id: string | number) => {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha/${country_id}`
  );
  return response.json();
};

async function CountryId({
  params,
}: {
  params: {
    ccn3: string | number;
  };
}) {
  const data: Country[] = await getData(params.ccn3);

  return (
    <div className="mt-10 px-7">
      <Link href={"/"}>
        <button className="bg-white h-8 flex justify-between items-center py-[6px] px-6 gap-2 shadow-backButton mb-16">
          <Image
            src={"/call-made.svg"}
            alt="backArrow"
            width={18}
            height={18}
          />
          <span>Back</span>
        </button>
      </Link>
      {data.map((item) => {
        const firstArr = Object.keys(item.name.nativeName)[0];
        const nativeName = item.name.nativeName[firstArr];

        const currecie = Object.keys(item.currencies)[0];
        const currecieName = item.currencies[currecie];

        const language = Object.keys(item.languages)[0];
        const languageName = item.languages[language];

        return (
          <>
            <div className="w-[320px] h-[229px] relative">
              {" "}
              <Image alt="sad" fill src={item.flags.svg} />
            </div>
            <h2 className="text-[22px] font-extrabold mt-11 mb-4">
              {item.name.common}
            </h2>
            <ul className="flex flex-col gap-y-2 mb-8">
              <li className="text-sm font-normal">
                <span className="text-sm font-semibold mr-1 text-black">
                  Native Name:
                </span>
                {nativeName.official}
              </li>
              <li className="text-sm font-normal">
                <span className="text-sm font-semibold mr-1 text-black">
                  Population:
                </span>
                {item.population}
              </li>
              <li className="text-sm font-normal">
                <span className="text-sm font-semibold mr-1 text-black">
                  Region:
                </span>
                {item.region}
              </li>
              <li className="text-sm font-normal">
                <span className="text-sm font-semibold mr-1 text-black">
                  Sub Region:
                </span>
                {item.subregion}
              </li>
              <li className="text-sm font-normal">
                <span className="text-sm font-semibold mr-1 text-black">
                  Capital:
                </span>
                {item.capital}
              </li>
            </ul>
            <ul className="flex flex-col gap-y-2">
              <li className="text-sm font-normal">
                <span className="text-sm font-semibold mr-1 text-black">
                  Top level Domain:
                </span>
                {item.tld}
              </li>
              <li className="text-sm font-normal">
                <span className="text-sm font-semibold mr-1 text-black">
                  Currecies:
                </span>
                {currecieName.name}
              </li>
              <li className="text-sm font-normal">
                <span className="text-sm font-semibold mr-1 text-black">
                  Languages:
                </span>
                {languageName}
              </li>
            </ul>
          </>
        );
      })}
    </div>
  );
}

export default CountryId;
