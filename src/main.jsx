import '@fontsource/inter/200.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/800.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './containers/App/App.jsx';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
