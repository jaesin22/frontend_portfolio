/* eslint-disable import/extensions */
import React from 'react';

import App from './App';

import ReactDOM from 'react-dom/client';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browsers');
  // eslint-disable-next-line consistent-return
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
