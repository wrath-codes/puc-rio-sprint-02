import { GenrePage } from "./components/Pages/Genre";
import { RegularPage } from "./components/Pages/Regular";
import { Route } from "wouter";
import { SearchPage } from "./components/Pages/Search";
import { Sidebar } from "./components/Sidebar";

export default function App() {
  return (
    <div className="bg-zinc-950 text-zinc-50">
      <div className="flex flex-col min-h-screen">
        <div className="flex flex-1">
          <Sidebar />
          <main className="min-h-screen pl-2">
            {/* Main/Discover Page */}
            <Route path="/">
              <RegularPage
                title="Discover"
                url="/discover/movie?include_adult=false&include_video=false&language=en&sort_by=popularity.desc&page="
              />
            </Route>

            {/* Search Page */}
            <Route path="/search" >
              <SearchPage />
            </Route>

            {/* Most Popular Page */}
            <Route path="/popular">
              <RegularPage
                title="Popular"
                url="/movie/popular?language=en-US&page="
              />
            </Route>

            {/* Top Rated Page */}
            <Route path="/top-rated">
              <RegularPage
                title="Top Rated"
                url="/movie/top_rated?language=en-US&page="
              />
            </Route>

            {/* Upcoming Page */}
            <Route path="/upcoming">
              <RegularPage
                title="Upcoming"
                url="/movie/upcoming?language=en-US&page="
              />
            </Route>

            {/* Now Playing Page */}
            <Route path="/now-playing">
              <RegularPage
                title="Now Playing"
                url="/movie/now_playing?language=en-US&page="
              />
            </Route>

            <Route path="/genres">
              <GenrePage />
            </Route>


            {/* Genre Pages */}
            <Route path="/genres/:genre_id">
              {
                params =>

                  <RegularPage
                    title=""
                    url={`/discover/movie?include_adult=false&include_video=false&language=en&sort_by=popularity.desc&with_genres=${params.genre_id}&page=`}
                  />
              }
            </Route>

          </main >
        </div>
      </div>
    </div>
  )
}