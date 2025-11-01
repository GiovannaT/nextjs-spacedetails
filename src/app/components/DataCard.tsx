interface DataCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
}

export default function DataCard({ title, value, icon }: DataCardProps) {
  return (
    <div className="flex flex-col gap-2 bg-white border border-gray-300 rounded-lg p-3 sm:p-4 flex-1 min-w-[150px] sm:min-w-[200px]">
      <div className="flex items-center gap-2 text-[var(--color-gray-600)]">
        {icon}
        <h3 className="text-xs sm:text-sm font-medium text-[var(--color-gray-600)]">
          {title}
        </h3>
      </div>
      <p className="text-lg sm:text-xl font-bold text-[var(--color-gray-900)]">
        {value.toLocaleString()}
      </p>
    </div>
  );
}
