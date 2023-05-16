function calcularPropina () {
  let totalFacturaInput = document.getElementById('totalFactura')
  let porcentajePropinaInput = document.getElementById('porcentajeDePropina')

  let totalFactura = parseFloat(totalFacturaInput.value);
  let porcentajePropina = parseFloat(porcentajePropinaInput.value);

  let montoPropina = totalFactura * (porcentajePropina / 100);
  let totalConPropina = totalFactura + montoPropina;

  alert(`El monto de la propina es: $${montoPropina.toFixed(2)}`);
  alert(`El monto total con propina es: $${totalConPropina.toFixed(2)}`);
}

  
 