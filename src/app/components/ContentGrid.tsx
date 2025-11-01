import React from "react";

interface ContentGridProps {
  title?: string;
  children: React.ReactNode;
}

export default function ContentGrid({
  title = "",
  children,
}: ContentGridProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {title && (
        <h2 className="text-base font-medium text-[var(--color-gray-900)]">
          {title}
        </h2>
      )}
      <div className="flex flex-row gap-2 sm:gap-3 flex-wrap justify-start">{children}</div>
    </div>
  );
}
