interface HeroImageProps {
  src: string;
  alt: string;
}

export function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className="header-image">
      <img src={src} alt={alt} />
    </div>
  );
}
