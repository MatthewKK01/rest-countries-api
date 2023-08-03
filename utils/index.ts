import { FilterProps } from "@/types";

export const getData = async (filters: FilterProps) => {
    const { country } = filters
    const url = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    return url.json()
};
export const getAllData = async () => {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    return res.json()

}