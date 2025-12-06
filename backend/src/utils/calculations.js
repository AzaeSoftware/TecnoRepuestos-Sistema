function calcularTotalVenta(detalles, descuento = 0) {
  if (!Array.isArray(detalles) || detalles.length === 0) {
    throw new Error('Debe proporcionar al menos un producto');
  }
  
  if (descuento < 0) throw new Error('Descuento no puede ser negativo');
  
  const subtotal = detalles.reduce((sum, item) => {
    if (item.cantidad <= 0) throw new Error('Cantidad debe ser positiva');
    if (item.precio_unitario < 0) throw new Error('Precio no puede ser negativo');
    return sum + (item.cantidad * item.precio_unitario);
  }, 0);
  
  if (descuento > subtotal) {
    throw new Error('Descuento no puede ser mayor al subtotal');
  }
  
  const descuentoAplicado = descuento;
  const total = subtotal - descuentoAplicado;
  
  return {
    subtotal: Math.round(subtotal * 100) / 100,
    descuentoAplicado: Math.round(descuentoAplicado * 100) / 100,
    total: Math.round(total * 100) / 100
  };
}

function aplicarImpuesto(monto, porcentajeImpuesto = 0) {
  if (monto < 0) throw new Error('Monto no puede ser negativo');
  if (porcentajeImpuesto < 0) throw new Error('Porcentaje no puede ser negativo');
  
  const impuesto = monto * (porcentajeImpuesto / 100);
  return Math.round((monto + impuesto) * 100) / 100;
}

module.exports = {
  calcularTotalVenta,
  aplicarImpuesto
};