document.addEventListener('DOMContentLoaded',()=>{
    const products=[
        {id:1,name:"product 1",price:29.99},
        {id:2,name:"product 2",price:20.99},
        {id:3,name:"product 3",price:25.99},
        {id:4,name:"product 4",price:27.99},
    ];

const cart=[];

const productlist=document.getElementById("product-list");
const cartitems =document.getElementById("cart-item");
const emptycartmessage= document.getElementById("empty-cart");
const carttotalmessage=document.getElementById("cart-total");
const totalpricedisplay =document.getElementById("total-price");
const checkoutbtn=document.getElementById("checkout-btn");

products.forEach(product =>{
    const productdiv=document.createElement('div');
    productdiv.classList.add("product");
    productdiv.innerHTML=`<span>${product.name} - $${product.price}</span> 
    <button class="atc-btn" data-id="${product.id}">add to cart</button>`;
    productlist.appendChild(productdiv);

});
productlist.addEventListener("click",(e)=>{
    if(e.target.tagName === "BUTTON"){
        const productidv=parseInt(e.target.getAttribute("data-id"));
        const product =products.find(p => p.id === productidv)
        addtocart(product)
    }

});
function addtocart(product){
    cart.push(product)
    rendercart();
}


function rendercart(){
    cartitems.innerText="";
    let totalprice=0;
    if(cart.length>0){
        emptycartmessage.classList.add("hidden")
        emptycartmessage.classList.remove("hidden");
        cart.forEach((item,index)=>{
            totalprice+=item.price;
             const cartitem= document.createElement('div')
             cartitem.innerHTML=`${item.name} - $${
                item.price
             }`
             cartitems.appendChild(cartitem)
             totalpricedisplay.textContent=`${totalprice}`

        });

    }else{
        emptycartmessage.classList.remove("hidden")
    }

}








})