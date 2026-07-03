import React from 'react'
import HeroSection from './HeroSection'
import MovieSlider from './MovieSlider';
import GenreSection from './GenreSection';

const MovieContent = () => {
  return (
    <>
    
    <HeroSection />
    <div className="bg-gradient-to-b from-neutral-900 to-neutral-950">
      <MovieSlider />
      <GenreSection />

    </div>

    </>
    
  );
}

export default MovieContent