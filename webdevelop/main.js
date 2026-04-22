let cartcount = 0;

const button = document.getElementById("addBtn");
const cartDispay = document.getElementById("cart-count");

button.addEventListener("click",function(){
    cartcount++;
    cartDispay.textContent = cartcount;
});
