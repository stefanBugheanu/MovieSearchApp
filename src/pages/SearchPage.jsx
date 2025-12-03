import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export default function Search() {
  const [inputFilm, setinputFilm] = useState("");
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const searchMovies = async () => {
    setLoading(true);
    setNotFound(false);

    try {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&t=${inputFilm}`
      );
      const data = await res.json();

      if (data.Response === "True") {
        setMovie(data);
      } else {
        setMovie(null);
        setNotFound(true);
      }
    } catch (err) {
      console.error("Error:", err);
      setNotFound(true);
    }
    setLoading(false);
  };

  const loadMyFavouriteFilm = async () => {
    setLoading(true);
    setNotFound(false);

    try {
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&t=Inception`
      );
      const data = await res.json();

      if (data.Response === "True") {
        setMovie(data);
      } else {
        setMovie(null);
        setNotFound(true);
      }
    } catch (err) {
      console.error("Error:", err);
      setNotFound(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadMyFavouriteFilm();
  }, []);

  return (
    <div className="bg-[#F7F1E1] min-h-screen h-screen flex items-center justify-center">
      <div className="w-[45%] min-h-[85%] bg-[#A3B18A] border-white border-6  rounded-3xl">
        <h1 className="text-[clamp(1.5rem,4vw,3rem)] text-center font-title pt-10 text-white mb-10">
          Movie APP
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            searchMovies();
          }}
          className="flex justify-center "
        >
          <input
            type="text"
            placeholder="Search movie..."
            value={inputFilm}
            onChange={(e) => setinputFilm(e.target.value)}
            className=" p-2 border-gray-500 border-2 focus:outline-none bg-white w-[70%]"
          />
          <button
            onClick={() => searchMovies()}
            className="bg-white text-indigo-600 px-4 py-2  border-gray-500 font-semibold outline-0  border-2  hover:bg-indigo-100"
          >
            Search
          </button>
        </form>
        {loading && <p className="text-white text-center">Loading...</p>}
        {notFound && (
          <p className="text-red-500 text-center ">Can't find this film!</p>
        )}
        <div className="flex justify-center">
          {movie && <MovieCard movie={movie} />}
        </div>
      </div>
    </div>
  );
}
