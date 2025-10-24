import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../service/authContext';
import { register as authRegister } from '../service/AuthService';
import Footer from '../Components/Footer/Footer';
import '../Styles/LoginPages.css';

export default function RegisterPage() {
  const { user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  if (user) return <Navigate to="/encounters" replace />;

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (pw) => pw.length >= 6;

  const validateInputs = () => {
    let ok = true;
    setEmailError('');
    setPasswordError('');

    if (!email.trim()) {
      setEmailError('El email es requerido');
      ok = false;
    } else if (!validateEmail(email)) {
      setEmailError('Por favor, ingresa un email válido');
      ok = false;
    }

    if (!password) {
      setPasswordError('La contraseña es requerida');
      ok = false;
    } else if (!validatePassword(password)) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres');
      ok = false;
    } else if (password !== confirmPassword) {
      setPasswordError('Las contraseñas no coinciden');
      ok = false;
    }

    return ok;
  };

  const handleRegister = async () => {
    if (!validateInputs()) return;

    try {
      await authRegister(email, password);
    } catch (err) {
      console.error('Error al registrarse:', err.message);
      if (err.code === 'auth/email-already-in-use') {
        setEmailError('Este email ya está registrado');
      }
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-logo">
          <span className="brand-icon">❤️‍🔥</span>
          <span className="brand-name">Kindr</span>
        </div>

        <h1>Crear cuenta</h1>

        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');
            }}
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
              setPasswordError('');
            }}
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {passwordError && <span className="error-message">{passwordError}</span>}
        </div>

        <button className="btn-register" onClick={handleRegister}>
          Crear cuenta
        </button>

        <div className="divider">
          <span className="divider-line" aria-hidden></span>
          <span className="divider-or">O</span>
          <span className="divider-line" aria-hidden></span>
        </div>

        <p style={{ textAlign: 'center' }}>
          ¿Ya tienes cuenta? {' '}
          <Link to="/login" className="legal-link">Inicia sesión</Link>
        </p>
      </div>
      <Footer />
    </>
  );
}
