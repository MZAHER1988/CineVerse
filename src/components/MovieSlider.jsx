import React from "react";

function MovieSlider() {
  return (
    <section className="py-12" id="">
      <div className="container mx-auto px-4">
        <div className="flex items-baseline justify-between mb-8">
          <div className="text-2xl md:text-3xl font-bold text-white">
            <h2>Title</h2>
            {/** Conditional Rendering */}
            <p className="text-neutral-400 text-sm mt-1">Subtitle</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-neutral-800/70 hover:bg-neutral-700 text-white p-2 rounded-full transition-all"
                    aria-label="Scroll Left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="bg-neutral-800/70 hover:bg-neutral-700 text-white p-2 rounded-full transition-all"
                    aria-label="Scroll Right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-5 h-5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/** Movie Slider */}
        <div className="relative">
          <div className="flex space-x-4 overflow-x-hidden scrollbar-hide pb-4 snap-x">
            {/** Conditional Rendering */}
            <div className="min-w-[200px] md:min-w-[240px] snap-start relative group cursor-pointer">
              <div className="rounded-lg overflow-hidden bg-neutral-800">
                <div className="relative aspect-[2/3]">
                  <img
                    src=""
                    alt=""
                    className="w-full h-full object-cover transition-all duration-300 
                    group-hover:scale-110 group-hover:opacity-35"
                  />

                  {/** Hover overlay */}
                  <div className={'absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4'}>
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            className="w-4 h-4 text-yellow-400"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 
                              1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 
                              1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 
                              1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                          </svg>
                          <span className="text-yellow-400 text-sm font-medium">
                            Movies Vote Average
                          </span>
                        </div>
                        <span className="text-neutral-400 text-sm">
                          Movies Release Date
                        </span>
                      </div>
                      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-md
                              flex items-center justify-center gap-1 transition-all text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                          />
                        </svg>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/** Movie Info */}
              <div className="mt-3">
                <h3 className="text-white text-sm md:text-base font-medium truncate">
                  Movies Title
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="w-4 h-4 text-yellow-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 
                      1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 
                      1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                    <span className="text-neutral-400 text-xs">
                      Movies Vote Average
                    </span>
                  </div>
                  <span className="text-neutral-400 text-xs">
                    Movies Release Date
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieSlider;
