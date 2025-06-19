import React, { useContext } from "react";
import "../css/Favorites.css";
import { useMovieContext } from "../Context/MovieContext";

const Favourite = () => {
  const { Favourite } = useMovieContext();
  if (Favourite) {
    <div className="movies-grid">
      {Favourite.map(
        (movie) =>
          movie.title.toLowerCase().startsWith(searchQuery) && (
            <MovieCard movie={movie} key={movie.id} />
          )
      )}
    </div>;
  }
  return (
    <div className="Favorite-movie">
      <h1>No Favorite Movie Yet</h1>
    </div>
  );
};

export default Favourite;
