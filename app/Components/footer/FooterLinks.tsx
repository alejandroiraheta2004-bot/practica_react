interface FooterLink {
  href: string;
  label: string;
}

interface FooterLinksProps {
  links: FooterLink[];
}

export function FooterLinks({ links }: FooterLinksProps) {
  return (
    <ul className="footer-links">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  );
}
