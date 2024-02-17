function SearchCountry({ changeSearch, search, filterCountries }) {
  const handleInput = (event) => {
    changeSearch(event.target.value);
  };
  const handleCancel = (event) => {
    event.preventDefault();
    changeSearch("");
  };
  const handleSearch = (event) => {
    event.preventDefault();
    filterCountries();
  };
  return (
    <form className="container-countries-search">
      <label className="container-countries-search-label" htmlFor="">Indica el pais</label>
      <input className="container-countries-search-search" type="text" name="" id="" onChange={handleInput} value={search} />
      {console.log(search)}
      <input className="container-countries-search-input" type="submit" value="Buscar" onClick={handleSearch} />
      <input className="container-countries-search-input" type="submit" value="Cancelar" onClick={handleCancel} />
    </form>
  );
}

export default SearchCountry;
