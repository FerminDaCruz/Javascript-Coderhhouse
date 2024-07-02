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
    const modeloSelect = document.getElementById('modelo');
    const cuotasSelect = document.getElementById('cuotas');
    const resultadoDiv = document.getElementById('resultado');
    const productosContainer = document.getElementById('productos-container');
    
    fetch('iphones.json')
        .then(response => response.json())
        .then(data => {
            const iPhones = data.map(item => new Iphone(item.modelo, item.precio));

            let carrito = JSON.parse(localStorage.getItem('carrito')) || []; 
            const DOMItems = document.getElementById('items');
            const DOMCarrito = document.getElementById('carrito');
            const DOMTotal = document.getElementById('total');
            const DOMBotonVaciar = document.getElementById('boton-vaciar');





            const renderizarProductos = (info) => {
                const html = `
                                <div class="tarjeta-productos">
                                    <div>
                                        <img src="${info.imagen}" alt="imagen-producto">
                                        <h3>${info.modelo.replace(/\_/g, ' ')}</h3>
                                        <p>$${info.precio}</p>
                                        <button class="boton-comprar" marcador="${info.id}">comprar</button>
                                    </div>
                                </div>
                                `;
                DOMItems.innerHTML += html;
                document.querySelectorAll('.boton-comprar').forEach((boton) => {
                    boton.addEventListener('click', agregarProductoCarrito)
                })
            }

            const agregarProductoCarrito = (evento) => {
                carrito.push(evento.target.getAttribute('marcador'))
                localStorage.setItem('carrito', JSON.stringify(carrito))
                Swal.fire({
                    title: "agregado al carrito",
                    text: "el producto fue agregado al carrito",
                    icon: "success",
                    width: 400,
                    timer: 2000,
                    showConfirmButton: false,
                    position: 'top-end',
                    backdrop: false,
                    customClass: {
                        title: 'swal2-title',
                        content: 'swal2-content'
                    }
                });
                renderizarCarrito();
            }

            function renderizarCarrito () {
                DOMCarrito.innerHTML = ``; // Para no repetir productos
                carrito.forEach((id) => {
                    // busca el ID y coloca el objeto que coincide en producto
                    const producto = data.find((info) => info.id === parseInt(id)) 
                    const html = `
                    <li>
                        <p>${producto.modelo.replace(/\_/g, ' ')}</p> - <p>$${producto.precio}</p>
                    </li>`
                    DOMCarrito.innerHTML += html;
                })
                const total = carrito.reduce((total,id) => {
                    const producto = data.find((info) => info.id === parseInt(id))
                    return total + producto.precio;
                },0)
                DOMTotal.textContent = total.toFixed(2)
            }
            const vaciarCarrito = () => {
                carrito = [];
                localStorage.removeItem('carrito');
                renderizarCarrito();
            }
            
            

            // Llamos a las funciones
            cargarOpciones(iPhones, modeloSelect);
            cargarSeleccionPrevia(modeloSelect, cuotasSelect);
            configurarEventos(iPhones, modeloSelect, cuotasSelect, resultadoDiv);
            data.forEach((info) => {
                renderizarProductos(info);
            });
            DOMBotonVaciar.addEventListener('click', vaciarCarrito)
            renderizarCarrito();
        })
})

// Funciones
const cargarOpciones = (iPhones, modeloSelect) => {
    iPhones.forEach(iphone => {
        const option = document.createElement('option');
        option.value = iphone.modelo;
        option.textContent = iphone.modelo.replace(/\_/g, ' '); // Reemplazar "_" con " "
        modeloSelect.appendChild(option);
    });
};
const cargarSeleccionPrevia = (modeloSelect, cuotasSelect) => {
    const modeloGuardado = localStorage.getItem('modelo');
    const cuotasGuardadas = localStorage.getItem('cuotas');
    modeloGuardado && (modeloSelect.value = modeloGuardado);
    cuotasGuardadas && (cuotasSelect.value = cuotasGuardadas);
};
const calcularResultado = (iPhones, modeloSelect, cuotasSelect, resultadoDiv) => {
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

    // Guardar en localStorage
    localStorage.setItem('modelo', modeloSeleccionado);
    localStorage.setItem('cuotas', cuotasSeleccionadas);

    resultadoDiv.textContent = resultado.replace(/\_/g, ' '); // Reemplazar "\_" con " "
};
const configurarEventos = (iPhones, modeloSelect, cuotasSelect, resultadoDiv) => {
    const botonCalcular = document.getElementById('boton-calcular')

    botonCalcular.addEventListener('click', () => {
        calcularResultado(iPhones, modeloSelect, cuotasSelect, resultadoDiv);
    });
    modeloSelect.addEventListener('change', () => {
        localStorage.setItem('modelo', modeloSelect.value);
    });
    cuotasSelect.addEventListener('change', () => {
        localStorage.setItem('cuotas', cuotasSelect.value);
    });
};





