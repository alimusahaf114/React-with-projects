import { createContext, useState, useEffect, useContext } from "react";

const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [Favourite, setFavourite] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("Favourites");
    if (storedFavs) setFavourite(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("Favourites", JSON.stringify(Favourite));
  }, [Favourite]);

  const addToFavourites = (movie) => {
    setFavourite((prev) => [...prev, movie]);
  };

  const removeFromFavourites = (movieId) => {
    setFavourite((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavourite = (movieId) => {
    return Favourite.some((movie) => movie.id === movieId);
  };

  const value = {
    Favourite,
    addToFavourites,
    removeFromFavourites,
    isFavourite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
