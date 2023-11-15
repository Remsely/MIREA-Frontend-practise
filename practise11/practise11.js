document.addEventListener("DOMContentLoaded", function () {
    const cartItemsElement = document.getElementById("cart-items");
    const totalElement = document.getElementById("total-price");
    const itemNameInput = document.getElementById("item-name");
    const itemPriceInput = document.getElementById("item-price");

    const cartItemsData = [
        { name: "Товар 1", price: 20 },
        { name: "Товар 2", price: 30 },
        { name: "Товар 3", price: 15 },
    ];

    function displayCartItems() {
        cartItemsData.sort((a, b) => a.price - b.price);

        cartItemsElement.innerHTML = "";
        let total = 0;

        cartItemsData.forEach((item, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${item.name} - ${item.price} руб.</span>
                <button onclick="removeItem(${index})">Удалить</button>
            `;
            cartItemsElement.appendChild(listItem);

            total += item.price;
        });

        totalElement.textContent = `${total} руб.`;
    }

    window.removeItem = function (index) {
        cartItemsData.splice(index, 1);
        displayCartItems();
    };

    window.addItem = function () {
        const itemName = itemNameInput.value.trim();
        const itemPrice = parseFloat(itemPriceInput.value);

        if (itemName && !isNaN(itemPrice) && itemPrice > 0) {
            cartItemsData.push({ name: itemName, price: itemPrice });
            displayCartItems();
            itemNameInput.value = "";
            itemPriceInput.value = "";
        } else {
            alert("Пожалуйста, введите корректные данные.");
        }
    };

    displayCartItems();
});