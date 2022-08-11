
let carts = document.querySelectorAll('.add-cart');

let products = [

        {
            name: 'CBGB',
            price: 145,
            incart: 0
        },
        {
            name: 'HEY HO CLASSIC',
            price: 165,
            incart: 0
        },
        {
            name: 'ABRACADAVER',
            price: 195,
            incart: 0
        },
        {
            name: 'TIME BOMB',
            price: 220,
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

    onLoadCartNumbers();            