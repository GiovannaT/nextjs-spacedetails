import { CompassIcon } from "../styles/icons";
import Label from "./Label";
import Title from "./Title";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-white dark:bg-slate-900 z-50 border-b border-slate-200 dark:border-slate-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <section className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
          <Title text={title} />
        </section>
        <Label text="Em construção" color="yellow">
          <CompassIcon />
        </Label>

      </div>
    </header>
  );
}
