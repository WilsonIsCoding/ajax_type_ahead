"use client";
import { useState, useEffect } from "react";
import Cities from "./components/Cities";
import SearchCities from "./components/SearchCities";
import findMatches from "../../utils/findMatches";
export default function Home() {
  const [cities, setCities] = useState([]);
  const [showCities, setShowCities] = useState([]);
  const [query, setQuery] = useState("");
  const textBoxHandler = (word: string) => {
    const debounce = setTimeout(() => {
      clearTimeout(debounce);
      setQuery(word);
      const result: any = findMatches(word, cities);
      setShowCities(result);
    }, 400);
  };
  useEffect(() => {
    const getCities = async () => {
      const response = await fetch(
        "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
      );
      const cities = await response.json();
      setCities(cities);
    };
    getCities();
  }, []);
  if (cities) {
    return (
      <div className="text-center">
        <h1 className="font-bold text-6xl mt-14">
          {query.length == 0
            ? "Type Something For Searching"
            : `Searching result:${query}`}
        </h1>
        <SearchCities
          getSearchResults={(results: string) => textBoxHandler(results)}
        />

        <Cities cities={showCities} />
      </div>
    );
  } else {
    <h1>Data downLoading...</h1>;
  }
}
