/**
 * Calcula el stock disponible para venta
 */
function calcularStockDisponible(stockActual, stockReservado) {
  if (stockActual < 0) throw new Error('Stock actual no puede ser negativo');
  if (stockReservado < 0) throw new Error('Stock reservado no puede ser negativo');
  if (stockReservado > stockActual) throw new Error('Stock reservado no puede exceder stock actual');
  
  return stockActual - stockReservado;
}

function verificarStockSuficiente(stockActual, cantidadSolicitada) {
  if (cantidadSolicitada <= 0) throw new Error('Cantidad debe ser positiva');
  return stockActual >= cantidadSolicitada;
}

module.exports = {
  calcularStockDisponible,
  verificarStockSuficiente
};