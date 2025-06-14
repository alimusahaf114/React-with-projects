import MovieCard from "../Components/MovieCard";
import { useState } from "react";
import "../css/Home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "Jhon Wick", release_date: "12/3/2025" },
    { id: 2, title: "Terminator", release_date: "19/5/2025" },
    { id: 3, title: "Money Heist", release_date: "11/8/2022" },
    { id: 4, title: "Peaky Blinders", release_date: "03/3/2023" },
  ];
  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("Hello Musahaf");
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies....."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          {" "}
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
};

export default Home;
