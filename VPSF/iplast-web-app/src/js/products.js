// This file manages the functionality related to product inventory.
// It includes functions for adding, updating, and deleting products, as well as displaying the product list.

let products = [];

function addProduct(name, quantity, price) {
    const product = {
        id: products.length + 1,
        name: name,
        quantity: quantity,
        price: price
    };
    products.push(product);
    displayProducts();
}

function updateProduct(id, name, quantity, price) {
    const product = products.find(p => p.id === id);
    if (product) {
        product.name = name;
        product.quantity = quantity;
        product.price = price;
        displayProducts();
    }
}

function deleteProduct(id) {
    products = products.filter(p => p.id !== id);
    displayProducts();
}

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - Quantity: ${product.quantity}, Price: $${product.price}`;
        productList.appendChild(listItem);
    });
}

// Example usage
addProduct('Product 1', 10, 29.99);
addProduct('Product 2', 5, 19.99);