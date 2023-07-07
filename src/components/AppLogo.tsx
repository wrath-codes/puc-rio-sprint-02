import { Link } from "wouter";
import { ReactNode } from "react";

interface IAppLogo {
  icon: ReactNode;
  app_name: {
    first: string;
    second: string;
    third: string;
  }
  href: string;
}

// Component for the app logo
function AppLogo({ icon, app_name, href }: IAppLogo): JSX.Element {
  return (
    <Link href={href}>
      <a className="text-2xl font-bold text-center mb-5 text-zinc-300 inline-flex items-center">
        <div className="text-zinc-300 mr-2">
          {icon}
        </div>
        <div className="text-amber-300">
          {app_name.first}
        </div>
        {app_name.second}
        <div className="text-amber-300">
          {app_name.third}
        </div>
      </a>
    </Link>
  )
}

export { AppLogo }