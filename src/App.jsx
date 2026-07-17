import React from "react";
import Navbar from "./components/Navbar";
import MovieContent from "./components/MovieContent";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <main>
        <MovieContent />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;