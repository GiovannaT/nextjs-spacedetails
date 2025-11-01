interface ButtonMainProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  label?: string;
  type?: "button" | "submit" | "reset";
}

export default function ButtonMain({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  label = "",
  type = "button",
}: ButtonMainProps) {
  const baseStyles =
    "font-medium rounded-lg bg-white dark:bg-slate-800 transition-all duration-200 ease-in-out focus:outline-none border border-[var(--color-gray-300)] dark:border-slate-700 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] dark:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)]";

  const sizeStyles = {
    sm: "px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm",
    md: "px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base",
    lg: "px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variant} ${sizeStyles[size]} ${
        disabled ? disabledStyles : ""
      } ${className} cursor-pointer flex items-center gap-1 sm:gap-2 justify-center`}
    >
      {children}
      {label && (
        <span className="text-xs sm:text-sm text-[var(--color-gray-700)] whitespace-nowrap">{label}</span>
      )}
    </button>
  );
}
