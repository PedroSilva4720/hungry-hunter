import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from './Router.tsx';
import { globalStyle } from './styles/index.ts';

globalStyle();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
