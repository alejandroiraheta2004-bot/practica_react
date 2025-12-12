interface SocialLink {
  href: string;
  label: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="footer-social">
      {links.map((link, index) => (
        <a key={index} href={link.href} className="social-link">
          {link.label}
        </a>
      ))}
    </div>
  );
}
