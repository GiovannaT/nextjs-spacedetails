interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  color: string;
  children: React.ReactNode;
}

const colorMap: Record<string, string> = {
  yellow: "bg-yellow-200 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  gray: "bg-gray-200 text-gray-700 dark:bg-slate-700 dark:text-slate-200",
};

export default function Label({ text, color, children, ...props }: LabelProps) {
  const colorClasses = colorMap[color] || colorMap.gray;

  return (
    <span className={`px-2 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1 sm:gap-2 rounded-full text-xs sm:text-sm font-medium ${colorClasses} whitespace-nowrap`} {...props}>
      <span className="hidden sm:inline">{text}</span>
      <span className="sm:hidden">{text.slice(0, 2)}</span>
      {children}
    </span>
  );
}
