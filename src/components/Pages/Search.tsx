import { IMovieList, MovieList } from "../MovieList";

import { SearchPagination } from "../SearchPagination";
import { useState } from "react";

// Component that takes a title and a url and renders a page with a title, a movie list and a pagination component
function SearchPage(): JSX.Element {
  const [movies, setMovies] = useState<IMovieList>({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
  } as IMovieList)

  const [query, setQuery] = useState<string>('')

  async function fetchData(query: string, page?: number) {
    if (!page) page = 1
    const slicedQuery = query!.split(' ').join('+')
    const urlWithPage = import.meta.env.VITE_API_BASE_URL + `/search/movie?query=${slicedQuery}` + `&page=` + `${page}` + `&api_key=${import.meta.env.VITE_API_KEY}`
    console.log(urlWithPage)
    const movieList = await fetch(urlWithPage, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`
      },
    }).then(res => res.json())

    if (movieList === undefined) return {}

    console.log(movieList)
    setMovies(movieList)
  }

  return (
    <div className="w-full flex flex-col flex-auto">
      <input className="mt-2 bg-zinc-700 text-zinc-50 rounded-md p-2 mb-2 w-full mx-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
        type="text" onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            fetchData(query)
          }
        }}

        placeholder="Search for a movie"
      />
      <MovieList movies={movies} />
      <SearchPagination movies={movies} fetchData={fetchData} query={query} />
    </div>

  )
}

export { SearchPage }