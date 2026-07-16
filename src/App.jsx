import React from "react";
import Navbar from "./components/Navbar";
import MovieContent from "./components/MovieContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <main>
        <MovieContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;