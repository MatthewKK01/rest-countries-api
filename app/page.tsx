import CountryFilter from "@/components/CountryFilter";
import CountryFlag from "@/components/CountryFlag";
import { getAllData, getData } from "@/utils";

import { CountryProps, HomeProps } from "@/types";

export default async function Home({ searchParams }: HomeProps) {
  const countries: CountryProps[] = await getData({
    country: searchParams.country,
  });

  const allCountry: CountryProps[] = await getAllData();

  console.log(searchParams);

  return (
    <main className=" min-h-screen bg-alabaster-500 pt-6 dark:bg-[#202C36]">
      <section className="wrapper">
        <CountryFilter />
        {/* <ContinentFilter /> */}
        <div className="countries  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-10">
          {!searchParams.country
            ? allCountry.map((item) => <CountryFlag country={item} />)
            : countries.map((country) => <CountryFlag country={country} />)}
        </div>
      </section>
    </main>
  );
}
