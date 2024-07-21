import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  const loadGenres = () => {
    return data.map((genre) => <li key={genre.id}>{genre.name}</li>);
  };
  return <ul>{loadGenres()}</ul>;
};

export default GenreList;
