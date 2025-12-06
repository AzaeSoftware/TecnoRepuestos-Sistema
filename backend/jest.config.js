export default {
  testEnvironment: 'node',
  
  // Ruta de pruebas
  testMatch: [
    '**/tests/**/*.test.js',
    '**/?(*.)+(spec|test).js'
  ],
  
  // Ignorar estas rutas
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/'
  ],
  
  // Cobertura
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/server.js',
    '!src/db/**'
  ],
  
  // Configuración de cobertura
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  
  // Timeout para pruebas
  testTimeout: 10000,
  
  // Mostrar tests en la salida
  verbose: true
};