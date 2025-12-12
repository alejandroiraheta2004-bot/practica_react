interface LogoProps {
  icon: React.ReactNode;
  title: string;
}

export function Logo({ icon, title }: LogoProps) {
  return (
    <div className="navbar-brand">
      <div className="navbar-logo">
        {icon}
      </div>
      <span className="navbar-title">{title}</span>
    </div>
  );
}
