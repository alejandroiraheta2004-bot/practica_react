import { useState } from "react";

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

  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error cuando el usuario empiece a escribir
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

    // Validar nombre
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
      isValid = false;
    }

    // Validar apellido
    if (!formData.lastName.trim()) {
      newErrors.lastName = "El apellido es obligatorio";
      isValid = false;
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "El apellido debe tener al menos 2 caracteres";
      isValid = false;
    }

    // Validar email
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un correo electrónico válido";
      isValid = false;
    }

    // Validar mensaje
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
      // Aquí puedes enviar los datos al servidor
      console.log("Formulario válido:", formData);
      setSubmitMessage("✅ ¡Mensaje enviado correctamente! Te contactaremos pronto.");
      
      // Limpiar formulario
      setFormData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });

      // Limpiar mensaje después de 5 segundos
      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    } else {
      setSubmitMessage("❌ Por favor, corrige los errores del formulario.");
      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    }
  };

  return (
    <section className="contact-section" id="contacto">
      <h2 className="section-titulo">Encuéntranos</h2>
      <p className="section-intro">Visítanos o contáctanos. Estamos aquí para ayudarte.</p>
      
      <div className="contact-container">
        {/* Mapa */}
        <div className="map-container">
          <h3 className="contact-subtitle">📍 Nuestra Ubicación</h3>
          <div className="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.3857470163907!2d-89.21842368515316!3d13.692940190366897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633041f27c5c15%3A0x9e0c4b63e8f7f4b1!2sSan%20Salvador%2C%20El%20Salvador!5e0!3m2!1ses!2s!4v1234567890123!5m2!1ses!2s"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '1rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="location-info">
            <p>📍 Avenida Principal #123, Ciudad</p>
            <p>🕒 Lun - Vie: 9:00 AM - 6:00 PM</p>
            <p>🕒 Sábados: 10:00 AM - 2:00 PM</p>
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div className="form-container">
          <h3 className="contact-subtitle">✉️ Contáctanos</h3>
          <p className="form-intro">
            Si tienes alguna pregunta o necesitas más información, no dudes en contactarnos. Estamos aquí para ayudarte y ofrecerte la mejor experiencia de compra posible.
          </p>
          
          {submitMessage && (
            <div className={`submit-message ${submitMessage.includes('✅') ? 'success' : 'error'}`}>
              {submitMessage}
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  Nombre <span className="required">*</span>
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error-input' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">
                  Apellido <span className="required">*</span>
                </label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  placeholder="Tu apellido"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? 'error-input' : ''}
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">
                Correo Electrónico <span className="required">*</span>
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error-input' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Teléfono (Opcional)</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="+503 1234-5678"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">
                Mensaje <span className="required">*</span>
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows={5} 
                placeholder="Escribe tu mensaje aquí..."
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error-input' : ''}
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
            
            <button type="submit" className="submit-button">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
