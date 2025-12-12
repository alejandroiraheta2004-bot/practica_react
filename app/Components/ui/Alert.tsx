import { FaCheckCircle, FaExclamationCircle, FaTimesCircle } from "react-icons/fa";

interface AlertProps {
  type: "success" | "error" | "warning";
  message: string;
  onClose?: () => void;
}

export function Alert({ type, message, onClose }: AlertProps) {
  const styles = {
    success: {
      container: "bg-green-50 dark:bg-green-900/20 border-green-500 text-green-700 dark:text-green-400",
      icon: <FaCheckCircle className="text-green-500" />
    },
    error: {
      container: "bg-red-50 dark:bg-red-900/20 border-red-500 text-red-700 dark:text-red-400",
      icon: <FaTimesCircle className="text-red-500" />
    },
    warning: {
      container: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500 text-yellow-700 dark:text-yellow-400",
      icon: <FaExclamationCircle className="text-yellow-500" />
    }
  };

  const currentStyle = styles[type];

  return (
    <div className={`alert-custom ${currentStyle.container}`}>
      <div className="alert-content">
        <div className="alert-icon">
          {currentStyle.icon}
        </div>
        <p className="alert-message">{message}</p>
      </div>
      {onClose && (
        <button 
          onClick={onClose}
          className="alert-close"
          aria-label="Cerrar alerta"
        >
          ×
        </button>
      )}
    </div>
  );
}
