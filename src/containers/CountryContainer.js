import {useState, useEffect} from 'react';
import CountryList from '../components/CountryList';
import CountryDetail from '../components/CountryDetail';
import FavouriteCountriesList from '../components/FavouriteCountriesList';

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
        <FavouriteCountriesList />
        {selectedCountry ? <CountryDetail selectedCountry={selectedCountry}/> : null}
        Total Population: {totalPopulation}
        <h1>CountryContainer</h1>
        <CountryList countries={countries} onCountryClick={onCountryClick}/>
        
        </>
    );
}

export default CountryContainer;