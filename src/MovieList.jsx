const MovieList = ({ movies }) => {
  return (
    <li key={movies.id}>
      <h2>
        {movies.director} : {movies.title}
      </h2>
      <img
        src={movies.poster}
        width="300px"
        height="300px"
        alt={movies.title}
      />
      <p>
        {movies.year} - {movies.rating}
      </p>
    </li>
  );
};

export default MovieList;
