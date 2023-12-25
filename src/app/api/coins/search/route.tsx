import { NextResponse } from "next/server";

async function fetchCoins() {
  const response = await fetch(
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json",
    {
      method: "GET",
    }
  );

  const coins = await response.json();
  return coins;
}

export async function GET(request) {
  const coins = await fetchCoins();
  console.log(coins);
  const { searchParams } = new URL(request.url);
  console.log(searchParams.get("query"));
  const query = searchParams.get("query");

  const filteredCoins = coins.data.coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(query.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(query.toLowerCase())
    );
  });

  return NextResponse.json(filteredCoins);
}
