import { HeroContent } from "../header/HeroContent";
import { Button } from "../form/Button";
import { motion } from "framer-motion";
import { FaShippingFast, FaShieldAlt } from "react-icons/fa";

export function Header() {
  return (
    <header className="header" id="inicio">
      <div className="header-overlay"></div>
      <motion.div 
        className="header-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Tu mejor Lugar de compras</h1>
        <p>Calidad garantizada y envío rápido</p>
        
        <div className="header-features">
          <div className="header-feature-item">
            <FaShippingFast className="header-feature-icon" />
            <span>Envío Gratis</span>
          </div>
          <div className="header-feature-item">
            <FaShieldAlt className="header-feature-icon" />
            <span>Compra Segura</span>
          </div>
        </div>

        <Button variant="primary">Explorar Productos</Button>
      </motion.div>
    </header>
  );
}
