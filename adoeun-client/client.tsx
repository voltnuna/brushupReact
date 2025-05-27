import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@layouts/App/App';
import styled from '@emotion/styled';

const container = document.querySelector('#app');
if (container) {
  const root = createRoot(container);
  root.render(<BrowserRouter>{process.env.NODE_ENV === 'production' ? <div>production</div> : <App />}</BrowserRouter>);
}
