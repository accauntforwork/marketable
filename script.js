document.addEventListener("DOMContentLoaded", function () {
  var products = document.querySelectorAll(".product");
  var totalCosts = 0;
  var remainingMoney = 1000000;
  function updateCostStatistics() {
    document.getElementById("costs").textContent = totalCosts;
    document.getElementById("remaining-money").textContent = remainingMoney;
  }
  function updatePurchasedProducts(productName, quantity, totalProductPrice) {
    var purchasedProducts = document.getElementById("purchased-products");
    var productElement = document.createElement("div");
    productElement.classList.add("product-statistics");
    productElement.innerHTML =
      "<span>" +
      productName +
      '</span> <span>............................</span><span class="product-quantity">' +
      quantity +
      '</span> <span>kg</span> <span> uchun </span> <span class="total-product-price">' +
      totalProductPrice +
      "</span> <span>$</span>";
    purchasedProducts.appendChild(productElement);
  }
  products.forEach(function (product) {
    var incrementButton = product.querySelector(".increment");
    var decrementButton = product.querySelector(".decrement");
    var quantitySpan = product.querySelector(".selected-product-quantity");
    var priceSpan = product.querySelector(".product-price");
    var totalCostSpan = product.querySelector(".total-cost-product");

    incrementButton.addEventListener("click", function () {
      var quantity = parseInt(quantitySpan.textContent);
      quantity++;
      quantitySpan.textContent = quantity;

      var price = parseInt(priceSpan.textContent);
      var totalProductCost = price * quantity;
      totalCosts += price;
      totalCostSpan.textContent = totalProductCost;

      remainingMoney -= price;
      updateCostStatistics();
      updatePurchasedProducts(
        product.querySelector(".product-name").textContent,
        quantity,
        totalProductCost
      );
    });

    decrementButton.addEventListener("click", function () {
      var quantity = parseInt(quantitySpan.textContent);
      if (quantity > 1) {
        quantity--;
        quantitySpan.textContent = quantity;

        var price = parseInt(priceSpan.textContent);
        var totalProductCost = price * quantity;
        totalCosts -= price;
        totalCostSpan.textContent = totalProductCost;

        remainingMoney += price;
        updateCostStatistics();
      }
    });
  });
});
