import { createContext, useContext, useEffect, useState } from "react";
import {
  fetchGenres,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from "../services/api";

const MoviesContext = createContext();
export const useMovies = () => useContext(MoviesContext);

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
        const [trending, upcoming, popular, topRated, genreList] = await Promise.all([
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
        console.log("Error fetching movie data: ", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieData();
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
    <MoviesContext
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
    </MoviesContext>
  );
};
