const CountryDetail = ({selectedCountry}) => {
    return (
        <>
        <h3>Your Country</h3>
        <p>{selectedCountry.name} </p>
        <p> {selectedCountry.capital} </p>
        <p> {selectedCountry.region}</p>

        </>
    )
}
export default CountryDetail;