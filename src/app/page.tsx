"use client";
import { useState, useEffect } from "react";
import Cities from "./components/Cities";
import SearchCoins from "./components/SearchCoins";
export default function Home() {
  const [cities, setCities] = useState([]);
  const [showCities, setShowCities] = useState([]);
  const textBoxHandler = (word: string) => {
    const result = findMatches(word, cities);
    setShowCities(result);
  };
  const findMatches = (wordToMatch: string, data: object[]) => {
    return data.filter((place) => {
      const regex = new RegExp(wordToMatch, "gi");
      return place.city.match(regex) || place.state.match(regex);
    });
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

  return (
    <div className="text-center">
      <h1 className="font-bold text-6xl mt-14">Type Something For Searching</h1>
      <SearchCoins getSearchResults={(results) => textBoxHandler(results)} />
      <Cities cities={showCities} />
    </div>
  );
}
