interface NavMenuItem {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

interface NavMenuProps {
  items: NavMenuItem[];
  isOpen: boolean;
  onItemClick: () => void;
}

export function NavMenu({ items, isOpen, onItemClick }: NavMenuProps) {
  return (
    <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
      {items.map((item, index) => (
        <li key={index} className="navbaritem">
          <a className="navbar-link" href={item.href} onClick={onItemClick}>
            {item.icon && <span className="navbar-link-icon">{item.icon}</span>}
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
