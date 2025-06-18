import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

const ThrowError = (message: string) => {
  throw new Error(message);
};

createRoot(document.getElementById('root') ?? ThrowError('Root element not found')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
