import { useEffect, useState } from "react";
import { API } from "../../../axios/api";
import ListCharacters from "./ListCharacters";
import SearchCharacter from "./SearchCharacter";
import '../PageCharacters/PageCharacters.scss';

function PageCharacters() {
  const [capital, setCapital] = useState("Aterrizje");
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    try {
      API.get(`http://localhost:5000/characters`)
        .then(
          (resp) => {
            setCharacters(resp.data);
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
  const filterCharacters = () => {
    const newArray = characters.filter((eachCharacter) =>
      eachCharacter.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredArray(newArray);
  };

  return (
    <>
    <div className="container-characters">
      <h2 className="container-characters-title">Personajes Honorverso</h2>
      {/* <SelectSerie changeSerie={changeSerie} serie={serie} /> */}
      <SearchCharacter
        changeSearch={changeSearch}
        search={search}
        filterCharacters={filterCharacters}
      />
      <h2 className="container-characters-card-listTitle">Listado de personajes</h2>
      <div className="container-characters-card">
        <ListCharacters filteredArray={filteredArray} />
      </div>
    </div>
    </>
  );
}
export default PageCharacters;