import { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { useAuth } from "../service/authContext";
import { login, register, loginWithGoogle, logAuthFacebook } from "../service/AuthService";
import "../Styles/LoginPages.css";
import Footer from "../Components/Footer/Footer";

// Funciones de validación
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  return password.length >= 6;
};

export default function Login() {
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  if (user) return <Navigate to="/encounters" replace />;

  const validateInputs = () => {
    let isValid = true;
    setEmailError("");
    setPasswordError("");

    if (!email.trim()) {
      setEmailError("El email es requerido");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Por favor, ingresa un email válido");
      isValid = false;
    }

    if (!password) {
      setPasswordError("La contraseña es requerida");
      isValid = false;
    } else if (!validatePassword(password)) {
      setPasswordError("La contraseña debe tener al menos 6 caracteres");
      isValid = false;
    }

    return isValid;
  };

  const handleLogin = async () => {
    if (!validateInputs()) return;

    try {
      await login(email, password);
    } catch (err) {
      console.error("Error al iniciar sesión:", err.message);
      if (err.code === "auth/wrong-password") {
        setPasswordError("Contraseña incorrecta");
      } else if (err.code === "auth/user-not-found") {
        setEmailError("No existe una cuenta con este email");
      }
    }
  };

  const handleRegister = async () => {
    if (!validateInputs()) return;

    try {
      await register(email, password);
    } catch (err) {
      console.error("Error al registrarse:", err.message);
      if (err.code === "auth/email-already-in-use") {
        setEmailError("Este email ya está registrado");
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
    } catch (err) {
      console.error("Error al iniciar sesión con Google:", err.message);
    }
  };

  const handlefacebookLogin = async () => {
    try {
      await logAuthFacebook();
    } catch (err) {
      console.error("Error al iniciar sesión con facebook:", err.message);
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-logo">
          <span className="brand-icon">❤️‍🔥</span>
          <span className="brand-name">Kindr</span>
        </div>
        <h1>Iniciar Sesión</h1>

        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            onKeyDown={handleKeyDown}
            style={{ borderColor: emailError ? "#ff4444" : undefined }}
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError("");
            }}
            onKeyDown={handleKeyDown}
            style={{ borderColor: passwordError ? "#ff4444" : undefined }}
          />
          {passwordError && <span className="error-message">{passwordError}</span>}
        </div>

        <button className="btn-primary" onClick={handleLogin}>
          Entrar
        </button>
        <p style={{ textAlign: 'center' }}>
          ¿Aún no tienes cuenta? {' '}
          <Link to="/register" className="legal-link">Crear cuenta</Link>
        </p>

        <div className="divider">
          <span className="divider-line" aria-hidden></span>
          <span className="divider-or">OR</span>
          <span className="divider-line" aria-hidden></span>
        </div>

        <div className="social-buttons">
          <button className="btn-social" onClick={handleGoogleLogin}>
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              style={{ width: "20px", height: "20px" }}
            />
            Iniciar sesión con Google
          </button>
          <button className="btn-social" onClick={handlefacebookLogin}>
            <img
              src="https://www.facebook.com/favicon.ico"
              alt="Facebook"
              style={{ width: "20px", height: "20px" }}
            />
            Iniciar sesión con Facebook
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
