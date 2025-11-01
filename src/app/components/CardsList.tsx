interface CardsListProps {
  children: React.ReactNode;
}

export default function CardsList({ children }: CardsListProps) {
  return <div className="flex flex-row gap-1">{children}</div>;
}
