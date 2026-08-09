
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;



//console.log("API Key loaded:", API_KEY ? "Yes ✅" : "No ❌");
//console.log("Base URL loaded:", BASE_URL);

export const fetchTrendingMovies = async () =>{
    try{
        const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.results;
        

    }catch (error) {
        console.error('Error Fetching trending movies', error);
        return [];

    }
};

export const fetchUpcomingMovies = async () => {
    try {
        const today = new Date().toISOString().split('T')[0];
        
        const response = await fetch(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&primary_release_date.gte=${today}&sort_by=popularity.desc&page=1`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error Fetching upcoming movies', error);
        return [];
    }
};

export const fetchPopularMovies = async () =>{
    try{
        const response = await fetch(
            `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        //console.log(data);
        return data.results;

    }catch (error) {
        console.error('Error Fetching popular movies', error);
        return [];

    }
};

export const fetchTopRatedMovies = async () =>{
    try{
        const response = await fetch(
            `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.results;

    }catch (error) {
        console.error('Error Fetching top rated movies', error);
        return [];

    }
};

export const fetchMoviesByGenre = async (genreId) =>{
    try{
        const response = await fetch(
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genreId}&page=1`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.results;

    }catch (error) {
        console.error('Error Fetching movies by genre', error);
        return [];

    }
};

export const fetchGenres = async () =>{
    try{
        const response = await fetch(
            `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US&page=1`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.genres;

    }catch (error) {
        console.error('Error Fetching genres', error);
        return [];

    }
};

export const fetchMovieDetails = async (movieId) =>{
    try{
        const response = await fetch(
            `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;

    }catch (error) {
        console.error('Error Fetching movie details', error);
        return [];

    }
};

export const searchMovies = async (query) =>{
    try{
        const cleanQuery = encodeURIComponent(query.trim());
        if (!cleanQuery) {
            return [];
        }
        
        const response = await fetch(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${cleanQuery}&page=1&include_adult=false`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.results;

    }catch (error) {
        console.error('Error Fetching movies', error);
        return [];

    }
};

export const getImageURL = (path, size = "original") => {
    if (!path || path === "" || path.trim() === "") {
        return "https://via.placeholder.com/400x600?text=No+Image+Available";        
    }
    return `https://image.tmdb.org/t/p/${size}${path}`;
}