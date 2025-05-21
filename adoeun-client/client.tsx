import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@layouts/App';

const container = document.querySelector('#app');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

//폴더구조
//pages - 페이지 진입점
//components - 공통되거나 작은컴포
//layouts -페이지간 공통 레잉아웃
