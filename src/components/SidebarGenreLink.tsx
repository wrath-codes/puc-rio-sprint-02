import { Link, useLocation } from "wouter";

export interface IGenre {
  id: number;
  name: string;
}




// Component that takes a IGenre and renders a genre link
function SidebarGenreLink({ genre, href }: { genre: IGenre, href: string }): JSX.Element {
  const [location, setLocation] = useLocation();


  return (
    <Link href={href} >
      <a
        className={` hover:text-zinc-700 pl-8 ${location === href ? "text-amber-300" : "text-zinc-300"}`}
        onClick={() => setLocation(href)}
      >
        {genre.name}
      </a>
    </Link>
  )
}

export { SidebarGenreLink }