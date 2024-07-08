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
    const iphonesJSON = 'iphones.json'
    
    const scrollNavegacion = (selector) => {
        document.querySelectorAll(selector).forEach(link => {
            link.addEventListener('click', evento => {
                evento.preventDefault();
    
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
    
                if (targetElement) {
                    window.scrollTo ({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    })
                }
            })
        })
    }

    scrollNavegacion('.header__navbar a')
    scrollNavegacion('.footer__navbar a')
    
    fetch(iphonesJSON)
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
                });
            };

            const agregarProductoCarrito = (evento) => {
                const id = evento.target.getAttribute('marcador');
                verificarDisponibilidadProducto(id, carrito)
                    .then(() => {
                        carrito.push(id);
                        localStorage.setItem('carrito', JSON.stringify(carrito));
                        Swal.fire({
                            title: "Producto agregado al carrito",
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
                    })
                    .catch(error => {
                        Swal.fire({
                            title: "Producto ya está en el carrito",
                            text: "¿Desea agregarlo de nuevo?",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonText: "Agregar de nuevo",
                            cancelButtonText: "Cancelar",
                            customClass: {
                                title: 'swal2-title',
                                content: 'swal2-content'
                            }
                        }).then((resultado) => {
                            if (resultado.isConfirmed) {
                                carrito.push(id);
                                localStorage.setItem('carrito', JSON.stringify(carrito));
                                Swal.fire({
                                    title: "Producto agregado al carrito",
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
                            } else {
                                Swal.fire({
                                    title: "Cancelado",
                                    text: "El producto no fue agregado al carrito",
                                    icon: "info",
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
                            }
                        })


                    });
            };

            const renderizarCarrito = () => {
                DOMCarrito.innerHTML = ``; // Para no repetir productos
                carrito.forEach((id) => {
                    // busca el ID y coloca el objeto que coincide en producto
                    const producto = data.find((info) => info.id === parseInt(id));
                    const html = `
                    <li>
                        <p>${producto.modelo.replace(/\_/g, ' ')}</p>  <p>$${producto.precio}</p>
                    </li>`;
                    DOMCarrito.innerHTML += html;
                });
                const total = carrito.reduce((total, id) => {
                    const producto = data.find((info) => info.id === parseInt(id));
                    return total + producto.precio;
                }, 0);
                DOMTotal.textContent = total.toFixed(2);
            }

            const vaciarCarrito = () => {
                carrito = [];
                localStorage.removeItem('carrito');
                renderizarCarrito();
            };

            const verificarDisponibilidadProducto = (id, carrito) => {
                return new Promise((resolve, reject) => {
                    const disponible = !carrito.includes(id);
                    
                    disponible ? resolve() : reject(`Producto ya esta en el carrito`); 
                });
            }

            // Llamar a las funciones
            data.forEach((info) => {
                renderizarProductos(info);
            });
            DOMBotonVaciar.addEventListener('click', vaciarCarrito);
            renderizarCarrito();
        })
        .catch(error => {
            console.error('Error al cargar los datos:', error);
        });
});
// Funciones





