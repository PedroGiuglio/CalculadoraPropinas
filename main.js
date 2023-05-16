// const titulo = document.querySelector(".titulo");
// titulo.style.color = "red";

// const sellosEstilos = {
//     width: "300px",
//     height: "150px",
//     backgroundColor: "red",
//   };
  
//   const selloAgua = document.createElement("div");
//   selloAgua.style.width = sellosEstilos.width;
//   selloAgua.style.height = sellosEstilos.height;
//   selloAgua.style.backgroundColor = sellosEstilos.backgroundColor;
//   document.body.appendChild(selloAgua);
  
//   const selloCloaca = document.createElement("div");
//   selloCloaca.style.width = sellosEstilos.width;
//   selloCloaca.style.height = sellosEstilos.height;
//   selloCloaca.style.backgroundColor = sellosEstilos.backgroundColor;
//   selloCloaca.style.marginTop = "20px";
//   document.body.appendChild(selloCloaca);

// function CalcularPropina () {
//  let totalFactura = parseFloat(prompt("Ingrese aquí el monto total:"));
//  let porcentajePropina = parseFloat(prompt("Ingrese porentaje de propina:"));

//  let montoPropina = totalFactura * (porcentajePropina / 100);
//  let totalConPropina = totalFactura + montoPropina
//  alert(`Monto de la propina: $${montoPropina.toFixed(2)}`)
//  alert(`Total a pagar (con propina): $${totalConPropina.toFixed(2)}`);
// }
 
// CalcularPropina();

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

  
 