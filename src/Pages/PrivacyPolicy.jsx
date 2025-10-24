import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Legal.css';

export default function PrivacyPolicy() {
  return (
    <div className="legal-container">
      <h1>Política de Privacidad</h1>
      
      <div className="legal-content">
        <section>
          <h2>1. Recopilación de información</h2>
          <p>
            Recopilamos información que usted nos proporciona directamente al registrarse y usar nuestra aplicación.
            Esto incluye su nombre, dirección de correo electrónico, y otra información de perfil.
          </p>
        </section>

        <section>
          <h2>2. Uso de la información</h2>
          <p>
            Utilizamos su información para:
          </p>
          <ul>
            <li>Proporcionar y mejorar nuestros servicios</li>
            <li>Personalizar su experiencia</li>
            <li>Comunicarnos con usted</li>
            <li>Garantizar la seguridad de la plataforma</li>
          </ul>
        </section>

        <section>
          <h2>3. Protección de datos</h2>
          <p>
            Implementamos medidas de seguridad para proteger su información personal.
            Utilizamos encriptación y seguimos las mejores prácticas de la industria.
          </p>
        </section>

        <section>
          <h2>4. Compartir información</h2>
          <p>
            No vendemos ni compartimos su información personal con terceros, excepto cuando:
          </p>
          <ul>
            <li>Usted nos da su consentimiento explícito</li>
            <li>Es necesario para proporcionar el servicio</li>
            <li>Lo requiere la ley</li>
          </ul>
        </section>

        <section>
          <h2>5. Sus derechos</h2>
          <p>
            Usted tiene derecho a acceder, corregir o eliminar su información personal en cualquier momento.
            También puede optar por no recibir comunicaciones de marketing.
          </p>
        </section>
      </div>

      <div className="legal-footer">
        <Link to="/" className="back-button">Volver al inicio de sesión</Link>
      </div>
    </div>
  );
}