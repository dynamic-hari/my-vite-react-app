import { movies } from "./data/movies.js";
import MovieList from "./MovieList.jsx";

const fetchMovies = () => {
  return movies;
};

const MovieComponent = () => {
  const moviesData = fetchMovies();
  return (
    <div className="movie-container">
      <h1>Movies</h1>
      <ul className="movie-list">
        {moviesData.map((movie) => {
          return <MovieList key={movie.id} movies={movie} />;
        })}
      </ul>
    </div>
  );
};

export default MovieComponent;
