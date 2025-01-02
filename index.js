<script>
    // Initialize an empty cart
    const cart = [];

    // Function to add a product to the cart
    function addToCart(productName, productPrice) {
        cart.push({ name: productName, price: productPrice });
        alert(`${productName} has been added to your cart.`);
        updateCartSummary();
    }

    // Function to calculate the total price
    function calculateTotal() {
        return cart.reduce((total, product) => total + product.price, 0);
    }

    // Function to update and display the cart summary
    function updateCartSummary() {
        const cartSummary = document.getElementById('cart-summary');
        const total = calculateTotal();

        if (cart.length === 0) {
            cartSummary.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cartSummary.innerHTML = `
                <h3>Cart Summary</h3>
                <ul>
                    ${cart.map(product => `<li>${product.name} - $${product.price}</li>`).join('')}
                </ul>
                <p><strong>Total:</strong> $${total.toFixed(2)}</p>
            `;
        }
    }

    // Function to toggle the cart modal visibility
    function toggleCartModal() {
        const cartModal = document.getElementById('cart-modal');
        cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
    }

    // Attach event listeners to buttons
    document.addEventListener('DOMContentLoaded', () => {
        const buttons = document.querySelectorAll('.product button');
        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                const productElement = event.target.closest('.product');
                const productName = productElement.querySelector('h3').textContent;
                const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('$', ''));
                addToCart(productName, productPrice);
            });
        });

        // Close button for the modal
        document.getElementById('close-modal').addEventListener('click', toggleCartModal);

        // Open cart modal on cart icon click
        document.getElementById('open-cart').addEventListener('click', toggleCartModal);
    });
</script>
