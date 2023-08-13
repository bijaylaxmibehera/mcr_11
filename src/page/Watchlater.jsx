import { MovieCard } from "../component/MovieCard";
import { useMovies } from "../context/MovieContext";
export function WatchLater() {
const {watchlist}=useMovies();

  return (
    <>
      {watchlist.map((movie)=>(
        <MovieCard movie={movie} key={movie.id}/>
      ))}
    </>
  );
}
