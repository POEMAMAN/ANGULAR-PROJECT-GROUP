import { useEffect, useState } from "react";
import { API } from "../../../axios/api";
import ListBooks from "./ListBooks";
import SearchBook from "./SearchBook";

function MenuBooks() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredArray, setFilteredArray] = useState([]);

  useEffect(() => {
    try {
      API.get(`http://localhost:5000/books`)
        .then(
          (resp) => {
            setBooks(resp.data);
            setFilteredArray(resp.data);
          },
          (error) => {
            console.log(error);
          }
        );
    } catch (error) {
      console.log(error);
    }
  }, []);


  const changeSearch = (value) => {
    setSearch(value);
  };
  const filterBooks = () => {
    const newArray = books.filter((eachBook) =>
      eachBook.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredArray(newArray);
  };

  return (
    <>
    <div className="container-Books">
      <h2 className="container-Books-title"></h2>
      <SearchBook
        changeSearch={changeSearch}
        search={search}
        filterBooks={filterBooks}
      />
      <ListBooks filteredArray={filteredArray} />
      </div>
    </>
  );
}
export default MenuBooks;