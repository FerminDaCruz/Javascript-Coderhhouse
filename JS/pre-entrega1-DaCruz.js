let iphone_8 = 100000,
    iphone_x = 250000,
    iphone_11 = 300000,
    iphone_12 = 400000,
    iphone_13 = 600000,
    continuar,
    seleccionarIphone,
    cuantasCuotas,
    precio;


const calcularCuotas = (precio, cuotas, interes) => {
    let precioEnCuotas = precio * interes;
    return precioEnCuotas / cuotas;
}

do{
    seleccionarIphone = prompt("bienvenido a la tienda apple, que iphone va a llevar?\niphone 8: $" + iphone_8 + "\niphone x: $" + iphone_x + "\niphone 11: $" + iphone_11 + "\niphone 12: $" + iphone_12 + "\niphone 13: $" + iphone_13)
    cuantasCuotas = prompt("\n¿En cuantas cuotas lo va a pagar? (1/3/6/12)")
    
    console.log(seleccionarIphone)

    switch(seleccionarIphone){
        case "iphone 8": 
            precio = iphone_8
            console.log("El precio del " + seleccionarIphone + " es de: $" + precio);
            console.log(cuantasCuotas)
            if (cuantasCuotas === "1") {
                console.log("El valor final es de: $" + precio);
            }    
            else if (cuantasCuotas === "3") {
                console.log("El valor total es de: $" + (precio * 1.10)  + "\nEl valor de cada cuota es de: $" + calcularCuotas(precio, cuantasCuotas, 1.10))
            }
            else if (cuantasCuotas === "6") {
                console.log("El valor total es de: $" + (precio * 1.10)  + "\nEl valor de cada cuota es de: $" + calcularCuotas(precio, cuantasCuotas, 1.20))
            }
            else if (cuantasCuotas === "12") {
                console.log("El valor total es de: $" + (precio * 1.10)  + "\nEl valor de cada cuota es de: $" + calcularCuotas(precio, cuantasCuotas, 1.40))
            } 
            else {
                console.log("no seleccionó un numero correcto de cuotas")
            }
        break;

        case "iphone x": 
            precio = iphone_x
            console.log("El precio del " + seleccionarIphone + " es de: $" + precio);
            console.log(cuantasCuotas)
            if (cuantasCuotas === "1") {
                console.log("Su precio es de: $" + precio);
            }    
            else if (cuantasCuotas === "3") {
                console.log("El valor total es de: $" + (precio * 1.10)  + "\nEl valor de cada cuota es de: $" + calcularCuotas(precio, cuantasCuotas, 1.10))
            }
            else if (cuantasCuotas === "6") {
                console.log("El valor total es de: $" + (precio * 1.10)  + "\nEl valor de cada cuota es de: $" + calcularCuotas(precio, cuantasCuotas, 1.20))
            }
            else if (cuantasCuotas === "12") {
                console.log("El valor total es de: $" + (precio * 1.10)  + "\nEl valor de cada cuota es de: $" + calcularCuotas(precio, cuantasCuotas, 1.40))
            } 
            else {
                console.log("no seleccionó un numero correcto de cuotas")
            }
        break;

        case "iphone 11": 
            precio = iphone_11
            console.log("El precio del " + seleccionarIphone + " es de: $" + precio);
            console.log(cuantasCuotas)
            if (cuantasCuotas === "1") {
                console.log("Su precio es de: $" + precio);
            }    
            else if (cuantasCuotas === "3") {
                console.log("El valor total es de: $" + (precio * 1.10)  + "\nEl valor de cada cuota es de: $" + calcularCuotas(precio, cuantasCuotas, 1.10))
            }
            else if (cuantasCuotas === "6") {
                console.log("El valor total es de: $" + (precio * 1.10)  + "\nEl valor de cada cuota es de: $" + calcularCuotas(precio, cuantasCuotas, 1.20))
            }
            else if (cuantasCuotas === "12") {
                console.log("El valor total es de: $" + (precio * 1.10)  + "\nEl valor de cada cuota es de: $" + calcularCuotas(precio, cuantasCuotas, 1.40))
            } 
            else {
                console.log("no seleccionó un numero correcto de cuotas")
            }
        break;

        case "iphone 12": 
            precio = iphone_12
            console.log("El precio del " + seleccionarIphone + " es de: $" + precio);
            console.log(cuantasCuotas)
            if (cuantasCuotas === "1") {
                console.log("Su precio es de: $" + precio);
            }    
            else if (cuantasCuotas === "3") {
                console.log("El valor total es de: $" + (precio * 1.10)  + "\nEl valor de cada cuota es de: $" + calcularCuotas(precio, cuantasCuotas, 1.10))
            }
            else if (cuantasCuotas === "6") {
                console.log("El valor total es de: $" + (precio * 1.10)  + "\nEl valor de cada cuota es de: $" + calcularCuotas(precio, cuantasCuotas, 1.20))
            }
            else if (cuantasCuotas === "12") {
                console.log("El valor total es de: $" + (precio * 1.10)  + "\nEl valor de cada cuota es de: $" + calcularCuotas(precio, cuantasCuotas, 1.40))
            } 
            else {
                console.log("no seleccionó un numero correcto de cuotas")
            }
        break;

        case "iphone 13": 
            precio = iphone_13
            console.log("El precio del " + seleccionarIphone + " es de: $" + precio);
            console.log(cuantasCuotas)
            if (cuantasCuotas === "1") {
                console.log("Su precio es de: $" + precio);
            }    
            else if (cuantasCuotas === "3") {
                console.log("El valor total es de: $" + (precio * 1.10)  + "\nEl valor de cada cuota es de: $" + calcularCuotas(precio, cuantasCuotas, 1.10))
            }
            else if (cuantasCuotas === "6") {
                console.log("El valor total es de: $" + (precio * 1.10)  + "\nEl valor de cada cuota es de: $" + calcularCuotas(precio, cuantasCuotas, 1.20))
            }
            else if (cuantasCuotas === "12") {
                console.log("El valor total es de: $" + (precio * 1.10)  + "\nEl valor de cada cuota es de: $" + calcularCuotas(precio, cuantasCuotas, 1.40))
            } 
            else {
                console.log("no seleccionó un numero correcto de cuotas")
            }
        break;
    }
    continuar = prompt("¿desea seguir comprando?");
    console.log(continuar);
} while (continuar === "si")





