let cart = [];
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// Añadir productos al carrito
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = parseFloat(button.getAttribute('data-price'));
        cart.push({ product, price });
        updateCart();
    });
});

// Actualizar el contenido del carrito
function updateCart() {
    cartCount.textContent = cart.length;
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${item.product} - $${item.price} MXN
                <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Eliminar</button>
            </li>
        `;
        total += item.price;
    });

    totalPriceElement.textContent = total.toFixed(2);
}

// Eliminar producto del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Mostrar el modal del carrito
document.getElementById('cart-btn').addEventListener('click', () => {
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    cartModal.show();
});

// Simular proceso de pago y entrega
document.getElementById('proceed-to-pay').addEventListener('click', () => {
    const total = parseFloat(totalPriceElement.textContent);
    if (total > 0) {
        alert(`Tu pago de $${total} MXN ha sido procesado con éxito. El pedido está en camino.`);
    } else {
        alert('No tienes productos en el carrito.');
    }
});
