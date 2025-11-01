interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return (
    <h1 className="text-lg sm:text-2xl font-bold truncate text-[var(--color-gray-900)]">{text}</h1>
  );
}