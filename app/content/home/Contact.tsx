import { useState } from "react";
import { Section } from "../../layouts/Section";
import { SectionHeader } from "../../layouts/SectionHeader";
import { Input } from "../../Components/form/Input";
import { Textarea } from "../../Components/form/Textarea";
import { Button } from "../../Components/form/Button";
import { Map } from "../../Components/map/Map";
import { Alert } from "../../Components/ui/Alert";
import { motion } from "framer-motion";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    message: ""
  });

  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error" | "warning";
    text: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      lastName: "",
      email: "",
      message: ""
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "El apellido es obligatorio";
      isValid = false;
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "El apellido debe tener al menos 2 caracteres";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un correo electrónico válido";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log("Formulario válido:", formData);
      setSubmitMessage({
        type: "success",
        text: "¡Mensaje enviado correctamente! Te contactaremos pronto."
      });
      
      setFormData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });

      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    } else {
      setSubmitMessage({
        type: "error",
        text: "Por favor, corrige los errores del formulario."
      });
      setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }
  };

  return (
    <Section className="bg-gradient-to-b from-gray-950 to-gray-900" id="contacto">
      <SectionHeader 
        title="Encuéntranos" 
        description="Visítanos o contáctanos. Estamos aquí para ayudarte." 
      />
      
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Map />
        </motion.div>

        <motion.div 
          className="form-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="contact-subtitle">✉️ Contáctanos</h3>
          <p className="form-intro">
            Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos. Estamos aquí para ayudarte y ofrecerte la mejor experiencia de compra posible.
          </p>
          
          {submitMessage && (
            <Alert 
              type={submitMessage.type}
              message={submitMessage.text}
              onClose={() => setSubmitMessage(null)}
            />
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <Input
                label="Nombre"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
              />
              <Input
                label="Apellido"
                name="lastName"
                placeholder="Tu apellido"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
                required
              />
            </div>
            
            <Input
              label="Correo Electrónico"
              name="email"
              type="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
            
            <Input
              label="Teléfono (Opcional)"
              name="phone"
              type="tel"
              placeholder="+503 1234-5678"
              value={formData.phone}
              onChange={handleChange}
            />
            
            <Textarea
              label="Mensaje"
              name="message"
              placeholder="Escribe tu mensaje aquí..."
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              required
            />
            
            <Button type="submit">
              Enviar Mensaje
            </Button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
