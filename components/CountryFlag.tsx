import React from "react";
import Image from "next/image";
import { CountryProps } from "@/types";
import Link from "next/link";

interface CountryFlagProps {
  country: CountryProps;
}

function CountryFlag({ country }: CountryFlagProps) {
  return (
    <div className="w-[264px] relative flex flex-col mx-auto shadow-md pb-12 bg-white dark:bg-tuna-500 overflow-hidden rounded-md">
      <div className="w-[264px] h-[160px] relative  ">
        <Link href={`/alpha/${country.ccn3}`}>
          <Image
            alt={country.name.official}
            className="object-cover"
            fill
            src={country.flags.svg}
          />
        </Link>
      </div>
      <div className="pl-6 dark:bg-tuna-500">
        <h2 className="text-lg dark:text-white font-extrabold mt-6 mb-4">
          {country.name.common}
        </h2>
        <div className="flex flex-col gap-x-2 dark:text-white">
          <p className="text-sm font-light ">
            <span className="font-semibold dark:text-white text-black text-base capitalize mr-1">
              population:
            </span>
            {country.population.toLocaleString()}
          </p>
          <p className="text-sm font-light">
            <span className="font-semibold dark:text-white text-black text-base capitalize mr-1">
              region:
            </span>
            {country.region}
          </p>
          <p className="text-sm font-light">
            <span className="font-semibold dark:text-white text-black text-base capitalize mr-1">
              capital:
            </span>
            {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CountryFlag;
