/* eslint-disable import/extensions */
import React from 'react';

import App from './App';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  </BrowserRouter>
);
