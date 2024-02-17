import { useEffect, useState } from "react";
import { API } from "../../../axios/api";
import ListPlanets from "./ListPlanets";
import SearchPlanet from "./SearchPlanet";
import '../PagePlanets/PagePlanets.scss';

function PagePlanets() {
  const [capital, setCapital] = useState("Aterrizje");
  const [planets, setPlanets] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    try {
      API.get(`http://localhost:5000/planets`)
        .then(
          (resp) => {
            setPlanets(resp.data);
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
  const filterPlanets = () => {
    const newArray = planets.filter((eachPlanet) =>
      eachPlanet.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredArray(newArray);
  };

  return (
    <>
    <div className="container-planets">
      <h2 className="container-planets-title">Paises Honorverso</h2>
      {/* <SelectSerie changeSerie={changeSerie} serie={serie} /> */}
      <SearchPlanet
        changeSearch={changeSearch}
        search={search}
        filterPlanets={filterPlanets}
      />
      <h2 className="container-planets-card-listTitle">Listado de planetas</h2>
      <div className="container-planets-card">
        <ListPlanets filteredArray={filteredArray} />
      </div>
    </div>
    </>
  );
}
export default PagePlanets;