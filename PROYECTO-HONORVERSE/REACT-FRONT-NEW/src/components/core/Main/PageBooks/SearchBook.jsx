function SearchBook({ changeSearch, search, filterBooks }) {
  const handleInput = (event) => {
    changeSearch(event.target.value);
  };
  const handleCancel = (event) => {
    event.preventDefault();
    changeSearch("");
  };
  const handleSearch = (event) => {
    event.preventDefault();
    filterBooks();
  };
  return (
    <form className="container-books-search">
      <label className="container-books-search-label" htmlFor="">Indica el libro</label>
      <input className="container-books-search-search" type="text" name="" id="" onChange={handleInput} value={search} />
      {console.log(search)}
      <input className="container-books-search-input" type="submit" value="Buscar" onClick={handleSearch} />
      <input className="container-books-search-input" type="submit" value="Cancelar" onClick={handleCancel} />
    </form>
  );
}

export default SearchBook;
