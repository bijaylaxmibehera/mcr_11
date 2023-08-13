import { useParams } from "react-router-dom";
import { useMovies } from "../context/MovieContext";
import { useState } from "react";

export function Movies() {
  const { movieId } = useParams();
  const { movies } = useMovies();

  const selectedMovie = movies.find((movie) => movie.id === Number(movieId));
  const {
    id,
    title,
    year,
    genre,
    rating,
    director,
    writer,
    cast,
    summary,
    imageURL,
  } = selectedMovie;

  const genreList = genre.map((gen, index) => (index === 0 ? gen : `, ${gen}`));

  const castList = cast.map((actor, index) =>
    index === 0 ? actor : `, ${actor}`
  );

  const {movieDispatch, stared, watchlist}=useMovies();

  const [isWatchlistActive, setIsWatchistActive] = useState(
    watchlist.some((item) => item.id === id)
  );
  
  const [isStaredActive,setIsStaredistActive]=useState(stared.some((item)=>item.id===id));

  const handleStarlist=()=>{
    if(isStaredActive){
        movieDispatch({type:"REMOVE_FROM_STAR", payload:selectedMovie})
    }else{
        movieDispatch({type:"ADD_TO_STAR", payload:selectedMovie})
    }
    setIsStaredistActive(!isStaredActive)
  }

  const handleWatchlist=()=>{
    if (isWatchlistActive) {
        movieDispatch({ type: 'REMOVE_FROM_WATCHLIST', payload: selectedMovie});
      } else {
        movieDispatch({ type: 'ADD_TO_WATCHLIST', payload: selectedMovie });
      }
      setIsWatchistActive(!isWatchlistActive);
  }

  return (
    <>
      <div className="flex w-[90vw] mx-auto my-4 bg-white shadow-xl h-[80vh]">
        <div className="w-[50%]">
          <img src={imageURL} alt={title} className="w-[90%] h-[100%]" />
        </div>
        <div className="w-[50%] flex flex-col gap-4">
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="font-[500]">{summary}</p>
          <p>Year: {year}</p>
          <p>Grenre: {genreList}</p>
          <p>Rating: {rating}</p>
          <p>Director: {director}</p>
          <p>Writer: {writer}</p>
          <p>Cast: {castList}</p>
          <div>
          <button className="bg-stone-700 text-white px-3 py-1 rounded-md mr-3 font-semibold" onClick={handleStarlist}>
              {isStaredActive? 'stared':'star'}
            </button>
            <button className="bg-stone-700 text-white px-3 py-1 rounded-md font-semibold" onClick={handleWatchlist}>
              {isWatchlistActive? 'Remove':'Add to watchlist'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
