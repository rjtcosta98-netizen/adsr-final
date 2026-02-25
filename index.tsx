import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Importa o seu App.tsx

// Garante que o elemento 'root' existe no HTML antes de tentar renderizar
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Falha ao encontrar o elemento root no HTML. Verifique se existe <div id="root"></div>');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)