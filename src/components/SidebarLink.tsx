import { Link, useLocation } from "wouter";

import { ReactNode } from "react";

interface ISidebarLink {
  title: string;
  href: string;
  icon: ReactNode;
}

function SidebarLink({ title, href, icon }: ISidebarLink): JSX.Element {
  const [location] = useLocation()
  return (
    <>
      <li className={`flex items-center justify-start w-full rounded-md h-12 px-2 py-2 font-semibold text-xl ${location === href ? "text-amber-300" : 'text-zinc-300'} hover:bg-zinc-800/50 hover:text-zinc-700`}>
        <Link href={href}>
          <a className="flex items-center justify-start w-full h-full"> <span className="mr-4">
            {icon}
          </span>
            {title}
          </a>
        </Link>
      </li>
    </>
  )
}

export { SidebarLink }