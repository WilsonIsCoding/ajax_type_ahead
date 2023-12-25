export default function findMatches(wordToMatch: string, data: City[]) {
  return data.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}
