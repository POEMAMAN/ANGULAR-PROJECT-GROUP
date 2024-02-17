// import PropTypes  from "prop-types";

function Books({book}) {
  return (
    <>
      <article className="container-books-card-container">
        <h2 className="container-books-card-container-title">Titulo: {book.title}</h2>
        <p className="container-books-card-container-p">Serie: {book.serie}</p>
        <p className="container-books-card-container-p">Fecha de publicación: {book.publication_date}</p>
        <p className="container-books-card-container-p">Páginas: {book.pages}</p>
        <p className="container-books-card-container-p">Periodo de tiempo: {book.timeframe}</p>
        <img className="container-books-card-container-image" src={book.picture} alt={`Imagen de ${book.title}`} />
      </article>
    </>
  );
}

export default Books;


