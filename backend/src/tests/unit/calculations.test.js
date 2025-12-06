const { calcularTotalVenta, aplicarImpuesto } = require('../../utils/calculations');

describe('Cálculos de Venta', () => {
  
  describe('calcularTotalVenta', () => {
    
    test('debe calcular correctamente el total sin descuento', () => {
      const detalles = [
        { cantidad: 5, precio_unitario: 10.00 },
        { cantidad: 3, precio_unitario: 20.00 }
      ];
      
      const resultado = calcularTotalVenta(detalles);
      
      expect(resultado.subtotal).toBe(110.00);
      expect(resultado.descuentoAplicado).toBe(0);
      expect(resultado.total).toBe(110.00);
    });
    
    test('debe calcular correctamente el total con descuento', () => {
      const detalles = [
        { cantidad: 10, precio_unitario: 15.00 }
      ];
      
      const resultado = calcularTotalVenta(detalles, 25.00);
      
      expect(resultado.subtotal).toBe(150.00);
      expect(resultado.descuentoAplicado).toBe(25.00);
      expect(resultado.total).toBe(125.00);
    });
    
    test('debe lanzar error si no hay productos', () => {
      expect(() => calcularTotalVenta([])).toThrow('Debe proporcionar al menos un producto');
    });
    
    test('debe lanzar error si cantidad es negativa', () => {
      const detalles = [
        { cantidad: -5, precio_unitario: 10.00 }
      ];
      expect(() => calcularTotalVenta(detalles)).toThrow('Cantidad debe ser positiva');
    });
    
    test('debe lanzar error si descuento excede subtotal', () => {
      const detalles = [
        { cantidad: 5, precio_unitario: 10.00 }
      ];
      expect(() => calcularTotalVenta(detalles, 100.00)).toThrow('Descuento no puede ser mayor al subtotal');
    });
    
    test('debe redondear correctamente a 2 decimales', () => {
      const detalles = [
        { cantidad: 3, precio_unitario: 10.33 }
      ];
      
      const resultado = calcularTotalVenta(detalles);
      
      expect(resultado.subtotal).toBe(30.99);
      expect(resultado.total).toBe(30.99);
    });
  });
  
  describe('aplicarImpuesto', () => {
    
    test('debe calcular correctamente impuesto del 19%', () => {
      const resultado = aplicarImpuesto(100, 19);
      expect(resultado).toBe(119.00);
    });
    
    test('debe calcular correctamente sin impuesto', () => {
      const resultado = aplicarImpuesto(100, 0);
      expect(resultado).toBe(100.00);
    });
    
    test('debe lanzar error si monto es negativo', () => {
      expect(() => aplicarImpuesto(-50, 10)).toThrow('Monto no puede ser negativo');
    });
    
    test('debe lanzar error si porcentaje es negativo', () => {
      expect(() => aplicarImpuesto(100, -5)).toThrow('Porcentaje no puede ser negativo');
    });
  });
});