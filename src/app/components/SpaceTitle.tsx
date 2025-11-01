import { CalendarIcon, MarkerPin01Icon } from "../styles/icons";
import ButtonMain from "./Buttons/ButtonMain";

interface SpaceTitleProps {
  title: string;
  address: string;
  date?: string;
}

export default function SpaceTitle({ title, address, date }: SpaceTitleProps) {
  return (
    <section className="flex flex-row gap-2 justify-between mb-4">
      <aside>
        <h1 className="text-2xl font-bold">{title}</h1>
        <div
          className="flex items-center gap-1 text-xs text-[var(--color-gray-600)]"
        >
          <MarkerPin01Icon className="w-4 h-4 text-[var(--color-gray-600)]" />
          <p className="text-xs text-[var(--color-gray-600)]">{address}</p>
        </div>
      </aside>
      <aside>
        <ButtonMain variant="primary" label={date || ""}>
          <CalendarIcon className="w-4 h-4 text-[var(--color-gray-700)]" />
        </ButtonMain>
      </aside>
    </section>
  );
}
