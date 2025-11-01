import Image from "next/image";

interface ImageHeaderProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ImageHeader({
  src,
  alt,
  width = 1500,
  height = 240,
  className = "",
}: ImageHeaderProps) {
  return (
    <div className="w-full h-[180px] sm:h-[220px] md:h-[240px] relative overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={width}
        loading="lazy"
        height={height}
        className={`object-cover object-left ${className}`}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
