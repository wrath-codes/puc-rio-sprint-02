interface ICard {
  children: React.ReactNode;
}

// Component that takes any children and renders a card
function Card({ children }: ICard): JSX.Element {
  return (
    <div className="bg-zinc-800 rounded-lg p-5 flex-1">
      {children}
    </div>
  )
}

export { Card }