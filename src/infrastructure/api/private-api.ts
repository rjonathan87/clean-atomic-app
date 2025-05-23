import axios from 'axios';
import { Example } from '@/domain/entities/example.entity';
import { ExampleRepository } from '@/domain/interfaces/example.repository';
import { API_ENDPOINTS } from '@/shared/constants/api-endpoints';
import { authService } from '../auth/auth-service'; // Importamos el servicio de autenticación

class PrivateApi implements ExampleRepository {
  async fetchPublicData(): Promise<Example[]> {
    // Esta API es privada, así que devolvemos un array vacío o un error específico
    console.warn('Attempted to fetch public data from private API');
    return [];
  }

  async fetchPrivateData(): Promise<Example[]> {
    try {
      const token = await authService.getToken(); // Obtenemos el token de autenticación
      const response = await axios.get<Example[]>(API_ENDPOINTS.privateExample, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching private data:', error);
      throw error;
    }
  }
}

export const privateApi = new PrivateApi();