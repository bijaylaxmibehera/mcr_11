import { useState } from "react";
import { useMovies } from "../context/MovieContext";
import { initialMovieData } from "../reducer/MovieReducer";
import {useNavigate} from "react-router-dom";


export function AddMovie() {
  const { movies, movieDispatch } = useMovies();
  const [newMovie, setNewMovie] = useState(initialMovieData);

  const navigate =useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProductId = Math.random();

    const productToAdd = {
      id: newProductId,
      ...newMovie,
    };

    movieDispatch({ type: "ADD_MOVIE", payload: productToAdd });
    setNewMovie(initialMovieData);
    navigate(`/`)
  };

  return (
    <>
      <form
        className="flex flex-col gap-4 w-[40vw] mx-auto my-10"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col">
          Title:
          <input
            type="text"
            className="border-slate-200 border-2"
            name="name"
            value={newMovie.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className="flex flex-col">
          Summary:
          <textarea
            className="border-slate-200 border-2"
            name="description"
            value={newMovie.summary}
            onChange={handleInputChange}
          ></textarea>
        </label>
        <label className="flex flex-col">
          Year:
          <input
            type="text"
            className="border-slate-200 border-2"
            name="year"
            value={newMovie.year}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className="flex flex-col">
          Stock:
          <input
            type="number"
            className="border-slate-200 border-2"
            name="stock"
            value={newProduct.stock}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className="flex flex-col">
          genre:
          <input
            type="text"
            className="border-slate-200 border-2"
            name="genre"
            value={newMovie.genre}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className="flex flex-col">
          Writter:
          <input
            type="number"
            className="border-slate-200 border-2"
            name="delivered"
            value={newMovie.writter}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className="flex flex-col">
          imageURL:
          <input
            type="text"
            className="border-slate-200 border-2"
            name="imageURL"
            value={newMovie.imageURL}
            onChange={handleInputChange}
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold text-lg rounded-md px-3 py-1"
        >
          Add Movie
        </button>
      </form>
    </>
  );
}
