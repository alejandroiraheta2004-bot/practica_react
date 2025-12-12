import { motion } from "framer-motion";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export function Card({ icon, title, description, buttonText = "Más información", onButtonClick }: CardProps) {
  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="card-button" onClick={onButtonClick}>
        {buttonText}
      </button>
    </motion.div>
  );
}
