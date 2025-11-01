interface SpaceLayoutProps {
    children: React.ReactNode;
  }
  
export default function SpaceLayout({ children }: SpaceLayoutProps) {
  return (
    <div className="flex flex-col gap-2 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 w-full py-4 sm:py-6 md:py-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      {children}
    </div>
  );
}
  