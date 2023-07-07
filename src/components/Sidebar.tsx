import { CalendarClock, Cherry, Clapperboard, Search, ThumbsUp, Video, View, Vote } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";

import { AppLogo } from "./AppLogo";
import { IGenre } from "./SidebarGenreLink";
import { SidebarLink } from "./SidebarLink";

const appName = {
  first: "My",
  second: "Movies",
  third: "App"
}



// Component for the Sidebar
function Sidebar(): JSX.Element {
  return (
    <aside className="w-72 bg-zinc-900 py-6 p-6 h-screen sticky top-0">
      <AppLogo icon={<Clapperboard size={40} />} app_name={appName} href="/" />
      <div className="flex flex-col">
        <ul className="flex flex-col pl-2">
          <SidebarLink title="Discover" href="/" icon={<View size={20} />} />
          <SidebarLink title="Search" href="/search" icon={<Search size={20} />} />
          <SidebarLink title="Popular" href="/popular" icon={<ThumbsUp size={20} />} />
          <SidebarLink title="Top Rated" href="/top-rated" icon={<Vote size={20} />} />
          <SidebarLink title="Upcoming" href="/upcoming" icon={<CalendarClock size={20} />} />
          <SidebarLink title="Now Playing" href="/now-playing" icon={<Video size={20} />} />
          <SidebarLink title="Genres" href="/genres" icon={<Cherry size={20} />} />
        </ul>

      </div>
    </aside>
  )
}

export { Sidebar }
