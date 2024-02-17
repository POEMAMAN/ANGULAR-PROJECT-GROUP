import { useEffect, useState } from "react";
import { API } from "../../../axios/api";
import ListCountries from "./ListCountries";
import SearchCountry from "./SearchCountry";
import '../PageCountries/PageCountries.scss';

function PageCountries() {
  const [capital, setCapital] = useState("Aterrizje");
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    try {
      API.get(`http://localhost:5000/countries`)
        .then(
          (resp) => {
            setCountries(resp.data);
            setFilteredArray(resp.data);
          },
          (error) => {
            console.log(error);
          }
        );
    } catch (error) {
      console.log(error);
    }
  },[]);


  const changeSearch = (value) => {
    setSearch(value);
  };
  const filterCountries = () => {
    const newArray = countries.filter((eachCountry) =>
      eachCountry.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredArray(newArray);
  };

  return (
    <>
    <div className="container-countries">
      <h2 className="container-countries-title">Paises Honorverso</h2>
      {/* <SelectSerie changeSerie={changeSerie} serie={serie} /> */}
      <SearchCountry
        changeSearch={changeSearch}
        search={search}
        filterCountries={filterCountries}
      />
      <h2 className="container-countries-card-listTitle">Listado de paises</h2>
      <div className="container-countries-card">
        <ListCountries filteredArray={filteredArray} />
      </div>
    </div>
    </>
  );
}
export default PageCountries;