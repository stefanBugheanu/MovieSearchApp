export default function MovieCard({ movie }) {
  return (
    <div className="border-r-4 border-t-2 bg-amber-50 border-gray-700 p-3 rounded-2xl shadow-lg max-w-xs w-[50%] my-7 ">
      <img
        src={movie.Poster}
        className="w-full min-h-[70%] aspect-square mb-2 rounded-2xl  "
      />
      <h2 className="text-lg font-semibold text-[clamp(0.8rem,2vw,2rem)]">
        {movie.Title}
      </h2>
      <p className="text-sm text-gray-600 text-[clamp(0.5rem,1.3vw,2rem)]">
        {movie.Year}
      </p>
    </div>
  );
}
