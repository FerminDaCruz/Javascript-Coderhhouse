class Iphone {
    constructor(modelo, precio) {
        this.modelo = modelo;
        this.precio = precio;
    }

    cuotas1() {
        return `El precio final del ${this.modelo} es de: $${this.precio}`;
    }

    cuotas3() {
        const precioFinalCuotas = this.precio * 1.10;
        const precioPorCuota = precioFinalCuotas / 3;
        return `El precio final en 3 cuotas del ${this.modelo} es de: $${precioFinalCuotas}\nEl precio final de cada cuota es de: $${precioPorCuota}`;
    }

    cuotas6() {
        const precioFinalCuotas = this.precio * 1.20;
        const precioPorCuota = precioFinalCuotas / 6;
        return `El precio final en 6 cuotas del ${this.modelo} es de: $${precioFinalCuotas}\nEl precio final de cada cuota es de: $${precioPorCuota}`;
    }

    cuotas12() {
        const precioFinalCuotas = this.precio * 1.40;
        const precioPorCuota = precioFinalCuotas / 12;
        return `El precio final en 12 cuotas del ${this.modelo} es de: $${precioFinalCuotas}\nEl precio final de cada cuota es de: $${precioPorCuota}`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetch('iphones.json')
        .then(response => response.json())
        .then(data => {
            const iPhones = data.map(item => new Iphone(item.modelo, item.precio));

            const modeloSelect = document.getElementById('modelo');
            const cuotasSelect = document.getElementById('cuotas');
            const resultadoDiv = document.getElementById('resultado');

            // Cargar selección previa del usuario desde localStorage
            const savedModelo = localStorage.getItem('modelo');
            const savedCuotas = localStorage.getItem('cuotas');


            savedModelo && (modeloSelect.value = savedModelo);
            savedCuotas && (cuotasSelect.value = savedCuotas);

            let calcular = function() {
                const modeloSeleccionado = modeloSelect.value;
                const cuotasSeleccionadas = cuotasSelect.value;

                const iphoneSeleccionado = iPhones.find(iphone => iphone.modelo === modeloSeleccionado);

                let resultado;

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
                        resultado = "Por favor, seleccione un número válido de cuotas.";
                        break;
                }

                // Guardar la selección del usuario en localStorage
                localStorage.setItem('modelo', modeloSeleccionado);
                localStorage.setItem('cuotas', cuotasSeleccionadas);

                resultadoDiv.textContent = resultado.replace(/_/g, ' '); // Reemplazar "_" con " "
            };

            //calcular
            document.getElementById('boton-calcular').addEventListener('click', calcular);

            // guardar en el local storage cambios
            modeloSelect.addEventListener('change', () => {
                localStorage.setItem('modelo', modeloSelect.value);
            });
            cuotasSelect.addEventListener('change', () => {
                localStorage.setItem('cuotas', cuotasSelect.value);
            });

            // Cargar modelos desde el JSON
            const cargarOpciones = () => {
                iPhones.forEach(iphone => {
                    const option = document.createElement('option');
                    option.value = iphone.modelo;
                    option.textContent = iphone.modelo.replace(/_/g, ' '); // Reemplazar "_" con " "
                    modeloSelect.appendChild(option);
                });
            };

            cargarOpciones();
        })
        .catch(error => console.error('Error fetching iPhone data:', error));
});
