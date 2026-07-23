import React, { useState } from "react";
import { useMovies } from "../context/MoviesContext";

function HeroSection() {

  const {trndingMovies, loading} = useMovies();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

   
  return (
    <div className=" relative w-full h-screen">
      {/** Movie background */}
      <div className="absolute inset-0 bg-cover bg-center bg-neutral-900 transition-all duration-700">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/70 to-neutral-900/20">
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/70 to-transparent" />
        </div>
        {/** Movie content */}
        <div className="absolute inset-0 flex items-center container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl">
            {/** Movie info */}
            <div className="transition-all duration-700">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="bg-purple-500/90 text-white py-1 px-2 rounded-sm text-xs font-semibold">
                  Featured
                </span>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-yellow-400 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-neutral-400">Movie Voting Average</span>
                </div>
                {/** Conditinal Rendering Close */}
                <span className="text-neutral-400">Movie Runtime</span>
                <span className="text-neutral-400 text-sm">
                  Movie Release Date
                </span>
                {/** Conditinal Rendering */}
                <>
                  <span className="text-neutral-400">Movie Genres</span>
                  <span className="bg-neutral-700 text-neutral-300 text-xs px-11.5 py-0.5">
                    +18
                  </span>
                </>
                {/** Conditinal Rendering Close */}
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  Movie Title
                </h1>
                <p className="text-neutral-300 text-base md:text-lg mb-8 line-clamp-3 md:line-clamp-4 max-w-2xl">
                  Movie Overview
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586V7a1 1 0 10-2 0v6a1 1 0 001 1h6a1 1 0 100-2h-3.586l3.293-3.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Watch Now
                  </button>
                  <button className="bg-neutral-800/80 hover:bg-neutral-700/80 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all border border-neutral-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586V7a1 1 0 10-2 0v6a1 1 0 001 1h6a1 1 0 100-2h-3.586l3.293-3.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Add to Watchlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** Pagination */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-10">
        <button className={"h-1.5 rounded-full transition-all"}></button>
      </div>
    </div>












  );
}

export default HeroSection;
