interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section className={`py-20 px-5 text-white ${className}`} id={id}>
      {children}
    </section>
  );
}
