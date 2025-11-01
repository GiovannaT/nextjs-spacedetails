interface DataCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
}

export default function DataCard({ title, value, icon }: DataCardProps) {
  return (
    <div className="flex flex-col  gap-2 border border-gray-300 rounded-lg p-4">
      <div
        className="flex items-center gap-2"
        style={{ color: "var(--color-gray-600)" }}
      >
        {icon}
        <h3
          className="text-sm font-medium"
          style={{ color: "var(--color-gray-600)" }}
        >
          {title}
        </h3>
      </div>
      <p
        className="text-sm text-gray-500 font-bold"
        style={{ color: "var(--color-gray-900)" }}
      >
        {value.toLocaleString()}
      </p>
    </div>
  );
}
