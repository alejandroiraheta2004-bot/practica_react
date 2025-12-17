import { useState } from "react";
import { Logo } from "../navbar/Logo";
import { HamburgerButton } from "../navbar/HamburgerButton";
import { NavMenu } from "../navbar/NavMenu";
import { FaShoppingBag, FaHome, FaCog, FaBlog, FaEnvelope, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { href: "#inicio", label: "Inicio", icon: <FaHome /> },
    { href: "#servicios", label: "Servicios", icon: <FaCog /> },
    { href: "#blog", label: "Blog", icon: <FaBlog /> },
    { href: "#contacto", label: "Contacto", icon: <FaEnvelope /> },
    { href: "#nosotros", label: "Nosotros", icon: <FaUsers /> }
  ];

  return (
    <motion.div 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar-container">
        <Logo icon={<FaShoppingBag />} title="Mi Tienda" />
        <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />
        <NavMenu items={menuItems} isOpen={isOpen} onItemClick={toggleMenu} />
      </div>
    </motion.div>
  );
}
