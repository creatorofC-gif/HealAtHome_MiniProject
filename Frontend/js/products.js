document.addEventListener('DOMContentLoaded', () => {
const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach(btn=> {
    btn.addEventListener('click', () => {
        const name = btn.dataset.name;
        const price = parseInt(btn.dataset.price);
        const image = btn.dataset.image;
        const item = cart.find(p => p.name === name);
        if(item){
            item.quantity++;
        }
        else{
            cart.push({name, price, image, quantity: 1});
        }
        saveCart();
        alert(name +  " added to cart!");
    });
});
    
});