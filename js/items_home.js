fetch('js/items.json')
            .then(response => response.json())
            .then(data => {
              const swiper_items_sale = document.getElementById("swiper_items_sale")
              const other_product_swiper = document.getElementById("other-product-swiper")
              const other_product_swiper2 = document.getElementById("other-product-swiper2")
              all_products_json = data
              data.forEach(product => {
                if (product.old_price) {
                  const precent_disc = Math.floor((product.old_price - product.price)/ product.old_price * 100)


                  swiper_items_sale.innerHTML += `
                  
                  
            <div class="product swiper-slide">
              
              <div class="icons">
                <span></span><i onclick="addToCart(${product.id} , this)" class="fa-solid fa-cart-plus"></i></span>
                <span></span><i class="fa-solid fa-heart"></i></span>
                <span></span><i class="fa-solid fa-share"></i></span>
              </div>

              <span class="sale-present">${precent_disc}%</span>

              <div class="img-product">
                <img src="${product.img}" alt="product-1">
                <img class="img-hover" src="${product.img_hover}" alt="product-1">
              </div>
              <h3 class="name-product"><a href="#">${product.name}</a></h3>
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>

              <div class="price">
                <p><span>$${product.price}</span></p>
                <p class="old-price">$${product.old_price}</p>
              </div>
            </div>
                  
                  `
                }
              });






              data.forEach(product => {
                
                  const precent_disc = Math.floor((product.old_price - product.price)/ product.old_price * 100)


                  other_product_swiper.innerHTML += `
                  
                  
            <div class="product swiper-slide">
              
              <div class="icons">
                <span></span><i onclick="addToCart(${product.id} , this)" class="fa-solid fa-cart-plus"></i></span>
                <span></span><i class="fa-solid fa-heart"></i></span>
                <span></span><i class="fa-solid fa-share"></i></span>
              </div>

              

              <div class="img-product">
                <img src="${product.img}" alt="product-1">
                <img class="img-hover" src="${product.img_hover}" alt="product-1">
              </div>
              <h3 class="name-product"><a href="#">${product.name}</a></h3>
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>

              <div class="price">
                <p><span>$${product.price}</span></p>
              
              </div>
            </div>
                  
                  `
              
              });




              data.forEach(product => {
                
                const precent_disc = Math.floor((product.old_price - product.price)/ product.old_price * 100)


                other_product_swiper2.innerHTML += `
                
                
          <div class="product swiper-slide">
            
            <div class="icons">
              <span></span><i onclick="addToCart(${product.id} , this)" class="fa-solid fa-cart-plus"></i></span>
              <span></span><i class="fa-solid fa-heart"></i></span>
              <span></span><i class="fa-solid fa-share"></i></span>
            </div>

            

            <div class="img-product">
              <img src="${product.img}" alt="product-1">
              <img class="img-hover" src="${product.img_hover}" alt="product-1">
            </div>
            <h3 class="name-product"><a href="#">${product.name}</a></h3>
            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>

            <div class="price">
              <p><span>$${product.price}</span></p>
            
            </div>
          </div>
                
                `
            
            });








            })