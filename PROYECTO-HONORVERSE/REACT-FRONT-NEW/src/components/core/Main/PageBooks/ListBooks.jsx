import Books from "./Books";


function ListBooks({ filteredArray }) {
  return (
<>
    <div className="container-books-list">
      {filteredArray.map((book) => (
        <Books book={book} key={book._id} />
      ))}
    </div>
    </>
  );
}
export default ListBooks;
