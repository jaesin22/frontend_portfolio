import axios from 'axios';

import { QueryFunction } from '@tanstack/react-query';

interface APITypes {
  id: number;
  introduce: string;
  work: [];
  project: [];
}

const getAPI: QueryFunction<APITypes> = async () => {
  const response = await axios.get('/');
  return response.data[0];
};

export default getAPI;
