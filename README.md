# CineVerse

CineVerse is a modern movie discovery web application built with React and Vite. The app gives users a polished experience for browsing movies, exploring genres, searching titles, and viewing detailed information about selected films.

## Overview

CineVerse is designed to feel like a lightweight streaming-style movie catalog. It combines a cinematic landing experience with practical browsing tools such as category sliders, genre-based discovery, movie search, and detailed movie information.

The project is developed gradually as a personal learning and portfolio project, with new features and improvements planned for future versions.

## Features

- Featured hero section with highlighted movies
- Trending, upcoming, popular, and top-rated movie sections
- Genre-based browsing experience
- Search movies directly from the navbar
- Detailed movie modal with metadata such as rating, runtime, genres, and production information
- Responsive layout for desktop and mobile devices

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- TMDB API
- Lucide React icons
- ESLint

## Project Structure

```text
src/
  components/        # UI components such as navbar, hero section, sliders, and modal
  context/           # Global movie state and provider
  services/          # API calls and helper functions
  App.jsx            # Main app component
  main.jsx           # React rendering entry point
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

1. Clone the repository
   ```bash
   git clone <your-repository-url>
   cd cineverse
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a local environment file
   Create a file named `.env` in the project root and add the following values:

   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open the app in your browser at the local Vite URL shown in the terminal.

## Available Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint checks

## Environment Variables

The application uses the following environment variables:

- `VITE_TMDB_API_KEY` — your TMDB API key
- `VITE_TMDB_BASE_URL` — the TMDB API base URL

You can obtain a free API key from the TMDB website.

## Learning Background

CineVerse was initially inspired by a React tutorial on YouTube.

The project has since been developed further as a personal learning and portfolio project. Additional features, UI improvements, API functionality, error handling, and other improvements are being implemented independently as the project evolves.

## Future Improvements

CineVerse will continue to evolve through multiple versions.

Planned improvements include:

- Lazy loading images
- Pagination / Infinite Scroll
- Movie Trailers
- Light / Dark mode
- My List / Favorites
- LocalStorage
- Improved accessibility
- User authentication

## Notes

- The app relies on The Movie Database (TMDB) API for all movie data.
- Make sure your API key is valid and your environment variables are configured correctly before running the app.
- For production use, it is recommended to handle API calls through a secure backend or proxy instead of exposing the API key directly in the client.

## License

This project is intended for educational and personal use.
