import ContinentFilter from "@/components/ContinentFilter";
import CountryFilter from "@/components/CountryFilter";
import CountryFlag from "@/components/CountryFlag";
import { CountryProps } from "@/types";
import Image from "next/image";
import { useRef } from "react";

const getData = async () => {
  const url = await fetch("https://restcountries.com/v3.1/all");
  return url.json();
};

export default async function Home() {
  const countries: CountryProps[] = await getData();

  return (
    <main className=" min-h-screen">
      <section className="wrapper">
        <CountryFilter />
        <ContinentFilter />
        <div className="countries  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-10">
          {countries.map((country) => (
            <CountryFlag country={country} />
          ))}
        </div>
      </section>
    </main>
  );
}
