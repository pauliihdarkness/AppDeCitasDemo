import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/terms" className="footer-link">Términos y Condiciones</Link>
          <span className="separator">•</span>
          <Link to="/privacy-policy" className="footer-link">Política de Privacidad</Link>
        </div>
        
        <div className="footer-copyright">
          <p>© {currentYear} Kindr. Todos los derechos reservados.</p>
        </div>

        <div className="footer-author">
          <p>
            Desarrollado con 💜 por{" "}
            <a
              href="https://github.com/pauladongonzalez"
              target="_blank"
              rel="noopener noreferrer"
              className="author-link"
            >
              Paula González
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
