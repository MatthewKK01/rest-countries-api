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
    <div className="mt-10">
      <Link href={"/"}>
        <button className="bg-white h-8 flex justify-between items-center py-[6px] px-6 gap-2 shadow-backButton">
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
        const asda = Object.keys(item.name.nativeName)[0];
        const nativeName = item.name.nativeName[asda];
        return (
          <>
            <Image alt="sad" width={320} height={229} src={item.flags.svg} />
            <h2 className="text-[22px] font-extrabold">{item.name.common}</h2>
            <ul className="flex flex-col gap-y-1">
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
          </>
        );
      })}
    </div>
  );
}

export default CountryId;
