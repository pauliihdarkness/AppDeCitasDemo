import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/HomePage.css';

const HomePage = () => {
  return (
    <main className="homepage">
      
      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <h1>Kindr</h1>
          <p className="tagline">Donde las conexiones genuinas florecen</p>
          <p className="subtitle">
            Descubre relaciones auténticas basadas en valores compartidos y conexiones reales
          </p>
          <Link to="/register" className="cta-button">
            Comienza tu historia
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-content">
          <h2>Sobre Nosotros</h2>
          <div className="about-grid">
            <div className="about-text">
              <h3>Nuestra Historia</h3>
              <p>
                Kindr nació con una misión clara: transformar la forma en que las personas
                se conectan en la era digital. Creemos que las relaciones significativas
                se construyen sobre valores compartidos y conexiones auténticas.
              </p>
              <div className="values-list">
                <div className="value-item">
                  <span className="value-icon">🤝</span>
                  <h4>Autenticidad</h4>
                  <p>Promovemos relaciones genuinas y honestas</p>
                </div>
                <div className="value-item">
                  <span className="value-icon">🌱</span>
                  <h4>Crecimiento</h4>
                  <p>Ayudamos a las personas a desarrollar conexiones significativas</p>
                </div>
                <div className="value-item">
                  <span className="value-icon">🎯</span>
                  <h4>Propósito</h4>
                  <p>Facilitamos encuentros con sentido y compatibilidad real</p>
                </div>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <h3>2M+</h3>
                <p>Usuarios activos</p>
              </div>
              <div className="stat-card">
                <h3>500K</h3>
                <p>Parejas felices</p>
              </div>
              <div className="stat-card">
                <h3>98%</h3>
                <p>Satisfacción</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2>Características que nos Hacen Únicos</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💝</div>
            <h3>Conexiones Auténticas</h3>
            <p>Algoritmo de compatibilidad basado en valores y personalidad real</p>
            <ul className="feature-list">
              <li>Test de personalidad</li>
              <li>Matching basado en valores</li>
              <li>Perfiles verificados</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Seguridad Primero</h3>
            <p>Verificación de perfiles y protección de datos avanzada</p>
            <ul className="feature-list">
              <li>Verificación por ID</li>
              <li>Cifrado de extremo a extremo</li>
              <li>Moderación 24/7</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Matches Inteligentes</h3>
            <p>Sugerencias personalizadas basadas en tus intereses</p>
            <ul className="feature-list">
              <li>IA de compatibilidad</li>
              <li>Filtros avanzados</li>
              <li>Recomendaciones diarias</li>
            </ul>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Experiencias Únicas</h3>
            <p>Eventos exclusivos y actividades para conocer personas afines</p>
            <ul className="feature-list">
              <li>Eventos temáticos</li>
              <li>Actividades grupales</li>
              <li>Citas virtuales</li>
            </ul>
          </div>
        </div>
        <div className="features-extra">
          <div className="feature-highlight">
            <div className="highlight-content">
              <h3>Chat Inteligente</h3>
              <p>Nuestro sistema de chat incluye sugerencias de conversación y hielo-rompedores personalizados</p>
            </div>
          </div>
          <div className="feature-highlight">
            <div className="highlight-content">
              <h3>Eventos Locales</h3>
              <p>Organiza y participa en eventos de tu ciudad para conocer personas con intereses similares</p>
            </div>
          </div>
          <div className="feature-highlight">
            <div className="highlight-content">
              <h3>Privacidad Avanzada</h3>
              <p>Control total sobre tu visibilidad y la información que compartes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics">
        <div className="stat-container">
          <div className="stat-item">
            <h3>2M+</h3>
            <p>Usuarios activos</p>
          </div>
          <div className="stat-item">
            <h3>500K</h3>
            <p>Parejas felices</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Matches exitosos</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Historias de Éxito</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Gracias a Kindr encontré a mi alma gemela. La app realmente entiende lo que buscas en una relación."</p>
              <div className="testimonial-author">- María y Juan</div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"La mejor app de citas que he probado. Las conexiones son mucho más significativas y reales."</p>
              <div className="testimonial-author">- Carlos</div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Me encanta cómo Kindr prioriza la compatibilidad real sobre las apariencias superficiales."</p>
              <div className="testimonial-author">- Ana</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Encuentra tu conexión especial hoy</h2>
        <p>Únete a nuestra comunidad y descubre una nueva forma de conocer personas especiales</p>
        <Link to="/register" className="cta-button">
          Crear cuenta gratis
        </Link>
      </section>

      {/* App Features Preview */}
      <section className="app-features">
        <div className="features-preview">
          <div className="feature-preview-item">
            <div className="feature-icon" aria-hidden>
              {/* Shield check for verified profiles */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 2L20 5V11C20 16 16 21 12 22C8 21 4 16 4 11V5L12 2Z" fill="white" opacity="0.15" />
                <path d="M9.5 12.5L11.25 14.25L14.5 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Perfiles Verificados</h3>
            <p>Todos los perfiles son verificados para garantizar conexiones auténticas</p>
          </div>
          <div className="feature-preview-item">
            <div className="feature-icon" aria-hidden>
              {/* Lock/chat icon for secure chat */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="3" y="7" width="18" height="11" rx="2" stroke="white" strokeWidth="1.5" />
                <path d="M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 21L12 17L17 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Chat Seguro</h3>
            <p>Comunicación encriptada y herramientas de moderación avanzadas</p>
          </div>
          <div className="feature-preview-item">
            <div className="feature-icon" aria-hidden>
              {/* Calendar/party icon for events */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="white" strokeWidth="1.5" />
                <path d="M16 2V6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 2V6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 10H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="8" cy="15" r="1.5" fill="white" />
                <circle cx="12" cy="15" r="1.5" fill="white" />
                <circle cx="16" cy="15" r="1.5" fill="white" />
              </svg>
            </div>
            <h3>Eventos Exclusivos</h3>
            <p>Participa en eventos locales para conocer personas con intereses similares</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
