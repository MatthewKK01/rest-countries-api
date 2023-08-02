import CountryFilter from "@/components/CountryFilter";
import CountryFlag from "@/components/CountryFlag";
import { getData } from "@/utils";

import { CountryProps, HomeProps } from "@/types";

export default async function Home({ searchParams }: HomeProps) {
  var countries: CountryProps[] = await getData({
    country: searchParams.country || "georgia",
  });

  console.log(searchParams);

  return (
    <main className=" min-h-screen">
      <section className="wrapper">
        <CountryFilter />
        {/* <ContinentFilter /> */}
        <div className="countries  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-10">
          {countries.map((country) => (
            <CountryFlag country={country} />
          ))}
        </div>
      </section>
    </main>
  );
}
