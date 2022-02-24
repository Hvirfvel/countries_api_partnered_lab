import {useState, useEffect} from 'react';
import CountryList from '../components/CountryList';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        getCountries();
    } ,[])

    const getCountries = () => {
        fetch("https://restcountries.com/v2/all")
        .then(response => response.json())
        .then(countries => setCountries(countries))
    }

    return (
        <h1>CountryContainer</h1>
    );
}

export default CountryContainer;