function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function Coins({ cities }: { cities: object[] }) {
  if (cities.length == 0) {
    return <h1>There is no result...</h1>;
  }
  return (
    <>
      <ul className="grid grid-cols-4 mx-auto max-w-[1260px] gap-10">
        {cities.map((city) => (
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
