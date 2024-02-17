function SearchCharacter({ changeSearch, search, filterCharacters }) {
  const handleInput = (event) => {
    changeSearch(event.target.value);
  };
  const handleCancel = (event) => {
    event.preventDefault();
    changeSearch("");
  };
  const handleSearch = (event) => {
    event.preventDefault();
    filterCharacters();
  };
  return (
    <form className="container-characters-search">
      <label className="container-characters-search-label" htmlFor="">Indica el Personaje</label>
      <input className="container-characters-search-search" type="text" name="" id="" onChange={handleInput} value={search} />
      {console.log(search)}
      <input className="container-characters-search-input" type="submit" value="Buscar" onClick={handleSearch} />
      <input className="container-characters-search-input" type="submit" value="Cancelar" onClick={handleCancel} />
    </form>
  );
}

export default SearchCharacter;
