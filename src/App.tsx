import { IMovieList, MovieList } from "./components/MovieList";
import { useEffect, useState } from "react"

import { Clapperboard } from "lucide-react";
import { PageTitle } from "./components/PageTitle";

// using tmdb database to get top rated movies






interface Genre {
  id: number;
  name: string;
}

// Make a component that takes a title and renders it in a h1 tag and when it's hovered it
// starts spinning to left and changes color to zinc-400






function Genre({ genre }: { genre: Genre }) {
  return (
    <>
      <li className="text-sm font-semibold text-zinc-200">
        {genre.name}
      </li>
    </>
  )
}

export default function App() {
  const [movies, setMovies] = useState<IMovieList>({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
  } as IMovieList)
  const [genres, setGenres] = useState<Genre[]>([])

  async function fetchData() {
    const movie = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en&page=1&sort_by=popularity.desc&api_key=${import.meta.env.VITE_API_KEY}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`
      }
    }).then(res => res.json())

    console.log(movie)

    if (movie === undefined) return {}

    setMovies(movie)
  }

  async function fetchGenres() {
    const genres = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${import.meta.env.VITE_API_KEY}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`
      }
    }).then(res => res.json())
    console.log(genres)

    setGenres(genres.genres)
  }

  useEffect(() => {
    fetchData()
    fetchGenres()
    console.log(movies)
  }, [])


  // <div className="my-2">
  //   <input type="text" placeholder="Search" className="bg-zinc-900 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-zinc-300" />
  // </div>
  return (
    <div className="bg-zinc-950 text-zinc-50">
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1">
          <aside className="w-72 bg-zinc-900 py-6 p-6 h-screen sticky top-0">
            <h1 className="text-2xl font-bold text-center mb-5 text-zinc-300 inline-flex items-center">
              <Clapperboard size={30} className="text-zinc-300 mr-2" /> <div className="text-amber-300">My</div>Movies<div className="text-amber-300">App</div>
            </h1>
            <div className="flex flex-col">
              <ul className="flex flex-col pl-2">
                <li className="text-xl font-bold  mb-2 text-zinc-300">
                  Search
                </li>
                <li className="text-xl font-bold  mb-2 text-zinc-300">
                  Popular
                </li>
                <li className="text-xl font-bold  mb-2 text-zinc-300">
                  Top Rated
                </li>
                <li className="text-xl font-bold  mb-2 text-zinc-300">
                  Upcoming
                </li>
                <li className="text-xl font-bold  mb-2 text-zinc-300">
                  Now Playing
                </li>
              </ul>

              <h1 className="text-xl font-bold  mb-2 text-zinc-300 ml-2">
                Genres
              </h1>
              <ul className="flex flex-col pl-4">
                {genres?.map((genre: Genre) => (
                  <Genre key={genre.id} genre={genre} />
                ))}
              </ul>
            </div>
          </aside>
          <main className="min-h-screen pl-2">
            <PageTitle title="Top Rated" />
            <MovieList movies={movies} />
          </main >
        </div>
      </div>
    </div>
  )
}