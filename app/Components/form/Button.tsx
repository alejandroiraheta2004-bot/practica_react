interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}

export function Button({ 
  children, 
  type = "button", 
  onClick, 
  className = "",
  variant = "primary"
}: ButtonProps) {
  const variantClasses = {
    primary: "submit-button",
    secondary: "btn-secondary"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
