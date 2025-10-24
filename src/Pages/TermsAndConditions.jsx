import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Legal.css';

export default function TermsAndConditions() {
  return (
    <div className="legal-container">
      <h1>Términos y Condiciones</h1>
      
      <div className="legal-content">
        <section>
          <h2>1. Aceptación de los términos</h2>
          <p>
            Al acceder y utilizar esta aplicación, usted acepta estar sujeto a estos términos y condiciones de uso.
            Si no está de acuerdo con alguno de estos términos, le pedimos que no utilice la aplicación.
          </p>
        </section>

        <section>
          <h2>2. Uso del servicio</h2>
          <p>
            Nuestro servicio está diseñado para usuarios mayores de 18 años. Al registrarse, usted confirma que cumple
            con este requisito de edad. La información proporcionada debe ser verdadera y precisa.
          </p>
        </section>

        <section>
          <h2>3. Conducta del usuario</h2>
          <p>
            Los usuarios deben comportarse de manera respetuosa y seguir las normas de la comunidad. 
            No se permite contenido ofensivo, discriminatorio o inapropiado.
          </p>
        </section>

        <section>
          <h2>4. Privacidad y datos</h2>
          <p>
            Protegemos su privacidad según nuestra política de privacidad. Para más detalles, consulte nuestra{' '}
            <Link to="/privacy-policy">Política de Privacidad</Link>.
          </p>
        </section>

        <section>
          <h2>5. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor
            inmediatamente después de su publicación.
          </p>
        </section>
      </div>

      <div className="legal-footer">
        <Link to="/" className="back-button">Volver al inicio de sesión</Link>
      </div>
    </div>
  );
}