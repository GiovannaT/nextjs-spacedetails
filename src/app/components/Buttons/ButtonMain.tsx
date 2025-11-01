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
    "font-medium rounded-lg bg-white transition-all duration-200 ease-in-out focus:outline-none border border-[var(--color-gray-300)] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variant} ${sizeStyles[size]} ${
        disabled ? disabledStyles : ""
      } ${className} cursor-pointer flex items-center gap-2`}
    >
      {children}
      {label && (
        <span className="text-sm text-[var(--color-gray-700)]">{label}</span>
      )}
    </button>
  );
}
