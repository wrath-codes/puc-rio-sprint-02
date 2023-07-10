// create a function that returns the genre name based on the genre id
const getGenreName = async (genreId: string): Promise<string> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`
  );
  const data = await response.json();

  const genre = data.genres.find((genre: any) => genre.id === genreId);

  return genre.name;
}

export { getGenreName }