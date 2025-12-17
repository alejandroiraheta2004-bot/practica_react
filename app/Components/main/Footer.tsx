import { FooterSection } from "../footer/FooterSection";
import { FooterLinks } from "../footer/FooterLinks";
import { SocialLinks } from "../footer/SocialLinks";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export function Footer() {
  const quickLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#blog", label: "Blog" },
    { href: "#contacto", label: "Contacto" },
    { href: "#nosotros", label: "Términos y Condiciones" }
  ];

  const socialLinks = [
    { href: "#", label: "Facebook" },
    { href: "#", label: "Twitter" },
    { href: "#", label: "Instagram" }
  ];

  return (
    <footer className="footer">
      <motion.div 
        className="footer-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <FooterSection title="Sobre Nosotros">
          <p className="footer-text">
            Somos tu mejor opción para compras online. Calidad y confianza desde 2024.
          </p>
        </FooterSection>
        
        <FooterSection title="Enlaces Rápidos">
          <FooterLinks links={quickLinks} />
        </FooterSection>
        
        <FooterSection title="Contacto">
          <p className="footer-text">
            <FaEnvelope className="inline mr-2" /> info@miempresa.com
          </p>
          <p className="footer-text">
            <FaPhone className="inline mr-2" /> +503 1234-5678
          </p>
          <p className="footer-text">
            <FaMapMarkerAlt className="inline mr-2" /> San Salvador, El Salvador
          </p>
        </FooterSection>
        
        <FooterSection title="Síguenos">
          <SocialLinks links={socialLinks} />
        </FooterSection>
      </motion.div>
      
      <div className="footer-bottom">
        <p>© 2024 Mi Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
