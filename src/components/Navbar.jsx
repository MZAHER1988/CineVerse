import React, { useState, useEffect, useRef } from "react";
import { useMovies } from "../context/MoviesContext";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`flex w-full z-50 transition-all duration-300 bg-neutral-800 ${isScrolled ? "bg-neutral-900/95 backrdop-blur-md shadow-lg" : "bg-transparent"} `}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-purple-500 font-bold text-3xl">Cine</span>
              <span className="text-white font-bold text-3xl">Verse</span>
            </a>
          </div>
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#trending"
              className="hover:text-purple-400 transition-all font-medium"
            >
              Trending
            </a>
            <a
              href="#popular"
              className="hover:text-purple-400 transition-all font-medium"
            >
              Popular
            </a>
            <a
              href="#top-rated"
              className=" hover:text-purple-400 transition-all font-medium"
            >
              Top Rated
            </a>
            <a
              href="#my-list"
              className="hover:text-purple-400 transition-all font-medium"
            >
              My List
            </a>
          </nav>

          {/* Search Bar */}
          <div
            className="hidden md:block relative search-container"
            ref={searchContainerRef}
          >
            <input
              type="text"
              placeholder="Search movies..."
              className="bg-neutral-800/80 text-white rounded-full px-4 py-2 pr-10 text-sm w-48 focus:w-64 
          transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />

            {/* Search icon*/}

            {isSearching ? (
              <div className="absolute right-1 top-1/2 transform -translate-y-1/2">
                <button className="bg-purple-500/5 hover:bg-purple-600 text-white rounded-full p-2 transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 absolut right-3 top-3 text-neutral-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            )}

            {/** från AI________________________________________________________________________ */}
            {/* Search results dropdown */}

            {showSearchResults && searchResult && searchResult.length > 0 && (
              <div className="absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                <div
                  className="absolute right-0 top-full mt-2 w-full bg-neutral-800 backdrop-blur-lg 
                border border-gray-600 rounded-lg shadow-lg overflow-hidden z-50"
                >
                  <ul className="divide-y divide-neutral-700 py-2">
                    <li className="px-4 py-2 hover:bg-purple-500/50 cursor-pointer">
                      <button className="flex items-center p-3 w-full text-left">
                        <div className="w-10 h-10 bg-neutral-700 rounded overflow-hidden flex-shrink-0">
                          {/* Conditional Rendering */}

                          <img
                            src=""
                            alt=""
                            className="w-full h-full object-cover"
                          />
                          {/* If no image is available, you can render a placeholder */}

                          <div className="w-full h-full bg-gray-500 flex items-center justify-center">
                            <span className="text-white text-sm">No Image</span>
                          </div>

                          <div className="ml-3 flex-1">
                            <p className="text-sm text-white font-medium truncate">
                              Movie Title
                            </p>
                            <p className="text-neutral-400 text-xs">
                              Movie Release Date
                            </p>
                          </div>
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/** Conditional Rendering */}

            {showSearchResults &&
              searchQuery.trim().length > 2 &&
              (!searchResult || searchResult.length === 0) &&
              !isSearching && (
                <div className="absolute mt-2 w-72 bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                  <div className="p-4 text-center text-neutral-400 text-sm">
                    No results found.
                  </div>
                </div>
              )}
          </div>
          {/* Mobile Menu Button*/}
          <button
            className="md:hidden text-orange-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* Hamburger Icon */}

            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Conditional Rendering */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a
              href="#"
              className="block py-2 text-white hover:bg-purple-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#trending"
              className="block py-2 text-gray-400 hover:bg-purple-400 transition-colors"
            >
              Trending
            </a>
            <a
              href="#popular"
              className="block py-2 text-white hover:bg-purple-400 transition-colors"
            >
              Popular
            </a>
            <a
              href="#top-rated"
              className="block py-2 text-white hover:bg-purple-400 transition-colors"
            >
              Top Rated
            </a>
            <a
              href="#my-list"
              className="block py-2 text-white hover:bg-purple-400 transition-colors"
            >
              My List
            </a>
            {/** Mobile Search Bar */}
            <div className="relative mt-4 search-container">
              <input
                type="text"
                placeholder="Search movies..."
                className="bg-neutral-800/80 text-white rounded-full px-4 py-2 pr-10 text-sm w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />

              {/** Conditional Renderiong */}

              {isSearching ? (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                {/**Else */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 absolute right-3 text-neutral-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>

              </div>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 absolute right-3 text-neutral-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              )}


                {/**Mobile Search Result */}

              {showSearchResults && searchResult && searchResult.length > 0 && (
                                <div className="absolute mt-2 w-full bg-neutral-800 backdrop-blur-lg border border-gray-600 rounded-lg shadow-lg overflow-hidden z-50">
                  <ul className="divide-y divide-neutral-700 py-2">
                    {/* Search Result Item */}
                    <li className="hover:bg-purple-500/50">
                      Search Result 1
                      <button className="flex items-center p-3 w-full text-left">
                        <div className="w-10 h-14 bg-neutral-700 rounded-full overflow-hidden flex-shrink-0">
                          {/* Conditional Rendering */}
                          <img
                            src=""
                            alt=""
                            className="w-full h-full object-cover"
                          />
                          {/* If no image is available, you can render a placeholder */}
                          <div className="w-full h-full bg-gray-500 flex items-center justify-center">
                            <span className="text-gray-400 text-sm">
                              No Image
                            </span>
                          </div>
                        </div>
                        <div className="ml-3 flex-1">
                          <p className="text-sm text-white font-medium truncate">
                            Movie Title
                          </p>
                          <p className="text-neutral-400 text-xs">
                            Movie Release Date
                          </p>
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
              )}


                {/**Conditional Rendering */}
              
              {showSearchResults && searchQuery.trim().length > 2 &&
              (!searchResult || searchResult.length === 0) &&
              !isSearching && (
                <div className="absolute mt-2 w-full bg-neutral-800 rounded-lg shadow-lg overflow-hidden z-50">
                  <div className="p-4 text-center text-neutral-400 text-sm">
                    No results found.
                  </div>
                </div>
              )}

              </div>
            </div>

        )}
      </div>
    </header>
  );
}

export default Navbar;
