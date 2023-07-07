import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";

import { Card } from "../Card";
import { IGenre } from "../SidebarGenreLink";
import { PageTitle } from "../PageTitle";

function GenreLink({ genre, href }: { genre: IGenre, href: string }) {
  const [location] = useLocation();

  return (
    <Link href={href}>
      <a className={`p-10 text-center hover:text-zinc-700 ${location === href ? "text-amber-300" : "text-zinc-300"}`}>
        {genre.name}
      </a>
    </Link>
  )
}

interface IGenreList {
  genres: IGenre[];
}

function GenreList({ genres }: IGenreList) {
  return (
    <div className="grid grid-cols-5 gap-16">
      {genres.map((genre: IGenre) => (
        <Card key={genre.id}>
          <GenreLink genre={genre} href={`/genres/${genre.id}`} />
        </Card>
      ))}
    </div>
  )
}



// Component that takes a title and a url and renders a page with a title, a movie list and a pagination component
function GenrePage(): JSX.Element {
  const [genres, setGenres] = useState<IGenre[]>([])

  async function fetchGenres() {
    const genres = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${import.meta.env.VITE_API_KEY}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`
      }
    }).then(res => res.json())
    if (genres === undefined) return []
    setGenres(genres.genres)
  }

  useEffect(() => {
    fetchGenres()
  }, [])


  return (
    <div className="flex flex-col ">
      <PageTitle title={'Genres'} />
      <GenreList genres={genres} />
    </div>

  )
}

export { GenrePage }