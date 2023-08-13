import { useMovies } from "../context/MovieContext";

export function FilterBar() {
  const { movies, movieDispatch } = useMovies();

  const availGenre = movies.reduce((genres, movie) => {
    movie.genre.forEach((genre) => {
      if (!genres.includes(genre)) {
        genres.push(genre);
      }
    });
    return genres;
  }, []);

  const availYears=movies.reduce((years, movie) => {
    if (!years.includes(movie.year)) {
      years.push(movie.year);
    }
    return years;
  }, []);

  const uniqueRatings = movies.reduce((ratings, movie) => {
    if (!ratings.includes(movie.rating)) {
      ratings.push(movie.rating);
    }
    return ratings;
  }, []);

  const handleGenreChange=(e)=>{
    const selectedGenre=e.target.value;
    movieDispatch({type:"ADD_GENRE", payload:selectedGenre})
  }

  const handleYearChange=(e)=>{
    const selectedYear=e.target.value;
    movieDispatch({type:"ADD_YEAR", payload:selectedYear})
  }

  const handleRating=(e)=>{
    const seletedRating=e.target.value;
    movieDispatch({type:"ADD_RATING", payload:seletedRating})
  }
  return (
    <>
      <div className="flex justify-between items-center my-6 mx-4">
        <h1 className="text-2xl font-bold">Movies</h1>
        <select onChange={handleGenreChange}>
            <option value="">All genre</option>
            {availGenre.map((gen)=>(
                <option key={gen} value={gen}>{gen}</option>
            ))}
        </select>
        <select onChange={handleYearChange}>
            <option value="">Release years</option>
            {availYears.map((year)=>(
                <option key={year} value={year}>{year}</option>
            ))}
        </select>
        <select onChange={handleRating}>
            <option value="">Rating</option>
            {uniqueRatings.map((rating)=>(
                <option key={rating} value={rating}>{rating}</option>
            ))}
        </select>
        <button className="bg-stone-700 font-semibold text-white cursor-pointer px-3 py-1 rounded-md">Add</button>
      </div>
    </>
  );
}
