import {useNavigate} from "react-router-dom";
import { useMovies } from "../context/MovieContext";
import { useState } from "react";

export function MovieCard({ movie }) {
  const {id, title, summary, imageURL } = movie;
  const navigate=useNavigate();

  const {movieDispatch, stared, watchlist}=useMovies();

  const [isWatchlistActive, setIsWatchistActive] = useState(
    watchlist.some((item) => item.id === id)
  );
  
  const [isStaredActive,setIsStaredistActive]=useState(stared.some((item)=>item.id===id));

  const handleStarlist=()=>{
    if(isStaredActive){
        movieDispatch({type:"REMOVE_FROM_STAR", payload:movie})
    }else{
        movieDispatch({type:"ADD_TO_STAR", payload:movie})
    }
    setIsStaredistActive(!isStaredActive)
  }

  const handleWatchlist=()=>{
    if (isWatchlistActive) {
        movieDispatch({ type: 'REMOVE_FROM_WATCHLIST', payload: movie});
      } else {
        movieDispatch({ type: 'ADD_TO_WATCHLIST', payload: movie });
      }
      setIsWatchistActive(!isWatchlistActive);
  }

//   onClick={()=>navigate(`/movies/${id}`)}
  return (
    <>
      <div className="card text-sm h-[28rem] text-center" onClick={()=>navigate(`/movies/${id}`)}>
        <img className="card-img h-[50%] w-[100%]" src={imageURL} alt={title} />
        <div className="flex flex-col items-center justify-between h-[50%] pb-3">
          <div className="card-info flex items-center flex-col">
            <div className="card-title ">
              <h2 className="font-bold text-lg">{title}</h2>
            </div>
            <p>{summary}</p>
          </div>
          <div className="buttom-btn">
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
