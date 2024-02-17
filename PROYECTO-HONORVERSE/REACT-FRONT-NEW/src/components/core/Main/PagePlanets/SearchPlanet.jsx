function SearchPlanet({ changeSearch, search, filterPlanets }) {
  const handleInput = (event) => {
    changeSearch(event.target.value);
  };
  const handleCancel = (event) => {
    event.preventDefault();
    changeSearch("");
  };
  const handleSearch = (event) => {
    event.preventDefault();
    filterPlanets();
  };
  return (
    <form className="container-planets-search">
      <label className="container-planets-search-label" htmlFor="">Indica el planeta</label>
      <input className="container-planets-search-search" type="text" name="" id="" onChange={handleInput} value={search} />
      {console.log(search)}
      <input className="container-planets-search-input" type="submit" value="Buscar" onClick={handleSearch} />
      <input className="container-planets-search-input" type="submit" value="Cancelar" onClick={handleCancel} />
    </form>
  );
}

export default SearchPlanet;
