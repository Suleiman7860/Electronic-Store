document.addEventListener("DOMContentLoaded", () => {
    const cartIcon = document.getElementById("cart-icon");
    const cartDropdown = document.getElementById("cart-dropdown");
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");
    const cartCount = document.getElementById("cart-count");

    let cart = [];

    // Toggle Cart Visibility
    cartIcon.addEventListener("click", () => {
        cartDropdown.style.display = cartDropdown.style.display === "block" ? "none" : "block";
    });

    // Add Items to Cart
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");
            const price = parseFloat(button.getAttribute("data-price"));

            // Check if item is already in cart
            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1 });
            }

            updateCart();
        });
    });

   
    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;
        let itemCount = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;
            itemCount += item.quantity;

            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
            cartItems.appendChild(li);
        });

        totalPrice.textContent = total.toFixed(2);
        cartCount.textContent = itemCount; // Update cart count in the icon
    }
});


function searchFunction() {
    let query = document.getElementById("searchInput").value.toLowerCase();
    let resultsDiv = document.getElementById("searchResults");

    if (query === "") {
        resultsDiv.innerHTML = "<p>Please enter a search term.</p>";
        return;
    }

   
    let data = ["IPhone", "Samsung", "ACER", "Canon","Led Projector","Boat Earbuds"];
    let filteredResults = data.filter(item => item.includes(query));

    if (filteredResults.length > 0) {
        resultsDiv.innerHTML = "<p>Results: " + filteredResults.join(", ") + "</p>";
    } else {
        resultsDiv.innerHTML = "<p>No results found.</p>";
    }
}
