export const initialMovieData = {
  title: "",
  year: "",
  genre: [],
  rating: "",
  director: "",
  writter: "",
  cast: [],
  summary: "",
  imageURL: "",
};

const initialState = {
  movies: [],
  watchlist: [],
  stared: [],
  movieData: initialMovieData,
  search: "",
  rating:'',
  year:'',
  genre:'',
};

const movieReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_MOVIE":
      return { ...state, movies: action.payload };
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case "ADD_TO_WATCHLIST":
      if (!state.watchlist.find((item) => item.id === action.payload.id)) {
        return {
          ...state,
          watchlist: [...state.watchlist, action.payload],
        };
      }
      return state;
    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "ADD_TO_STAR":
      if (!state.stared.find((item) => item.id === action.payload.id)) {
        return {
          ...state,
          stared: [...state.stared, action.payload],
        };
      }
      return state;
    case "REMOVE_FROM_STAR":
      return {
        ...state,
        stared: state.stared.filter((item) => item.id !== action.payload.id),
      };
    case "ADD_SEARCH":
      return { ...state, search: action.payload.toLowerCase() };
    case "ADD_RATING":
      return { ...state, rating: action.payload };
    case "ADD_YEAR":
      return { ...state, year: action.payload };
    case "ADD_GENRE":
      return { ...state, genre: action.payload };
    default:
      return state;
  }
};

export { initialState, movieReducer };
