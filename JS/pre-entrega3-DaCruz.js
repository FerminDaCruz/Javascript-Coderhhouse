class Iphone {
    constructor(modelo, precio) {
        this.modelo = modelo;
        this.precio = precio;
    }
    cuotas1() {
        return "El precio final del " + this.modelo + " es de: $" + this.precio;
    }
    cuotas3() {
        const precioFinalCuotas = this.precio * 1.10;
        const precioPorCuota = precioFinalCuotas / 3;
        return "El precio final en 3 cuotas del " + this.modelo + " es de: $" + precioFinalCuotas + "\nEl precio final de cada cuota es de: $" + precioPorCuota;
    }
    cuotas6() {
        const precioFinalCuotas = this.precio * 1.20;
        const precioPorCuota = precioFinalCuotas / 6;
        return "El precio final en 6 cuotas del " + this.modelo + " es de: $" + precioFinalCuotas + "\nEl precio final de cada cuota es de: $" + precioPorCuota;
    }
    cuotas12() {
        const precioFinalCuotas = this.precio * 1.40;
        const precioPorCuota = precioFinalCuotas / 12;
        return "El precio final en 12 cuotas del " + this.modelo + " es de: $" + precioFinalCuotas + "\nEl precio final de cada cuota es de: $" + precioPorCuota;
    }
}

const modelos = ["iphone_8", "iphone_x", "iphone_11", "iphone_12", "iphone_13", "iphone_14", "iphone_15"];
const precios = [250, 350, 500, 600, 700, 800, 900];

const iPhones = modelos.map((modelo, index) => new Iphone(modelo, precios[index]));

let calcular = function() {
    const modeloSeleccionado = document.getElementById('modelo').value;
    const cuotasSeleccionadas = document.getElementById('cuotas').value;
    
    console.log("modelo", modeloSeleccionado);
    console.log("cuotas", cuotasSeleccionadas);

    const iphoneSeleccionado = iPhones.find(iphone => iphone.modelo === modeloSeleccionado);

    let resultado;

    // Calcular el precio final basado en las cuotas seleccionadas
    switch (cuotasSeleccionadas) {
        case '1':
            resultado = iphoneSeleccionado.cuotas1();
            break;
        case '3':
            resultado = iphoneSeleccionado.cuotas3();
            break;
        case '6':
            resultado = iphoneSeleccionado.cuotas6();
            break;
        case '12':
            resultado = iphoneSeleccionado.cuotas12();
            break;
        default:
            resultado = 'Número de cuotas no válido. Por favor ingrese un número válido.';
            break;
    }

    document.getElementById('resultado').innerText = resultado;
}

let botonCalcular = document.getElementById('boton-calcular');
botonCalcular.addEventListener('click', calcular);


function login(){
    const USUARIO = document.getElementById('usuario').value;
    const PASSWORD = document.getElementById('password').value;

    if (USUARIO && PASSWORD) {
        localStorage.setItem('usuario', USUARIO);
        localStorage.setItem('password', PASSWORD);

        alert('BIEN');
        // window.location.href = '../pages/contacto.html';
    }
    else {
        alert('ingrese nombre y contraseña');
    }
}