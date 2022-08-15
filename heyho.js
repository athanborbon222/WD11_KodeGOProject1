
let carts = document.querySelectorAll('.add-cart');

let products = [

        {
            name: "CBGB",
            tag: '1',
            price: 145,
            incart: 0
        },
        {
            name: "HEY HO CLASSIC",
            tag: '2',
            price: 165,
            incart: 0
        },
        {
            name: "ABRACADAVER",
            tag: '3',
            price: 195,
            incart: 0
        },
        {
            name: 'TIME BOMB',
            tag: '4',
            price: 220,
            incart: 0
        },
        {
            name: "54-56",
            tag: '5',
            price: 210,
            incart: 0
        }
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]) ;

    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(products) {
    
    let productNumbers = localStorage.getItem('cartNumbers');
    

    productNumbers = parseInt(productNumbers);
    
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;    
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(products);

    
}
    function setItems(products){
        let cartItems = localStorage.getItem('productsInCart');
        cartItems=JSON.parse(cartItems);
        
        if (cartItems != null){
           if (cartItems[products.name] == undefined){
            cartItems = {
                ...cartItems,
                [products.name]: products
            }
           }
            cartItems[products.name].incart += 1;
        } else {
            products.incart = 1;
            cartItems = {
            [products.name]: products   
           }

        }

       
        
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    }

    function totalCost(product) {
      //  console.log("The product price is", product.price);
      let cartCost = localStorage.getItem('totalCost');
     
      console.log("My cart cost is ", cartCost);
      console.log(typeof cartCost);

      if (cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
      } else {
        localStorage.setItem("totalCost", product.price);
      }

    }

    function displaycart(){
        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
        let productContainer = document.querySelector(".products");
        
        

        console.log(cartItems);
       if (cartItems && productContainer ) {
            console.log("running");
            productContainer.innerHTML = '';
            Object.values(cartItems).map( item => {
                productContainer.innerHTML += `
                <div class="d-flex justify-content-evenly  flex-wrap">
                <table class="cartcont rounded">
               

                <tr>
                <td>
                <div class="product">
                <i class="fa-solid fa-circle-xmark"></i> 
                <img src="/image/${item.tag}.jpg" class="img-fluid rounded m-5" style="width: 250px; height: 250px; padding-right:50px">
                <br>
                <span class="text-white txtBanner h5 ms-2 mt-2">${item.name}</span>
                </div>
                </td>
                
                <br>
                <br>

                <td>
                <div class= "prices text-white"><span class="text-white txtBanner display-3 ms-5 ps-5"> ₱${item.price}</span></div>
                </td>

                <td>
                <div class= "quantity text-white ms-5"><span class="text-white txtBanner display-3 ms-5 ps-5"> ${item.incart}</span></div>
                </div>
                </td>

                <td>
                <div class= "total text-white ms-5"><span class="text-white txtBanner display-3 ms-5 ps-5"> ${item.incart * item.price}</span></div>
                </td>
                


                </tr>
                </table>
                </div>

                `
                

            });
       }
    }

    onLoadCartNumbers();  
    displaycart();          

