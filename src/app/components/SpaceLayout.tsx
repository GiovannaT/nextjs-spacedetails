interface SpaceLayoutProps {
    children: React.ReactNode;
  }
  
  export default function SpaceLayout({ children }: SpaceLayoutProps) {
    return (
      <div className="px-40 py-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        {children}
      </div>
    );
  }
  