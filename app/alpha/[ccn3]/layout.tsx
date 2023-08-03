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
    <main className="pt-10 px-7  dark:bg-[#202C36]  flex justify-center items-center">
      <section className="wrapper main lg:flex lg:justify-center   w-fit mx-auto">
        <Link href={"/"}>
          <button className="bg-white dark:bg-tuna-500 dark:text-white h-8 flex justify-between items-center py-[6px] px-6 gap-2 shadow-backButton mb-16">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="call-made">
                <path
                  id="Shape"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.81802 3.6967L6.87868 4.75736L3.3785 8.25754H16.7428L16.7428 9.74246H3.3785L6.87868 13.2426L5.81802 14.3033L0.514719 9L5.81802 3.6967Z"
                  fill="#111517"
                  className="dark:fill-white"
                />
              </g>
            </svg>

            <span className="text-sm font-light">Back</span>
          </button>
        </Link>
        <div className="flex flex-col gap-8  lg:justify-center lg:items-center lg:flex-row md:items-center xl:gap-[120px]">
          {data.map((item) => {
            const firstArr = Object.keys(item.name.nativeName)[0];
            const nativeName = item.name.nativeName[firstArr];

            const currecie = Object.keys(item.currencies)[0];
            const currecieName = item.currencies[currecie];

            const language = Object.keys(item.languages)[0];
            const languageName = item.languages[language];

            return (
              <>
                <div className="w-[320px] h-[229px] lg:w-[560px] lg:h-[401px] relative rounded-md overflow-hidden ">
                  {" "}
                  <Image
                    alt="sad"
                    className="object-cover"
                    fill
                    src={item.flags.svg}
                  />
                </div>

                <article className="flex flex-col max-md:items-start gap-8 md:flex-row items-center md:gap-[141px]">
                  <div className="respo-wrapper flex flex-col ">
                    <h2 className="text-[22px] font-extrabold mt-11 mb-4 dark:text-white ">
                      {item.name.common}
                    </h2>
                    <ul className="flex flex-col gap-y-2 mb-8">
                      <li className="text-sm  font-light dark:text-white  ">
                        <span className="text-sm font-semibold mr-1 text-black dark:text-white">
                          Native Name:
                        </span>
                        {nativeName.official}
                      </li>
                      <li className="text-sm font-light dark:text-white  ">
                        <span className="text-sm font-semibold mr-1 text-black dark:text-white ">
                          Population:
                        </span>
                        {item.population}
                      </li>
                      <li className="text-sm font-light dark:text-white  ">
                        <span className="text-sm font-semibold mr-1 text-black dark:text-white ">
                          Region:
                        </span>
                        {item.region}
                      </li>
                      <li className="text-sm font-light dark:text-white  ">
                        <span className="text-sm font-semibold mr-1 text-black dark:text-white ">
                          Sub Region:
                        </span>
                        {item.subregion}
                      </li>
                      <li className="text-sm font-light dark:text-white  ">
                        <span className="text-sm font-semibold mr-1 text-black dark:text-white ">
                          Capital:
                        </span>
                        {item.capital}
                      </li>
                    </ul>
                  </div>
                  <ul className="flex flex-col gap-y-2">
                    <li className="text-sm font-light dark:text-white  ">
                      <span className="text-sm font-semibold mr-1 text-black dark:text-white ">
                        Top level Domain:
                      </span>
                      {item.tld}
                    </li>
                    <li className="text-sm font-light dark:text-white  ">
                      <span className="text-sm font-semibold mr-1 text-black dark:text-white ">
                        Currecies:
                      </span>
                      {currecieName.name}
                    </li>
                    <li className="text-sm font-light dark:text-white  ">
                      <span className="text-sm font-semibold mr-1 text-black dark:text-white ">
                        Languages:
                      </span>
                      {languageName}
                    </li>
                  </ul>
                </article>
              </>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default CountryId;
