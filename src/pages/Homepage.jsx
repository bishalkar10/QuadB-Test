import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";

export default function Homepage() {
  const [showsArray, setShowsArray] = useState([]); // [
  function getYear(date) {
    const year = new Date(date).getFullYear();
    return year;
  }
  // make api call inside useEffect
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await response.json();
      setShowsArray(data);
      console.log("api call");
    }
    fetchData();
  }, []);

  const listOfShows = showsArray.map((item) => {
    const show = item.show; // Access the "show" object
    // console.log(show); // Log the 'show' object

    return (
      <MovieCard
        key={show.id}
        name={show.name}
        year={getYear(show.premiered)}
        genres={show.genres.join(", ")}
        imageURL={show.image.medium}
        runtime={show.runtime}
        summary={show.summary} // summary looks like this "<p><b>summary</b></p>".. when extracting summary extract as javascript not as string
      />
    );
  });

  return <div className="p-2">{listOfShows}</div>;
}
