import "../css/MovieCard.css";
import { useMovieContext } from "../Context/MovieContext";

const MovieCard = ({ movie }) => {
  const { addToFavourites, removeFromFavourites, isFavourite } = useMovieContext();
  const favourite = isFavourite(movie.id);

  const onFavoriteClick = (e) => {
    e.preventDefault();
    if (favourite) removeFromFavourites(movie.id);
    else addToFavourites(movie);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={movie.title || "Movie Poster"}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favourite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            🤍
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default MovieCard;
