const shoping=[
    { name: 'shirt', price:2000, quantity:5},
    { name: 'Pant', price:3000, quantity:3},
    { name: 'Shose', price:5000, quantity:2},
    { name: 'Cap', price:500, quantity:8},
    { name: 'Under', price:600, quantity:3},
    { name: 'watch', price:2500, quantity:4},
]
function totalCost(products){
    let sum=0;
    

    for(let i=0; i<products.length; i++){
        const prduct=products[i];
        const totalPrice=prduct.price * prduct.quantity;
        sum=sum+totalPrice;
        
    }
    return sum;

}
const expence=totalCost(shoping);
console.log(expence);
