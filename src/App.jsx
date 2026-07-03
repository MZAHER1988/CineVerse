import React from "react";
import Navbar from "./components/Navbar";
import MovieContent from "./components/MovieContent";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <MovieContent />
      </main>
    </div>
  );
}

export default App;