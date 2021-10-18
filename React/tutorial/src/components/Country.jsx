const Country = ({country}) => {

    return (
        <>

            <p>{country.name.common}</p>
            <img src={country.flags.png} alt= "" style={{ width: '150px' }} />

        </>
    );
}

export default Country;