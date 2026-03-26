document.addEventListener("DOMContentLoaded", () => {
    if(document.getElementById("cart-items")){
        renderCart();
    }

    const clearBtn = document.querySelector(".clear-cart");
    if(clearBtn){
        clearBtn.addEventListener("click", () => {
           cart = [];
           saveCart();
           renderCart();
        });
}

const buyBtn = document.querySelector(".buy-now");
if(buyBtn){
    buyBtn.addEventListener("click", () => {
        if(cart.length === 0){
            alert("Your cart is empty!");
            return;
        }
        alert(" Order Placed! Thank you for your purchase!");
        cart = [];
        saveCart();
        renderCart();
    });
}
});