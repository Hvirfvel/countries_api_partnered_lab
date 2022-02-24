import Country from "./Country"

const CountryList = ({countries, onCountryClick}) => {
    const countryItems = countries.map((country, index) => {
        return <Country country={country.name} key={index} onCountryClick={onCountryClick}/>
    })
    return (
        <>
        {countryItems} 

        </>
    );
}

export default CountryList;