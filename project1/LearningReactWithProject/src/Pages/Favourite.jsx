import React from "react";
import MovieCard from "../Components/MovieCard";

const Favourite = () => {
  const movies = [
    { id: 1, title: "Jhon Wick", release_date: "12/3/2025" },
    { id: 2, title: "Terminator", release_date: "19/5/2025" },
    { id: 3, title: "Money Heist", release_date: "11/8/2022" },
    { id: 4, title: "Peaky Blinders", release_date: "03/3/2023" },
  ];
  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Favourite;
