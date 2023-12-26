/* eslint-disable import/extensions */
import React from 'react';

import App from './App';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browsers');
  // eslint-disable-next-line consistent-return
  return worker.start();
}

// function queryErrorHandler(error: unknown): string {
//   const title = error instanceof Error ? error.message : 'error!';
//   return title;
// }

const queryClient = new QueryClient({
  defaultOptions: {
    // queries: {
    //   suspense: true,
    //   retry: 0,
    // },
  },
});

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </QueryClientProvider>
  );
});
