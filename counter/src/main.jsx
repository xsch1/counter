import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx'; // 분리형 컴포넌트 카운터

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
