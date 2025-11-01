import { CompassIcon } from "../styles/icons";
import Label from "./Label";
import Title from "./Title";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-white dark:bg-slate-900 z-50 border-b border-slate-200 dark:border-slate-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <section className="flex items-center gap-1 sm:gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sm:w-6 sm:h-6"
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
