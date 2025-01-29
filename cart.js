// Initialize the cart as an empty array
let cart = [];

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
    const item = { name: itemName, price: parseFloat(itemPrice) };
    cart.push(item);
    updateCartUI();
}

// Function to update the cart's UI
function updateCartUI() {
    // Get the cart list element and clear it
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = '';

    // Add all items from the cart to the list
    let total = 0;
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
        total += item.price;
    });

    // Update the total price in the cart
    document.getElementById("cart-total").textContent = total.toFixed(2);

    // If there are items in the cart, show the Place Order button
    if (cart.length > 0) {
        document.getElementById("place-order").style.display = "inline-block";
    } else {
        document.getElementById("place-order").style.display = "inline-block";
    }
}

// Function to handle adding an item to the cart when the button is clicked
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const itemName = this.getAttribute('data-item');
        const itemPrice = this.getAttribute('data-price');
        addToCart(itemName, itemPrice);
    });
});

// Function to handle placing an order (basic functionality)
function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty. Please add items to the cart before placing an order.");
    } else {
        // Show the Proceed to Payment button after placing the order
        document.getElementById("proceed-to-payment").style.display = "inline-block";
    }
}

// Function to handle proceeding to payment
function proceedToPayment() {
    // Redirect to the payment page
    window.location.href = "payment.html";  // Redirect to the payment page
}
