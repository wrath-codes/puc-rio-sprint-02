import { IMovieList, MovieList } from "../MovieList";
import { useEffect, useState } from "react";

import { PageTitle } from "../PageTitle";
import { Pagination } from "../Pagination";

interface IRegular {
  title: string;
  url: string;
}

// Component that takes a title and a url and renders a page with a title, a movie list and a pagination component

function RegularPage({ title, url }: IRegular): JSX.Element {
  const [movies, setMovies] = useState<IMovieList>({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0
  } as IMovieList)




  async function fetchData(page: number) {
    const urlWithPage = import.meta.env.VITE_API_BASE_URL + url + `${page}` + `&api_key=${import.meta.env.VITE_API_KEY}`
    console.log(urlWithPage)
    const movieList = await fetch(urlWithPage, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`
      }
    }).then(res => res.json())

    if (movieList === undefined) return {}
    setMovies(movieList)
  }

  useEffect(() => {
    fetchData(1)
  }, [])


  return (
    <>
      <PageTitle title={title} />
      <MovieList movies={movies} />
      <Pagination movies={movies} fetchData={fetchData} />
    </>
  )
}

export { RegularPage }