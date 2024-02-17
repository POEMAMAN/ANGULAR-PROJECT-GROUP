import Planets from "./Planets";

function listPlanets({ filteredArray }) {
  return (
    <>
    <div className="container-planets-list">
      {filteredArray.map((planet) => (
        <Planets planet={planet} key={planet._id} />
      ))}
    </div>
    </>
  );
}
export default listPlanets;
