const GenreSection = () => {
  return (
    <section className="py-12 bg-neutral-900/50" id="">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Browser by Genre
        </h2>

        {/** Genre Tabs */}
        <div className="mb-8 overflow-x-auto pb-2">
          <div className="flex space-x-2 min-width-max">
            {/** Conditional Rendering */}
            <button
              className={
                "px-4 py-2 rounded-md text-sm text-white transition-colors"
              }
            >
              Genre Name
            </button>
          </div>
        </div>
        {/** Conditional Rendering for Genre Movies */}
        <div className="h-64 flex items-center justify-center text-neutral-400 text-lg">
          <div className="animate-pulse">
            <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
        {/** Else */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {/** Map Method */}
          <div className="group cursor-pointer">
            <div className="relative rounded-lg overflow-hidden bg-neutral-800">
              <div className="aspect-2/3">
                <img
                  src=""
                  alt=""
                  className="w-full h-full object-cover transition-all
                  duration-300 group-hover:scale-110 group-hover:opacity-35"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 
                       to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 
                       flex flex-col justify-end p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 
                                  00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 
                                  1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 
                                  0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 
                                  8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z"
                        />
                      </svg>
                      <span className="text-sm text-yellow-400 font-medium">
                        Movie Voting Average
                      </span>
                    </div>
                    <span className="text-sm text-neutral-400">
                      Movie release date
                    </span>
                  </div>
                  <button className="mt-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-md text-sm transition-all flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.108A1 1 0 008 8v4a1 1 0 001.555.892l3-2a1 1 0 000-1.784l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <h3 className="text-sm font-medium text-white truncate">
              Movie Title
            </h3>
            <div className="flex items-center justify-between mt-1 space-x-1">
              <div className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 
                  1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 
                  00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 
                  1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 
                  1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <span className="text-sm text-neutral-400">
                  Movie Average Rating
                </span>
              </div>
              <span className="text-sm text-neutral-400">
                Movie Release Date
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenreSection;
