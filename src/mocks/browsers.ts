// src/mocks/browser.ts
import handlers from './handlers/handlers';

// eslint-disable-next-line import/extensions
import { setupWorker } from 'msw/browser';

// eslint-disable-next-line import/prefer-default-export
export const worker = setupWorker(...handlers);
