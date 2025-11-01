interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  color: string;
  children: React.ReactNode;
}

const colorMap: Record<string, string> = {
  yellow: "bg-yellow-200 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-200",
  gray: "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200",
};

export default function Label({ text, color, children, ...props }: LabelProps) {
  const colorClasses = colorMap[color] || colorMap.gray;

  return (
    <span className={`px-4 py-2 flex items-center gap-2 rounded-full text-sm font-medium ${colorClasses}`} {...props}>
      {text}
      {children}
    </span>
  );
}
