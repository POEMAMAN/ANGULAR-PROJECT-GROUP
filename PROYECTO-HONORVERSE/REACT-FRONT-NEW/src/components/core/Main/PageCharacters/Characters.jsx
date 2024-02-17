// import PropTypes  from "prop-types";

function Characters({character}) {
  return (
    <>
      <article className="container-characters-card-container">
        <h2 className="container-characters-card-container-title">Descripcion: {character.name}</h2>
        <p className="container-characters-card-container-p">Profesion: {character.profession}</p>
        <p className="container-characters-card-container-p">Rango: {character.rank}</p>
        <p className="container-characters-card-container-p">Cumpleaños: {character.birthday}</p>
        <p className="container-characters-card-container-p">Planeta: {character.planet}</p>
        <p className="container-characters-card-container-p">Pais: {character.country}</p>
        <img className="container-characters-card-container-image" src={character.picture} alt={`Imagen de ${character.name}`} />
      </article>
    </>
  );
}

export default Characters;




