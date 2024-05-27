class Iphone {
    constructor(modelo, precio) {
        this.modelo = modelo;
        this.precio = precio;
    }
    cuotas1() {
        console.log("el precio final del " + this.modelo + " es de: $" + this.precio);
    }
    cuotas3() {
        const precioFinalCuotas = this.precio * 1.10;
        const precioPorCuota = precioFinalCuotas / 3;
        console.log("El precio final en 3 cuotas del " + this.modelo + " es de: $" + precioFinalCuotas + "\nEl precio final de cada cuota es de: $" + precioPorCuota);
    }
    cuotas6() {
        const precioFinalCuotas = this.precio * 1.20;
        const precioPorCuota = precioFinalCuotas / 6;
        console.log("El precio final en 6 cuotas del " + this.modelo + " es de: $" + precioFinalCuotas + "\nEl precio final de cada cuota es de: $" + precioPorCuota);
    }
    cuotas12() {
        const precioFinalCuotas = this.precio * 1.40;
        const precioPorCuota = precioFinalCuotas / 12;
        console.log("El precio final en 12 cuotas del " + this.modelo + " es de: $" + precioFinalCuotas + "\nEl precio final de cada cuota es de: $" + precioPorCuota);
    }
}

const modelos = ["iphone_8", "iphone_x", "iphone_11", "iphone_12", "iphone_13"];
const precios = [100000, 250000, 300000, 400000, 500000];

const iPhones = modelos.map((modelo,index) => new Iphone(modelo, precios[index]));


do{
    let seleccionarIphone = prompt("bienvenido a la tienda apple, que iphone va a llevar?\niphone 8: $100000\niphone x: $250000\niphone 11: $300000\niphone 12: $400000\niphone 13: $500000")
    
    // Para poder escribir mayusculas y espacios
    seleccionarIphone = seleccionarIphone.toLowerCase();
    seleccionarIphone = seleccionarIphone.replace(/ /g, "_");
    
    let iphoneSeleccionado = iPhones.find(iphone => iphone.modelo.toLowerCase() === seleccionarIphone);
    
    if (iphoneSeleccionado) {
        let cuantasCuotas = prompt("Ingrese con que plan de cuotas desea pagar (1 / 3 / 6 / 12)");
    
        switch (cuantasCuotas) {
            case "1":
                iphoneSeleccionado.cuotas1();
                break;
            case "3":
                iphoneSeleccionado.cuotas3();
                break;
            case "6":
                iphoneSeleccionado.cuotas6();
                break;
            case "12":
                iphoneSeleccionado.cuotas12();
                break; 
            default:
                console.log("Numero de cuotas no válido, Por favor ingrese un numero válido")
                break;
        }
    } else {
        console.log("Modelo de iphone no válido. Por favor ingrese un modelo válido")
    }    
    continuar = prompt("¿desea seguir comprando?");
    console.log(continuar);
} while (continuar === "si")







