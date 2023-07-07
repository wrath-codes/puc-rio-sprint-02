// Component that takes a title and renders a title
function Title({ title }: { title: string }) {
  return (
    <h1 className="text-lg font-bold text-center mb-2 text-zinc-300 h-16">
      {title}
    </h1>
  )
}

export { Title }