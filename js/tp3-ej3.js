//3-Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
 
//let dado1 = Math.floor(Math.random()*(max - min +1)+ min);

let sumas= [];
let pruebaDado1= [];
let pruebaDado2= [];

for(let i=0; i < 50 ; i++){
    let dado1 = Math.floor(Math.random()*(6- 1 + 1)+ 1);
    let dado2 = Math.floor(Math.random()*(6- 1 + 1)+ 1);
    let resultado = dado1 + dado2;
    pruebaDado1.push(dado1);
    pruebaDado2.push(dado2);
    sumas.push(resultado);
}

document.write(`<br>Resultado de las pruebaDado1: `+ pruebaDado1);
document.write(`<br>Resultado de las pruebaDado2: `+ pruebaDado2);
document.write(`<br>Resultado de las sumas: `+ sumas);
