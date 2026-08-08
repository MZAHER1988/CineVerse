# CineVerse

CineVerse is a modern movie discovery web app built with React and Vite. It lets users browse trending, popular, top-rated, and genre-based movies, while also searching for titles and opening detailed movie information.

## Features

- Browse featured movies on the hero section
- Explore movies by category: trending, popular, and top rated
- Discover titles by genre
- Search movies directly from the navbar
- Open a detailed movie modal with synopsis, rating, runtime, and production info
- Responsive layout for desktop and mobile

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- TMDB API
- Lucide React icons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/cineverse.git
   cd cineverse
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a local environment file
   ```bash
   cp .env.example .env
   ```

4. Add your TMDB API key to the environment file
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
   ```

5. Start the development server
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` — start the development server
- `npm run build` — build the app for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint checks

## Project Structure

```text
src/
  components/      # UI components such as navbar, hero section, sliders, and modal
  context/         # Global movie state and provider
  services/        # API calls and helpers
  App.jsx          # Main app entry point
```

## Environment Variables

The app expects the following variables:

- `VITE_TMDB_API_KEY` — your TMDB API access key
- `VITE_TMDB_BASE_URL` — TMDB API base URL

You can get a free API key from the TMDB website.

## Notes

This project uses the TMDB API for movie data. Make sure your API key is valid and that the environment variables are configured correctly before running the app.

## License

This project is for educational and personal use.
