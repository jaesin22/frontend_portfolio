import axios from 'axios';

import { QueryFunction } from '@tanstack/react-query';

interface APITypes {
  id: number;
  introduce: string;
  work: [];
  project: [];
}

const instance = axios.create({
  responseType: 'json',
});

// mock data 연동
const getAPI: QueryFunction<APITypes> = async () => {
  const response = await instance.get(
    'https://b4adfed5-d951-4ad6-877f-f8fc439acd2e.mock.pstmn.io/about'
  );

  return response.data;
};

export default getAPI;

// // 블로그 Access Token 가져오기
// export const getBlogAuthCode = async () => {
//   try {
//     const url = `/oauth/access_token?client_id=${
//       import.meta.env.VITE_REACT_APP_BLOG_APP_ID
//     }&client_secret=${
//       import.meta.env.VITE_REACT_APP_BLOG_SECRET_KEY
//     }&redirect_uri=${import.meta.env.VITE_REACT_APP_BLOG_SERVICE_URL}&code=${
//       import.meta.env.VITE_REACT_APP_BLOG_AUTH_CODE
//     }&grant_type=authorization_code`;
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching blog authentication code:', error);
//     throw error; // Rethrow the error to be handled by the caller
//   }
// };
