import { useState, useEffect } from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <CustomLink to="/" className="brand">
          <span className="brand-icon">❤️‍🔥</span>
          <span className="brand-name">Kindr</span>
        </CustomLink>

        <div className="nav-links">
          <a href="#hero" id="nav-home" className="nav-link">Inicio</a>
          <a href="#about" id="nav-about" className="nav-link">Nosotros</a>
          <a href="#features" id="nav-features" className="nav-link">Características</a>
        </div>

        <div className="nav-auth">
          <span className="nav-text">¿Tienes una cuenta?</span>
          <CustomLink to="/login">
            <button className="btn-sign-in">
              Iniciar Sesión
            </button>
          </CustomLink>
        </div>
      </div>
    </nav>
  );
}


export default Navbar
