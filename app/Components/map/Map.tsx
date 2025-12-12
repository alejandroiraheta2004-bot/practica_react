import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

interface MapProps {
  src?: string;
  title?: string;
}

export function Map({ 
  src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.3857470163907!2d-89.21842368515316!3d13.692940190366897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633041f27c5c15%3A0x9e0c4b63e8f7f4b1!2sSan%20Salvador%2C%20El%20Salvador!5e0!3m2!1ses!2s!4v1234567890123!5m2!1ses!2s",
  title = "Mapa de ubicación"
}: MapProps) {
  return (
    <div className="map-container">
      <h3 className="contact-subtitle">
        <FaMapMarkerAlt className="inline mr-2" />
        Nuestra Ubicación
      </h3>
      <div className="map-wrapper">
        <iframe 
          src={src}
          width="100%"
          height="500"
          style={{ border: 0, borderRadius: '1rem' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
        ></iframe>
      </div>
      <div className="location-info">
        <p>
          <FaMapMarkerAlt className="inline mr-2" />
          Avenida Principal #123, Ciudad
        </p>
        <p>
          <FaClock className="inline mr-2" />
          Lun - Vie: 9:00 AM - 6:00 PM
        </p>
        <p>
          <FaClock className="inline mr-2" />
          Sábados: 10:00 AM - 2:00 PM
        </p>
      </div>
    </div>
  );
}
