import { IMovie, Movie } from './Movie';

import { Card } from "./Card";

export interface IMovieList {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

// Component that takes a IMovieList and renders a grid of Movie components
function MovieList({ movies }: { movies: IMovieList }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {movies?.results?.map((movie: IMovie) => (
        <Card key={movie.id}>
          <Movie movie={movie} />
        </Card>
      ))}
    </div>
  )
}

export { MovieList }