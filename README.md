# QUANTUM TECHNICAL TEST
Repositorio con solucion a la prueba técnica planteada por el equipo de QUANTUM.

## DESAFIO
Como desarrollador de software miembro del equipo Quantum, tu misión es crear una API REST en
NodeJS que retorne el costo individual de cada pollo según su peso. El servicio `/mispollitos/`
recibirá la información a través de un `HTTP POST` con un payload con el siguiente formato:

POST ---> `/mispollitos/`

```
{
    "costo_alimentacion" : "100000",
    "costo_limpieza" : "35000",
    "costo_alumbrado" : "45250",
    "peso_pollitos" : {
        "pollo_1" : "12",
        "pollo_2" : "10",
        "pollo_3" : "11.5",
        "pollo_4" : "13.42"
    }
}
```
Los costos `(costo_alimentacion, costo_limpieza, costo_alumbrado)`, son sobre la totalidad de los X pollos que se hayan criado. En este ejemplo `(100.000+35.000+45.250 = 180250)` este es el costo total de la producción de los 4 pollos que se criaron. El peso de los pollos está en libras (“pollo_1” : 12 = 12 Libras) . Siempre el numero de pollos es diferente.

Al precio final de cada pollo se le debe sumar el `16%` que será la ganancia de mi abuela, para que así no vuelva a tener perdidas. Además, se debe redondear este costo al valor entero superior más cercano que pueda ser pagado con pesos colombianos.


Por tanto, la respuesta, deberá tener la siguiente forma:

```
{
    "costo_pollitos" : {
        "pollo_1" : "53500",
        "pollo_2" : "44600",
        "pollo_3" : "51250",
        "pollo_4" : "59850"
    }
}
```

## SOLUCION
Se plantea el desarrollo de una API simple, utilizando `Node.js` y el framework `Express.js`, la cual recibe los parametros enviados en la solicitud `POST` que seran posteriormente procesados por el recurso `/mispollitos`.


### INSTALACION
1. Desde una consola o terminal ingrese el siguiente comando:
`git clone https://github.com/jaarmore/quantum-test`

2. Esto creara una carpeta llamada `quantum-test` en el lugar donde ejecuto el comando anterior.

3. Ingrese a dicha carpeta con el comando `cd quantum-test`.

4. Una vez dentro de la carpeta, ejecute el comando `npm i`, para instalar todas las dependencias del proyecto.

**NOTA**
- Para que el aplicativo funcione correctamente, se recomienda tener instalado _Node.js_ , puede comprobar facilmente escribiendo en su consola el comando: `node -v`, lo cual debe arrojar la version de _Node.js_ instalada.

Para efectos practicos, este proyecto fue desarrollado utilizando `node v14.16.0`

5. Una vez haya instalado las dependencias del proyecto, ejecute el comando: `nodemon app.js` para ejecutar la **API**

6. Con la `API` funcionando, realice pruebas al servicio creado con algun cliente como `POSTMAN - INMSONIA` o desde la consola, con los verbos:

```
POST http://localhost:3000 HTTP/1.1
My-header: custom

{
    "arguments" : "My custom value"
}
```

## AUTHOR
**Jackson Moreno**