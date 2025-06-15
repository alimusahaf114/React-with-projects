import MovieCard from "../Components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../Services/api";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to Load movies....");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (error) {
      console.log(error);

      setError("Failed to search movies.....");
    } finally {
      setLoading(false);
    }
  };
  console.log(movies);
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
      {error && <div className="errorMsg">{error}</div>}
      {loading ? (
        <div className="loadingState">Loading....</div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id} />
              )
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
