const { calcularStockDisponible, verificarStockSuficiente } = require('../../utils/inventory');

describe('Funciones de Inventario', () => {
  
  describe('calcularStockDisponible', () => {
    
    test('debe calcular correctamente el stock disponible', () => {
      const resultado = calcularStockDisponible(100, 20);
      expect(resultado).toBe(80);
    });
    
    test('debe retornar el stock completo si no hay reservas', () => {
      const resultado = calcularStockDisponible(50, 0);
      expect(resultado).toBe(50);
    });
    
    test('debe lanzar error si stock actual es negativo', () => {
      expect(() => calcularStockDisponible(-10, 5)).toThrow('Stock actual no puede ser negativo');
    });
    
    test('debe lanzar error si stock reservado es negativo', () => {
      expect(() => calcularStockDisponible(100, -5)).toThrow('Stock reservado no puede ser negativo');
    });
    
    test('debe lanzar error si reserva excede stock actual', () => {
      expect(() => calcularStockDisponible(50, 100)).toThrow('Stock reservado no puede exceder stock actual');
    });
  });
  
  describe('verificarStockSuficiente', () => {
    
    test('debe retornar true si hay stock suficiente', () => {
      const resultado = verificarStockSuficiente(100, 50);
      expect(resultado).toBe(true);
    });
    
    test('debe retornar true si stock es exactamente igual a cantidad solicitada', () => {
      const resultado = verificarStockSuficiente(100, 100);
      expect(resultado).toBe(true);
    });
    
    test('debe retornar false si stock es insuficiente', () => {
      const resultado = verificarStockSuficiente(30, 50);
      expect(resultado).toBe(false);
    });
    
    test('debe lanzar error si cantidad es cero o negativa', () => {
      expect(() => verificarStockSuficiente(100, 0)).toThrow('Cantidad debe ser positiva');
      expect(() => verificarStockSuficiente(100, -5)).toThrow('Cantidad debe ser positiva');
    });
  });
});