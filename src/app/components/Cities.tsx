"use client";
import { useEffect, useState } from "react";
import numberWithCommas from "../utils/numberWithCommas";
import NumberBtn from "./NumberBtn";
export default function Coins({
  cities,
  currentPage,
  setCurrentPage,
}: {
  cities: City[];
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
}) {
  const [renderCities, setRenderCities] = useState<City[]>([]);
  const renderCitiesNumber = 20;
  useEffect(() => {
    const skip = (currentPage - 1) * renderCitiesNumber;
    const state = cities.slice(skip, skip + renderCitiesNumber);
    setRenderCities(state);
  }, [cities, currentPage]);

  const numOfPages: number = Math.ceil(cities.length / renderCitiesNumber);
  if (cities.length == 0) {
    return <h1>There is no result...</h1>;
  }
  return (
    <>
      <div className="text-left mt-3 ml-3">
        共<b>{cities.length}</b>筆搜尋資料{" "}
      </div>
      <ul className="mx-auto max-w-[1260px] grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {renderCities.map((city: City) => (
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

      <NumberBtn
        numOfPages={numOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
