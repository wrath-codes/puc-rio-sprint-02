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
  const changeVoteColor = (vote: number) => {
    if (vote > 9) {
      return "text-emerald-100"
    } else if (vote > 8) {
      return "text-emerald-300"
    } else if (vote > 6) {
      return "text-emerald-500"
    } else if (vote > 4) {
      return "text-amber-300"
    } else if (vote > 2) {
      return "text-amber-500"
    } else {
      return "text-red-500"
    }
  }

  return (
    <div className="text-center">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="rounded-lg mb-2" />
      <p className={`text-sm ${changeVoteColor(movie.vote_average)} font-semibold`}>
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