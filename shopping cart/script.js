
document.addEventListener('DOMContentLoaded', () => {
    const cart = document.getElementById('cart');
    const totalPriceElement = document.getElementById('total-price');

    function updateTotalPrice() {
        let total = 0;
        const items = document.querySelectorAll('.cart-item');
        items.forEach(item => {
            const price = parseFloat(item.querySelector('.item-price').textContent.replace('$', ''));
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            total += price * quantity;
        });
        totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    cart.addEventListener('click', (e) => {
        if (e.target.classList.contains('quantity-plus')) {
            const quantityElement = e.target.parentElement.querySelector('.quantity');
            quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
            updateTotalPrice();
        } else if (e.target.classList.contains('quantity-minus')) {
            const quantityElement = e.target.parentElement.querySelector('.quantity');
            if (parseInt(quantityElement.textContent) > 1) {
                quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
                updateTotalPrice();
            }
        } else if (e.target.classList.contains('delete-button')) {
            e.target.parentElement.remove();
            updateTotalPrice();
        } else if (e.target.classList.contains('like-button')) {
            e.target.classList.toggle('liked');
        }
    });

    updateTotalPrice();
});
