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
    <Image
      src={src}
      alt={alt}
      width={width}
      loading="lazy"
      height={height}
      className={className}
      style={{ width: "100%", height: `${height}px`, objectFit: "cover", objectPosition: "left" }}
    />
  );
}
