import { http, HttpResponse } from 'msw';

const handlers = [
  http.get('/', () => {
    return HttpResponse.json([
      {
        id: 1,
        name: 'Ham',
      },
    ]);
  }),
];

export default handlers;
