const addToDb = id => {
    const store_cart = getDb();
    if(id in store_cart){

    }
    else{
        store_cart[id] =1;
    }
    updateDb(store_cart);
}
const updateDb = cart =>{
    localStorage.setItem('service_cart', JSON.stringify(cart))
}

const getDb = () => {
    const exists = localStorage.getItem('service_cart');
    return exists ? JSON.parse(exists) :
}