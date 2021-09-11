//auto update
const updateFromLocalStr = () => {
    let cart = setLocalStorage();
    
    for(let i in cart){
        if (cart[i].qun > 1) {
            for(let j=0; j<cart[i].qun;j++){
                updateUi(i,cart[i].prc);
            }
        }
        else{
            updateUi(i,cart[i].prc);
        }
    }
}


const submitBtn = () => {
    let prdPriceFild = document.getElementById('price');
    let prdNameFild = document.getElementById('name');
    let prdPrice = prdPriceFild.value;
    let prdName = prdNameFild.value;

    //checking
    if (!prdName || !prdPrice) {
        return;
    }

    // display Products
    updateUi(prdName, prdPrice);
    
    // update in localStorage
    updateLocalStorage(prdName,prdPrice)
    //clearing inputFild
    prdNameFild.value = '';
    prdPriceFild.value = '';

}


const updateUi = (prdName,prdPrice) => {
    const showFild = document.getElementById('show-section');

    let li = document.createElement('li');
    li.innerText = `${prdName}: ${prdPrice}$`;

    showFild.appendChild(li);
}

const setLocalStorage = () => {
    let allItem = localStorage.getItem('allItem');
    let cart;
    if (allItem) {
        cart = JSON.parse(allItem);
    }
    else{
        cart = {};
    }
    return cart;
}

const updateLocalStorage = (name,price) =>{
    let cart = setLocalStorage();

    //dublicate
    if (cart[name]) {
        cart[name].qun = cart[name].qun + 1;
    }
    else{
        cart[name] = {prc: price,qun:1};
    }

    let strCart = JSON.stringify(cart);
    localStorage.setItem('allItem',strCart);
}

const resetBtn = () => {
    document.getElementById('show-section').textContent = '';
    localStorage.removeItem('allItem');
}

updateFromLocalStr();