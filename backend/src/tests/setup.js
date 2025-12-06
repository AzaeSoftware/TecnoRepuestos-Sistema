// Configuración global para todas las pruebas
import dotenv from 'dotenv';

// Cargar variables de entorno para tests
dotenv.config({ path: '.env.test' });

// Configurar timeout global
jest.setTimeout(10000);

// Mock de console para evitar spam en pruebas
const originalLog = console.log;
const originalError = console.error;

beforeAll(() => {
  console.log = jest.fn();
  console.error = jest.fn();
});

afterAll(() => {
  console.log = originalLog;
  console.error = originalError;
});

// Limpiar cualquier estado global después de cada prueba
afterEach(() => {
  jest.clearAllMocks();
});