interface SpaceLayoutProps {
    children: React.ReactNode;
  }
  
  export default function SpaceLayout({ children }: SpaceLayoutProps) {
    return (
      <div className="pt-8 pr-[150px] pb-16 pl-[70px] bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        {children}
      </div>
    );
  }
  