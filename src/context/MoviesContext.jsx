import { createContext, useContext, useEffect, useState } from "react";
import {
  fetchGenres,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from "../services/api";

const MoviesContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error("useMovies must be used within a MoviesProvider");
  }
  return context;
};

export const MoviesProvider = ({ children }) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setLoading(true);
        setError(null);
        const [trending, upcoming, popular, topRated, genreList] =
          await Promise.all([
            fetchTrendingMovies(),
            fetchUpcomingMovies(),
            fetchPopularMovies(),
            fetchTopRatedMovies(),
            fetchGenres(),
          ]);

        setTrendingMovies(trending);
        setUpcomingMovies(upcoming);
        setPopularMovies(popular);
        setTopRatedMovies(topRated);
        setGenres(genreList);
      } catch (err) {
        console.error("Error fetching movie data: ", err);
        setError(
          err.message || "Failed to fetch movie data. Please try again later.",
        );
      } finally {
        setLoading(false);
      }
    };
    fetchMovieData();

    return () => {
      document.body.style.overflow = ""; // Reset overflow when the component unmounts while a movie detail is open
    };
  }, []);

  const openMoviesDetails = (moviesId) => {
    setSelectedMovieId(moviesId);
    document.body.style.overflow = "hidden";
  };

  const closeMoviesDetails = () => {
    setSelectedMovieId(null);
    document.body.style.overflow = "";
  };

  return (
    <MoviesContext.Provider
      value={{
        trendingMovies,
        upcomingMovies,
        popularMovies,
        topRatedMovies,
        genres,
        loading,
        error,
        selectedMovieId,
        openMoviesDetails,
        closeMoviesDetails,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
