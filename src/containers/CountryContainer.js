import {useState, useEffect} from 'react';
import CountryList from '../components/CountryList';
import CountryDetail from '../components/CountryDetail';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        getCountries();
    } ,[])

    const getCountries = () => {
        fetch("https://restcountries.com/v2/all")
        .then(response => response.json())
        .then(countries => setCountries(countries))
    }

    const onCountryClick = (country) => {
        setSelectedCountry(country)
    }

    const totalPopulation = countries.reduce( (previousvalue, country) => previousvalue + country.population, 0);

    return (
        <>
        Total Population: {totalPopulation}
        <h1>CountryContainer</h1>
        <CountryList countries={countries} onCountryClick={onCountryClick}/>
        <CountryDetail selectedCountry={selectedCountry}/>
        
        </>
    );
}

export default CountryContainer;