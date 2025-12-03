import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
