import { NavLink } from "react-router-dom";
import { useMovies } from "../context/MovieContext";

export function NavBar() {
  const { movieDispatch } = useMovies();

  const getStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "",
  });

  const handleSearch = (e) => {
    const userInput = e.target.value;
    movieDispatch({ type: "ADD_SEARCH", payload: userInput });
  };
  return (
    <>
      <nav className="bg-stone-600 text-white flex justify-between items-center py-4 px-8">
        <h1 className="text-xl font-bold">IMDB</h1>
        <div>
          <input
            type="text"
            placeholder="Search movies by title"
            className="w-[30vw] py-1 px-3 rounded-md text-black outline-none"
            onChange={handleSearch}
          />
        </div>
        <div className="font-semibold">
          <NavLink to="/" style={{ getStyle }} className="mr-2">
            Home
          </NavLink>
          <NavLink to="/watchlist" style={{ getStyle }} className="mr-2">
            Watchlist
          </NavLink>
        </div>
      </nav>
    </>
  );
}
