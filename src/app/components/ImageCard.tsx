import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  onClick?: () => void;
  className?: string;
  size?: "default" | "small";
}

export default function ImageCard({
  src,
  alt,
  onClick,
  className = "",
  size = "default",
}: ImageCardProps) {
  const dimensions =
    size === "small" ? { width: 70, height: 70 } : { width: 170, height: 134 };
  
  const sizeClasses = size === "small" 
    ? "w-[60px] h-[60px] sm:w-[70px] sm:h-[70px]"
    : "w-[140px] h-[110px] sm:w-[170px] sm:h-[134px]";
  
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] dark:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.3)] transition-all duration-200 hover:shadow-md hover:scale-[1.02] border border-transparent dark:border-slate-700 ${className} ${sizeClasses} cursor-pointer flex-shrink-0 rounded-xl`}
    >
      <Image
        src={src}
        alt={alt}
        width={dimensions.width}
        height={dimensions.height}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </button>
  );
}
