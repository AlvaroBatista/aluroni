import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './pages/Menu';
import './index.css';
import 'normalize.css';
import Start from 'pages/Start';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Start />
  </React.StrictMode>
);

