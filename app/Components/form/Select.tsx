import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

interface SelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  error?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
}

export function Select({
  label,
  name,
  value,
  onChange,
  options,
  error,
  required = false,
  disabled = false,
  placeholder = "Selecciona una opción"
}: SelectProps) {
  return (
    <motion.div 
      className="input-group"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <label htmlFor={name} className="flex items-center gap-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`
            form-input 
            ${error ? "border-red-500 focus:ring-red-500" : ""} 
            ${disabled ? "opacity-50 cursor-not-allowed bg-gray-100 dark:bg-gray-800/50" : "cursor-pointer hover:border-indigo-400 dark:hover:border-indigo-500"}
            transition-all duration-300
          `}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className={`absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none transition-opacity ${disabled ? 'opacity-30' : 'opacity-70'}`}>
          <FaChevronDown className="text-indigo-600 dark:text-indigo-400" />
        </div>
      </div>
      {error && (
        <motion.span 
          className="error-message"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          {error}
        </motion.span>
      )}
      {disabled && !error && (
        <motion.span
          className="text-xs text-gray-500 dark:text-gray-400 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {placeholder}
        </motion.span>
      )}
    </motion.div>
  );
}
