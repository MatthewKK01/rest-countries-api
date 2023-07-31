import React from "react";
import Image from "next/image";
import { CountryProps } from "@/types";
import Link from "next/link";

interface CountryFlagProps {
  country: CountryProps;
}

function CountryFlag({ country }: CountryFlagProps) {
  return (
    <div className="w-[264px] relative flex flex-col mx-auto shadow-md pb-12 bg-white rounded-md">
      <Link href={`/alpha/${country.ccn3}`}>
        <Image
          alt={country.name.official}
          width={267}
          height={160}
          src={country.flags.svg}
        />
      </Link>
      <div className="ml-6">
        <h2 className="text-lg font-extrabold mt-6 mb-4">
          {country.name.common}
        </h2>
        <div className="flex flex-col gap-x-2">
          <p className="text-sm font-light">
            <span className="font-semibold text-black text-base capitalize mr-1">
              population:
            </span>
            {country.population.toLocaleString()}
          </p>
          <p className="text-sm font-light">
            <span className="font-semibold text-black text-base capitalize mr-1">
              region:
            </span>
            {country.region}
          </p>
          <p className="text-sm font-light">
            <span className="font-semibold text-black text-base capitalize mr-1">
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
