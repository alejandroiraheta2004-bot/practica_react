interface HeroContentProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function HeroContent({ title, description, children }: HeroContentProps) {
  return (
    <div className="header-content">
      <h1>{title}</h1>
      <p>{description}</p>
      {children && <div className="header-buttons">{children}</div>}
    </div>
  );
}
