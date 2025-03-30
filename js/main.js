// call the buttons that click on it
const openCart = document.getElementById("open-cart");
const closeCart = document.getElementById("close-cart");
const cart = document.getElementById("cart");

// open cart when click on Open cart
openCart.addEventListener("click", (eo) => {
  cart.style.transform = "translateX(0)";
});

// close cart when click on Open cart
closeCart.addEventListener("click", (eo) => {
  cart.style.transform = "translateX(110vw)";
});

// Add product in cart

let all_products_json;

let item_in_cart = document.querySelector(".item-in-cart");

let product_cart = [];


const countItem = document.querySelector(".count-item")
const countItemCart = document.querySelector(".count-item-cart")
const priceCartHead = document.querySelector(".price-cart-head")
const priceCartTotal = document.querySelector(".price-cart-total")

// add cart in the carts field
function getCartItems() {

  let total_price = 0;

  let items_c = "";
  for (let i = 0; i < product_cart.length; i++) {
    items_c += `
    
    <div class="item-cart">
          <img src="${product_cart[i].img}" alt="product-1" />
          <div class="content">
            <h4>${product_cart[i].name}</h4>
            <p class="price-cart">$${product_cart[i].price}</p>
          </div>
          <button onclick="remove_from_cart(${i})" class="delete-item"><i  class="fa-solid fa-trash-can"></i></button>
        </div>
    
    `;

    total_price += product_cart[i].price

  }
  item_in_cart.innerHTML = items_c;
  // header
  priceCartHead.innerHTML = `$${total_price}`
  countItem.innerHTML = product_cart.length

  // cart
  priceCartTotal.innerHTML =  `$${total_price}`
  countItemCart.innerHTML = `(${product_cart.length}  Item in cart)`
}

// add class active to the add btn when add cart
function addToCart(id, btn) {
  product_cart.push(all_products_json[id]);
  btn.classList.add("active");
  getCartItems()
}



// remove item from cart and remove the active class from the add btn
function remove_from_cart(index) {
  product_cart.splice(index,1)
  getCartItems()

  let addToCartButtons = document.querySelectorAll(".fa-cart-plus")

  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].classList.remove("active")
    
    product_cart.forEach(product => {
      if (product.id == i) {
        addToCartButtons[i].classList.add("active")
      }
    });
  }
}


// Back To Top Buttons 

const btn_up = document.getElementById("arrow-up");
const back_to_top = document.querySelector(".back-to-top");

window.addEventListener("scroll" , (eo) => {

    if (scrollY >= 400) {
        btn_up.style.display = "block";
        
    } else {
        btn_up.style.display = "none";
    }
    
})

btn_up.addEventListener("click" , (eo) => {

    scroll({
        top:0,
        left:0,
        behavior: "smooth"
    })
    
})

back_to_top.addEventListener("click" , (eo) => {
  scroll({
    top:0,
    left:0,
    behavior: "smooth"
})
})


// Change Img 

let bigImg = document.getElementById("bigImg")
function changeImge(img) {
  bigImg.src = img 
}