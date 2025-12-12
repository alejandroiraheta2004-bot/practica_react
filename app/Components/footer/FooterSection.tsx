interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

export function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div className="footer-section">
      <h4 className="footer-title">{title}</h4>
      {children}
    </div>
  );
}
