import { Title } from "./Title";
export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

// Component that takes a IMovie and renders a movie info
function Movie({ movie }: { movie: IMovie }) {
  return (
    <div className="text-center">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-lg mb-2" />
      <p className={`text-sm ${movie.vote_average > 6 ? "text-emerald-500" : "text-rose-500"} font-semibold`}>
        {movie.vote_average}
      </p>
      <Title title={movie.title} />
      <div className="p-4">
        <p className={"text-sm text-start text-zinc-500" + (movie.overview.length > 100 ? " line-clamp-3" : "")}>{movie.overview}</p>
        <p className="text-sm mt-5 border-t border-zinc-400">
          <div></div>

        </p>
      </div>
      <div className="mt-2 text-zinc-400">
        {movie.release_date}
      </div>
    </div>
  )
}

export { Movie }