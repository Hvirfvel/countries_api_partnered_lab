
const Country = ({country, onCountryClick}) => {

    const handleClick = () =>{
        onCountryClick(country);
    }

    return (
        <li onClick={handleClick}>{country}</li>
    )
}
export default Country;