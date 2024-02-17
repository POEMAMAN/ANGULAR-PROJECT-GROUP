// import PropTypes  from "prop-types";

function Countries({country}) {
  return (
    <>
      <article className="container-countries-card-container">
        <h2 className="container-countries-card-container-title">Descripcion: {country.name}</h2>
        <p className="container-countries-card-container-p">Capital: {country.capital}</p>
        <p className="container-countries-card-container-p">Fecha de fundacion: {country.foundation_date}</p>
        <img className="container-countries-card-container-image" src={country.picture} alt={`Imagen de ${country.name}`} />
      </article>
    </>
  );
}

export default Countries;



