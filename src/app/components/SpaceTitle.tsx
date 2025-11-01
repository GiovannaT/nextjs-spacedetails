import { MarkerPin01Icon } from "../styles/icons";

interface SpaceTitleProps {
  title: string;
  address: string;
}

export default function SpaceTitle({ title, address }: SpaceTitleProps) {
  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div
        className="flex items-center gap-1  text-xs"
        style={{ color: "var(--color-gray-600)" }}
      >
        <MarkerPin01Icon className="w-4 h-4" />
        <p className="text-xs">{address}</p>
      </div>
    </section>
  );
}
