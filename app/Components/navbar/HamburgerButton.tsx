interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  return (
    <button 
      className="hamburger-button"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
    </button>
  );
}
