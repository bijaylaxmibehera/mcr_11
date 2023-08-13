import { FilterBar } from "../component/FilterBar";
import { MovieCard } from "../component/MovieCard";
import { useMovies } from "../context/MovieContext";

export function Landing() {
  const { movies, search, genre, year, rating } = useMovies();
  const filteredMovies = movies.filter(
    (movie) =>
      (search.length === 0 || movie.title.toLowerCase().includes(search)) &&
      (genre.length === 0 || movie.genre.includes(genre)) &&
      (year === "" || movie.year === Number(year)) &&
      (rating === "" || movie.rating === Number(rating))
  );
  return (
    <>
      <FilterBar />
      {filteredMovies.length > 0 ? (
        <div className="responsive-grid m-5 gap-3">
          {filteredMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <h1 className="text-center mt-10 text-red-600 text-2xl">No movies available</h1>
      )}
    </>
  );
}
