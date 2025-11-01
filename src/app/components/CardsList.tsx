interface CardsListProps {
  children: React.ReactNode;
}

export default function CardsList({ children }: CardsListProps) {
  return <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 w-full">{children}</div>;
}
