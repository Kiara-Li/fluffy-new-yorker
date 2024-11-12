let listProductHTML=document.querySelector('.listProduct');
let listCartHTML=document.querySelector('.listCart');
let iconCart=document.querySelector('.icon-cart');
let iconCartSpan=document.querySelector('.icon-cart span');
let body=document.querySelector('body');
let closeCart =document.querySelector('.close');
let products = [];
let cart = [];

iconCart.addEventListener('click',()=> {
    body.classList.toggle('showCart');
    0})
closeCart.addEventListener('click',()=> {
    body.classList.toggle('showCart')

})

    const addDataToHTML= () => {
        if(products.length>0) 
        {
         products.forEach(product=> { 
            let newProduct=document.createElement ('div');
            newProduct.dataset.id=product.id;
            newProduct.classList.add('item');
            newProduct.innerHTML =
            <><img src="${product.image}" alt=""></img><h2>${product.name}</h2><div class="price">$${product.price}</div><button class="addCart">Add to Cart</button></>;
            listProductHTML.appendchild(newProduct);

         });
    
    
        }
    }
const intiApp =() =>{
    fetch('products.json')
    .then(response=>response.json())
    .then(data =>{
       products = data;
       addDataToHTML();

       if (localStorage.getItem('cart')){
        cart = Josn.parse(localStorage.getItem('cart'));
        addCartToHTML();
       }
    })
}

initApp();
