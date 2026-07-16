import React from 'react'
import HeroSection from './HeroSection'
import MovieSlider from './MovieSlider';
import GenreSection from './GenreSection';
import MoviesDetails from './MoviesDetails';
import Footer from './Footer';

function MovieContent () {
  return (
    <>
    
    <HeroSection />
    <div className="bg-gradient-to-b from-neutral-900 to-neutral-950">
      <MovieSlider />
      <GenreSection />
      

    </div>


    {/** Movie Details Section */}
    {/** <MoviesDetails />*/}
    

    </>
    
  );
}

export default MovieContent;