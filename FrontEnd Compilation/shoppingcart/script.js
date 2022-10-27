//show cart
(function(){
    const cartInfo = document.getElementById("cart-info");
    const cart = document.getElementById("cart");
    cartInfo.addEventListener("click", function(){
        cart.classList.toggle("show-cart");
    });
})();
//add items to the cart
(function(){
    const cartBtn = document.querySelectorAll(".store-item-icon");
    cartBtn.forEach(function(btn) {
        btn.addEventListener("click",function(event) {
            //console.log(event.target);
if(event.target.parentElement.classList.contains("store-item-icon")){
    alert("item ajouté au panier"); 
    let fullPath = 
    event.target.parentElement.previousElementSibling.src;
    let pos = fullPath.indexOf("img") + 3;
    let partPath = fullPath.slice(pos);
   const item = {};
   item.img = `img-cart${partPath}`; 
let name = 
   event.target.parentElement.parentElement.nextElementSibling
      .children[0].children[0].textContent;
    item.name = name;
    let price = 
   event.target.parentElement.parentElement.nextElementSibling
      .children[0].children[1].textContent;
      let finalPrice = price.slice(1).trim();
item.price = finalPrice;
   const cartItem = document.createElement('div');
   cartItem.classList.add(
   "cart-item",
   "d-flex",
   "justify-content-between",
   "text-capitalize",
   "my-3"
   );
   cartItem.innerHTML = `
     <img src="${item.img  }" class="img-fluid rounded-circle" id="item-img" alt="">
     <div class="item-text">

       <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
      
       <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
        <span>CFA</span>
     </div>
     <a href="#" id='cart-item-remove' class="cart-item-remove">
       <i class="fas fa-trash"></i>
     </a>
   </div>
   `;
   const cart = document.getElementById("cart");
   const total = document.querySelector(".cart-total-container");

   cart.insertBefore(cartItem, total);
   showTotals(); 
}
        });
    });
    function showTotals() {
        const total = [];
        const items = document.querySelectorAll(".cart-item-price");
    items.forEach(function(item){
        total.push(parseFloat(item.textContent));
    });
const totalMoney = total.reduce(function(total,item){
    total += item; 
    return total;
    console.log(total);
}, 0);
const finalMoney = totalMoney.toFixed(2);

dom(finalMoney,total);
    }
}

)();
//add

function soustractTotals(UN) {
    let  finalMoney = 0;
    finalMoney = (parseInt(Document.getElementById('item-total').innerHtml))-UN;
console.log(finalMoney);
itemcount = (parseInt(Document.getElementById('item-count').innerHtml)) -1;

dom(finalMoney,itemcount);
document.getElementById("item-count").textContent = itemcount;
   }



// dom
function dom (un,deux) {
    document.getElementById("cart-total").textContent = un;
document.querySelector(".item-total").textContent = un;
document.getElementById("item-count").textContent = deux.length;
}

//Delete item from cart
(function ItemDeletion(){
    const ItemToDelete = document.getElementById('cart');
    let RemovePrice = 0;
    ItemToDelete.addEventListener('click', e =>{
        if(e.target.parentElement.classList.contains('cart-item-remove')){
            const item = e.target.parentElement.parentElement;
            console.log(item);
           
            const indexed = item.children.item(1);
            const indexedPrice = parseInt(indexed.children.item(1).innerHTML);


              

        alert('element supprimé du panier');
        var total = document.querySelector(".cart-total-container");
        var Indexed2 = parseInt((total.children.item(1)).textContent);
        console.log(Indexed2);


        var finalMoney = Indexed2 - indexedPrice;

      item.parentElement.removeChild(item);   
      document.getElementById("cart-total").textContent = finalMoney;
      document.querySelector(".item-total").textContent = finalMoney;
      document.getElementById("item-count").textContent = total.length;


          
          //  remove item price from total;





        }
        
    })
   
})();
 //delete All iTEMS
(function deletAllArticle (){
    const deletItem = document.getElementById('clear-cart');
    deletItem.addEventListener('click', ()=>{
        const allItem = document.querySelectorAll('.cart-item-remove')
        allItem.forEach(item =>{
            item.parentElement.parentElement.removeChild(item.parentElement);
            // back total to 0
             total = 0;
             finalMoney = 0;
dom(total,finalMoney);

});
});
})
();