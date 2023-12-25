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
      <ul className="mx-auto max-w-[1260px] grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {renderCities.map((city) => (
          <li key={city.latitude} className="bg-white rounded-lg shadow-md p-6">
            <span className="block text-xl font-bold mb-2">
              {city.city}, {city.state}
            </span>
            <span className="text-gray-600">
              Population: {numberWithCommas(city.population)}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}
