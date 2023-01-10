function calcular_interes(capital, cuotas) {
  let interes;
  if (cuotas == 12) {
    interes = capital * 0.35;

    return interes;
  } else if (cuotas == 18) {
    interes = capital * 0.55;

    return interes;
  } else if (cuotas == 24) {
    interes = capital * 0.7;

    return interes;
  } else {
    return 0;
  }
}

console.log("Simula tu prestamo Santnader automotor");

let capital = parseFloat(prompt("Ingrese el monto a solicitar"));
let cuotas = parseInt(prompt("Elija la cantidad de cuotas 12-18-24"));

console.log("Solicitado: ", capital, "usd");
console.log("En: ", cuotas, "cuotas");
console.log(
  "Cuota por mes:",
  (capital + calcular_interes(capital, cuotas)) / cuotas
);
console.log("total a pagar:", capital + calcular_interes(capital, cuotas));
