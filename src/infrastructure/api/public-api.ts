/**
import axios from 'axios';
import { Example } from '@/domain/entities/example.entity';
import { ExampleRepository } from '@/domain/interfaces/example.repository';
import { API_ENDPOINTS } from '@/shared/constants/api-endpoints';

class PublicApi implements ExampleRepository {
  async fetchPublicData(): Promise<Example[]> {
    try {
      const response = await axios.get<Example[]>(API_ENDPOINTS.publicExample);
      return response.data;
    } catch (error) {
      console.error('Error fetching public data:', error);
      throw error;
    }
  }

  async fetchPrivateData(): Promise<Example[]> {
    // Esta API es pública, así que devolvemos un array vacío o un error específico
    console.warn('Attempted to fetch private data from public API');
    return [];
  }
}

export const publicApi = new PublicApi();
*/

 import axios, { AxiosInstance } from 'axios';
import {API_ENDPOINTS} from '../../shared/constants/api.constants';

const publicApi: AxiosInstance = axios.create({
  baseURL: API_ENDPOINTS.API_BASE_URL,
  params: {
    api_key: API_ENDPOINTS.TMDB_API_KEY,
    language: 'es-MX',
  },
});

export default publicApi;