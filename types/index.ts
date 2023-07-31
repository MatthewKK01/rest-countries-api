export interface CountryProps {
    name: {
        common: string;
        official: string;
    },
    ccn3: string;
    population: number;
    region: string;
    capital: string;

    flags: {
        svg: string;
    }
}

export interface NativeName {
    official: string;
    common: string;
}

export interface Country {
    name: {
        common: string
        nativeName: {
            [key: string]: NativeName
        }
    },
    flags: {
        svg: string;
    }
    population: number,
    region: string,
    subregion: string,
    capital: string,
    tld: string
    currencies: {
        name: string;
    }
    languages: string[]
}[]
