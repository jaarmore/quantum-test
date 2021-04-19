/**
 * QUANTUM TECHNICAL TEST
 * Simple API using node.js and Express.js
 * AUTHOR: Jackson Moreno
 * DATE: Apr 2021
 */
 const express = require('express');
 const bodyParser = require('body-parser');
  
 const app = express();
 const port = 3000;
 
 // Define method to capture the info of the document body 
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());
 
// Funcion para obtener los costos totales de produccion
 function getCostos(data) {
    if (data) {
        let alimentacion = Number(data.costo_alimentacion);
        let limpieza = Number(data.costo_limpieza);
        let alumbrado = Number(data.costo_alumbrado);
        return (alimentacion + limpieza + alumbrado);
    }
}

//Funcion para obtener el peso total de los pollos
function getPesoTotalPollos(data) {
    let pesoTotal = 0;
    for (let peso of Object.values(data.peso_pollitos)) {
        pesoTotal += Number(peso);
    }
    return pesoTotal;
}

//Funcion para obtener el valor de venta de cada pollo segun su peso
function getPrecioVentaPollo(data, costosT, pesoT) {
    let precio_pollos = {};
    for (let item in data.peso_pollitos) {
        let precio = (costosT * Number(data.peso_pollitos[item]) * 1.16) / pesoT;
        precio_pollos[item] = Math.trunc(precio);
    }
    return precio_pollos;
}

//Funcion para redondear el valor a moneda colombiana
function getAjuste(valores) {
    let precios = valores;
    for (let valor in precios) {
        let unidades = 0;
        let ajuste = precios[valor] % 1000;

        while ((ajuste % 50) !== 0) {
            ajuste++;
            unidades++;
        }
        precios[valor] +=  unidades;
        precios[valor] = precios[valor].toString()
    }
    return precios;
}
  // Create the POST route
 app.post('/', (req, res) => {
     let data = req.body;
    
     if (Object.keys(data).length !== 0) {
        let costosTotales = getCostos(data);
        let pesoTotal = getPesoTotalPollos(data);
        let valor_pollos = getPrecioVentaPollo(data, costosTotales, pesoTotal);
        let valor_final = getAjuste(valor_pollos);
        let message = {
            "costo_pollitos" : valor_final
        };
        console.log(message);
        res.json(message);
     } else {
         res.send('{"msg" : "no hay datos"}');
     }
 });
 
 app.listen(port, () => {
     console.log(`listen on port ${port}`);
 });
