export default function Coins({ cities }: { cities: City[] }) {
  function numberWithCommas(x: string) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  if (cities.length == 0) {
    return <h1>There is no result...</h1>;
  }
  const renderCities = cities.slice(0, 20);
  return (
    <>
      <ul className="grid grid-cols-4 mx-auto max-w-[1260px] gap-10">
        {renderCities.map((city) => (
          <li key={city.latitude}>
            <span className="name">
              ${city.city}, ${city.state}
            </span>
            <span className="population">
              ${numberWithCommas(city.population)}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
