import { ChevronLeft, ChevronRight } from "lucide-react";

import { IMovieList } from "./MovieList";

interface ISearchPagination {
  movies: IMovieList;
  query: string;
  fetchData: (query: string, page?: number) => void;
}

// Component that takes a IMovieList and a function to fetch data and renders a pagination component
function SearchPagination({ movies, query, fetchData }: ISearchPagination): JSX.Element {
  const incrementPage = () => {
    fetchData(query, movies.page + 1)
  }

  const decrementPage = () => {
    fetchData(query)
  }

  if (movies.page === 1 && movies.total_pages === 1) {
    return (

      <div className="flex py-2">
        <div className="flex justify-center text-center w-full gap-2">
          <div className="text-amber-300 rounded-lg p-2 focus:outline-none ">
            {movies?.page}
          </div>
        </div>
        <div className="bg-zinc-950 rounded-lg p-2 flex gap-2">
          <div className="flex flex-row">Total: </div> <div>{movies?.total_pages}</div>
        </div>
      </div>
    )
  } else if (movies.page === 1) {
    return (

      <div className="flex py-2">
        <div className="flex justify-center text-center w-full gap-2">
          <div className="text-amber-300 rounded-lg p-2 focus:outline-none ">
            {movies?.page}
          </div>
          <button className="bg-zinc-900 rounded-lg p-2 hover:text-amber-300"
            onClick={incrementPage}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="bg-zinc-950 rounded-lg p-2 flex gap-2">
          <div className="flex flex-row">Total: </div> <div>{movies?.total_pages}</div>
        </div>
      </div>
    )
  } else if (movies.page === movies.total_pages) {
    return (
      <div className="flex py-2">
        <div className="flex justify-center text-center w-full gap-2">
          <button className="bg-zinc-900 rounded-lg p-2 hover:text-amber-300"
            onClick={decrementPage}
          >
            <ChevronLeft size={24} />
          </button>
          <div className="text-amber-300 rounded-lg p-2 focus:outline-none ">
            {movies?.page}
          </div>
        </div>
        <div className="bg-zinc-950 rounded-lg p-2 flex gap-2">
          <div className="flex flex-row">Total: </div> <div>{movies?.total_pages}</div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="flex py-2">
        <div className="flex justify-center text-center w-full gap-2">
          <button className="bg-zinc-900 rounded-lg p-2 hover:text-amber-300"
            onClick={decrementPage}
          >
            <ChevronLeft size={24} />
          </button>
          <div className="text-amber-300 rounded-lg p-2 focus:outline-none ">
            {movies?.page}
          </div>
          <button className="bg-zinc-900 rounded-lg p-2 hover:text-amber-300"
            onClick={incrementPage}
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="bg-zinc-950 rounded-lg p-2 flex gap-2">
          <div className="flex flex-row">Total: </div> <div>{movies?.total_pages}</div>
        </div>
      </div>
    )
  }
}

export { SearchPagination }