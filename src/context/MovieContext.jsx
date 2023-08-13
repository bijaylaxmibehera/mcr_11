import {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";
import { initialState, movieReducer } from "../reducer/MovieReducer";
import { movies } from "../database/MoviesData";

export const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [state, movieDispatch] = useReducer(movieReducer, initialState);

  useEffect(() => {
    movieDispatch({ type: "INITIALIZE_MOVIE", payload: movies });
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        movieDispatch,
        watchlist: state.watchlist,
        stared:state.stared,
        search:state.search,
        year:state.year,
        genre:state.genre,
        rating:state.rating
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export const useMovies = () => useContext(MovieContext);
