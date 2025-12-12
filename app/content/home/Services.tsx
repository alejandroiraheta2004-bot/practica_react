import { Card } from "../../layouts/Card";
import { Section } from "../../layouts/Section";
import { SectionHeader } from "../../layouts/SectionHeader";
import { FaShippingFast, FaShieldAlt, FaCreditCard, FaGift, FaPhone, FaStar } from "react-icons/fa";

export function Services() {
  const services = [
    {
      icon: <FaShippingFast />,
      title: "Envío Rápido",
      description: "Entrega en 24-48 horas a todo el país. Seguimiento en tiempo real de tu pedido."
    },
    {
      icon: <FaShieldAlt />,
      title: "Garantía Total",
      description: "Garantía de satisfacción del 100%. Devoluciones sin complicaciones."
    },
    {
      icon: <FaCreditCard />,
      title: "Pago Seguro",
      description: "Múltiples métodos de pago. Transacciones protegidas y encriptadas."
    },
    {
      icon: <FaGift />,
      title: "Ofertas Exclusivas",
      description: "Descuentos especiales para clientes frecuentes. Promociones semanales."
    },
    {
      icon: <FaPhone />,
      title: "Soporte 24/7",
      description: "Atención al cliente disponible en todo momento. Resolvemos tus dudas rápidamente."
    },
    {
      icon: <FaStar />,
      title: "Calidad Premium",
      description: "Productos seleccionados cuidadosamente. Solo lo mejor para nuestros clientes."
    }
  ];

  return (
    <Section id="servicios">
      <SectionHeader 
        title="Nuestros Servicios" 
        description="Descubre todas las soluciones que tenemos para ti. Calidad, rapidez y atención personalizada en cada servicio." 
      />
      
      <div className="cards-grid">
        {services.map((service, index) => (
          <Card
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </Section>
  );
}
