import Countries from './Countries';


function listCountries({ filteredArray }) {
  return (
    <>
    <div className="container-countries-list">
      {filteredArray.map((country) => (
        <Countries country={country} key={country._id} />
      ))}
    </div>
    </>
  );
}
export default listCountries;
