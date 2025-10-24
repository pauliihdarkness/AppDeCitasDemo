import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './Styles/Index.css';

import Router from "./Router/Router";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./service/authContext";

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <AuthProvider> {/* ✅ envolver toda la app */}
      <RouterProvider router={Router} />
    </AuthProvider>
  </StrictMode>,
)
