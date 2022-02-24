
const Country = ({country, onCountryClick}) => {

    const handleClick = () =>{
        onCountryClick(country);
    }

    return (
        <li onClick={handleClick}>
            <h2> {country.name} </h2> 
            <img src={country.flags.svg} width="100px" height="auto" />
        </li>
    )
}
export default Country;