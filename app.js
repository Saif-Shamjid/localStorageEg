const loadItem = () => {
    cart = getCart();

    for (const item in cart){
        if (cart[item]>1) {
            for(let i = 0; i<cart[item]; i++){
                displayUi(item);
            }
        }
        else{
            displayUi(item);
        }
    }
}

const addItem = () => {
    let inputFild = document.getElementById('product-name');

    inputFildValue = inputFild.value;
    if (!inputFildValue) {
        return;
    }

    // display in the ui
    displayUi(inputFildValue);

    //add to local storage
    addProductToCart(inputFildValue);


    //clearing input fild
    inputFild.value = '';
}

const displayUi = proName => {

    const uiFild = document.getElementById('products');

    let li = document.createElement('li');
    li.innerText = proName;

    uiFild.appendChild(li);
}

const getCart = () => {
    let cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }
    else{
        cartObj = {};
    }
    return cartObj;
}

const addProductToCart = name => {
    let cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name]+1;
    }
    else{
        cart[name] = 1;
    }

    const cartStrFied = JSON.stringify(cart);
    localStorage.setItem('cart',cartStrFied);
}

const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}

loadItem();