// Simulación de un servicio de autenticación
class AuthService {
  async getToken(): Promise<string> {
    // Lógica real para obtener el token (por ejemplo, desde localStorage, una cookie, o un flujo de autenticación)
    return 'dummy_private_token_123';
  }
}

export const authService = new AuthService();