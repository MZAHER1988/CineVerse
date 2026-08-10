import HeroSection from "./HeroSection";
import MovieSlider from "./MovieSlider";
import GenreSection from "./GenreSection";
import MoviesDetails from "./MoviesDetails";
import { useMovies } from "../context/MoviesContext";

function MovieContent() {
  const {
    trendingMovies,
    upcomingMovies,
    popularMovies,
    topRatedMovies,
    selectedMovieId,
    closeMoviesDetails,
    error,
  } = useMovies();

  if (error) {
    return (
      <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 max-w-md w-full shadow-2xl space-y-4">
          {/* Icon */}
          <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 
                0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          {/* Rubrik & Felmeddelande */}
          <h2 className="text-2xl font-bold text-white">
            Error Loading Movies
          </h2>
          <p className="mt-2 text-neutral-400 text-sm">{error}</p>

          {/* Knappar */}
          <div className="pt-2">
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 px-4 rounded-lg 
              transition-all text-sm mt-6"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <HeroSection />
      <div className="bg-gradient-to-b from-neutral-900 to-neutral-950">
        <MovieSlider
          title="Trending This Week"
          subtitle="Stay update with what everyone's watching"
          movies={trendingMovies}
          id="trending"
        />
        <MovieSlider
          title="Upcoming Movies"
          subtitle="Get ready for the most anticipated releases"
          movies={upcomingMovies}
          id="upcoming"
        />
        <MovieSlider
          title="Popular Movies"
          subtitle="Most watched movies right now"
          movies={popularMovies}
          id="popular"
        />
        <GenreSection />
        <MovieSlider
          title="Top Rated Movies"
          subtitle="Highest rated movies"
          movies={topRatedMovies}
          id="top-rated"
        />
      </div>

      {/** Movie Details Section */}
      {/** <MoviesDetails />*/}
      {selectedMovieId && (
        <MoviesDetails movieId={selectedMovieId} onClose={closeMoviesDetails} />
      )}
    </>
  );
}

export default MovieContent;
