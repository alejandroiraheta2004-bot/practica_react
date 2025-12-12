interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

export function Input({ 
  label, 
  name, 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  error, 
  required = false 
}: InputProps) {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label} {required && <span className="required">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={error ? 'error-input' : ''}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}
