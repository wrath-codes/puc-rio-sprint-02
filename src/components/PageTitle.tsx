
interface IPageTitle {
  title: string;
}

// Component that takes a title and renders a title
function PageTitle({ title }: IPageTitle): JSX.Element {
  return (
    <h1 className="text-3xl font-bold text-center mb-5 text-zinc-300 sticky top-0 bg-zinc-950 py-2 border-b border-zinc-800">
      {title}
    </h1>
  )
}

export { PageTitle }