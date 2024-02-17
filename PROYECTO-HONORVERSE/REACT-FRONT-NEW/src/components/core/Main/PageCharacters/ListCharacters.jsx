import Characters from "./Characters";

function listCharacters({ filteredArray }) {
  return (
    <>
    <div className="container-characters-list">
      {filteredArray.map((character) => (
        <Characters character={character} key={character._id} />
      ))}
    </div>
    </>
  );
}
export default listCharacters;
