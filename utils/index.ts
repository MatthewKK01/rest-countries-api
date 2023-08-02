import { FilterProps } from "@/types";

export const getData = async (filters: FilterProps) => {
    const { country } = filters
    console.log(country);
    const url = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    return url.json()
};

// export const fetchAllData = async () => {
//     const url = await fetch("https://restcountries.com/v3.1/all")
//     return url.json();
// }