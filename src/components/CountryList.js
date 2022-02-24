const CountryList = ({countries}) => {
    const countryItems = countries.map((country, index) => {
        return <Country country={country} key={index}/>
    })
    return (
        {countryItems}
    );
}

export default CountryList;