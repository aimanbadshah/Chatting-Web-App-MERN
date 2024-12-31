import ReactDom from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import { StrictMode } from 'react';
import App from './App.jsx';
import './index.css' ;
import { AuthContextProvider } from './context/AuthContext.jsx';

ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
      <App />
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
