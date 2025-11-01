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
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] transition-all duration-200 hover:shadow-md hover:scale-[1.02] ${className} cursor-pointer flex-shrink-0`}
      style={{
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
        borderRadius: "12px",
      }}
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
