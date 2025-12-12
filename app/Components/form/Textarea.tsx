interface TextareaProps {
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  rows?: number;
}

export function Textarea({ 
  label, 
  name, 
  placeholder, 
  value, 
  onChange, 
  error, 
  required = false,
  rows = 5
}: TextareaProps) {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label} {required && <span className="required">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={error ? 'error-input' : ''}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}
