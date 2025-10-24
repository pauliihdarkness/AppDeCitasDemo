# Kindr — App de Citas (AppDeCitasConFirebase)

Descripción
-----------
Kindr es una aplicación de citas moderna creada con React y Firebase. Esta aplicación proporciona una landing page, registro e inicio de sesión con correo/contraseña y proveedores sociales (Google, Facebook), un dashboard protegido y páginas legales (Términos y Condiciones / Política de Privacidad).

Este repositorio contiene la interfaz (frontend) y la configuración para conectar con Firebase Authentication.

Estado
------
Proyecto en desarrollo — contiene componentes de UI, rutas y autenticación básica con Firebase. Está pensado como plantilla o MVP para una app de citas.

Tecnologías
-----------
- React 19
- Vite
- Firebase (Authentication)
- React Router
- CSS modular (carpetas `Styles/` por página/componente)

Requisitos
----------
- Node.js (recomendado >= 18)
- npm o yarn
- Cuenta de Firebase (para obtener las credenciales)

Instalación y ejecución (Windows PowerShell)
-------------------------------------------
1. Clonar el repositorio

```powershell
git clone https://github.com/pauliihdarkness/AppDeCitasDemo.git
cd AppDeCitasDemo
```

2. Instalar dependencias

```powershell
npm install
```

3. Configurar variables de entorno

- Copia el archivo de ejemplo y reemplaza los valores con tus credenciales de Firebase:

```powershell
cp .env.example .env.local
# En Windows PowerShell puedes usar: Copy-Item .env.example .env.local
```

- Rellena las variables en `.env.local` (o `.env`) con tus datos de Firebase. Las variables necesarias se encuentran en `.env.example` y se usan en `src/config/firebaseConfig.js`.

4. Ejecutar en modo desarrollo

```powershell
npm run dev
```

Comandos útiles
---------------
- npm run dev — inicia el servidor de desarrollo (Vite)
- npm run build — crea una build de producción
- npm run preview — sirve la build de producción localmente
- npm run lint — ejecuta ESLint

Variables de entorno
--------------------
Las variables principales (ver `.env.example`) son:

- VITE_FIREBASE_APIKEY
- VITE_FIREBASE_AUTHDOMAIN
- VITE_FIREBASE_DATABASEURL
- VITE_FIREBASE_PROJECTID
- VITE_FIREBASE_STORAGEBUCKET
- VITE_FIREBASE_MESSAGINGSENDERID
- VITE_FIREBASE_APPID

Nota: Los nombres deben comenzar con `VITE_` para que Vite los exponga en `import.meta.env`.

Estructura relevante del proyecto
---------------------------------
- `index.html` — punto de entrada
- `src/main.jsx` — arranque de React
- `src/Pages/` — páginas (HomePage, LoginPages, RegisterPages, TermsAndConditions, PrivacyPolicy, DashboardPages...)
- `src/Components/` — componentes reutilizables (Navbar, Footer, etc.)
- `src/config/firebaseConfig.js` — inicialización de Firebase
- `src/service/AuthService.js` — funciones de autenticación
- `src/Styles/` — estilos por página

Rutas principales (frontend)
----------------------------
- `/` — Landing / HomePage
- `/login` — Página de inicio de sesión
- `/register` — Página de registro
- `/terms` — Términos y Condiciones
- `/privacy-policy` — Política de Privacidad
- Rutas del dashboard — protegidas por `PrivateRoute` (por ejemplo `/Encounters`, `/Profile`, etc.)

Notas de seguridad
-----------------
- Nunca subas archivos `.env` con credenciales reales a repositorios públicos.
- Para producción, utiliza secretos de CI/CD o servicios de gestión de secretos.

Pruebas y calidad
-----------------
- El proyecto incluye configuración básica de ESLint. Ejecuta `npm run lint` para comprobar problemas de estilo.

Desarrollo y siguientes pasos sugeridos
-------------------------------------
- Añadir tests unitarios (Jest/React Testing Library)
- Implementar protecciones adicionales (rate limiting, validación de servidor)
- Añadir confirmación por email y recuperación de contraseña
- Mejorar la experiencia de onboarding y añadir analytics

Contacto
--------
Si necesitas ayuda con la configuración, o quieres que automatice la integración con Firebase, dime y lo hacemos.

Licencia
--------
Incluye la licencia que prefieras o añade una sección aquí.

