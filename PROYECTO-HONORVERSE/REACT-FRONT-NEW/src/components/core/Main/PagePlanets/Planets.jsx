// import PropTypes  from "prop-types";

function Planets({planet}) {
  return (
    <>
      <article className="container-planets-card-container">
        <h2 className="container-planets-card-container-title">Descripcion: {planet.name}</h2>
        <p className="container-planets-card-container-p">Colonizado: {planet.settled}</p>
        <p className="container-planets-card-container-p">Población: {planet.population}</p>
        <p className="container-planets-card-container-p">Capital: {planet.capital}</p>
        <p className="container-planets-card-container-p">Ubicacion: {planet.location}</p>
        <p className="container-planets-card-container-p">Gravedad: {planet.gravity}</p>
        <p className="container-planets-card-container-p">Lunas: {planet.moons}</p>
        <img className="container-planets-card-container-image" src={planet.picture} alt={`Imagen de ${planet.name}`} />
      </article>
    </>
  );
}

export default Planets;




