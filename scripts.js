let carrito = [];
let total = 0;

function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  total += precio;
  mostrarCarrito();
}

function eliminarDelCarrito(index) {
  total -= carrito[index].precio;
  carrito.splice(index, 1);
  mostrarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  total = 0;
  mostrarCarrito();
}

function mostrarCarrito() {
  const listaCarrito = document.getElementById('lista-carrito');
  listaCarrito.innerHTML = '';
  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.producto} - $${item.precio}`;
    listaCarrito.appendChild(li);
  });

{
  document.getElementById('total').textContent = `$${total}`;}
}

function realizarPedido() {
  // Aquí puedes implementar el código para enviar el pedido por WhatsApp
  // Puedes usar librerías o servicios externos para esta funcionalidad
  let mensajePedido = "¡Hola! Saboreate Mi pedido es:";
  carrito.forEach(item => {
    mensajePedido += `\n${item.producto} - $${item.precio}`;
  });
  mensajePedido += `\nTotal: $${total}`;
  
  // Aquí puedes colocar el código para enviar el mensaje por WhatsApp
  // Por ejemplo:
  window.open(`https://wa.me/+573053780484?text=${encodeURIComponent(mensajePedido)}`);
}

// Puedes agregar más funciones o lógica según sea necesario
