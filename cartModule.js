/**
 * 8. Module DP
item has name and price
addToCart({name:'Bun',price:10})

CartModule
 var cart =[]
 let _addToCart = function(item){
  cart.push(item);
 }
 _getCount -> return the size of the cart
 _calcTotal -> iterate through the cart and print the price
_showItems -> iterate through the cart and show the items in the cart

_printBill->print message as 'your bill',call totalItems as getCount() _showItems,_calcTotal inside this method

return
 message:'Your Cart Details',
 addToCart:_addToCart,
 billDetails:_printBill

 */
// var addToCart=[
// {
//     name: 'Toy',
//     price: 100
// },
// {
//     name: 'Mobile',
//     price: 10000
// },
// {
//     name: 'AC',
//     price: 58522
// },
// {
//     name: 'Pan',
//     price: 560
// }
// ]

var cartModule =(function(){

    var cart = [];
    let _addToCart= function(item){
        cart.push(item);
    }
    let _getCount = ()=>{
        return cart.length;
    }
    let _calcTotal = ()=>{
        let total = 0;
        cart.forEach((item)=>{
           total += item.price;
        });
        return total; 
    }
    let _showItems = ()=>{
        return cart.forEach((item)=>{
            console.log(`item name ${item.name}`);
            console.log(`item price ${item.price}`);
        });
    }
    let _printBill = ()=>{
        var message = "Your Bill :";
            console.log(`${message}`);
            console.log(_getCount());
            console.log(_calcTotal());
            _showItems();

    }
    return {
        message: "Your Cart Details",
        addToCart:_addToCart,
        billDetails:_printBill
    }
})();

cartModule.addToCart({
    name: 'Toy',
    price: 100
});
cartModule.addToCart({
    name: 'Mobile',
    price: 10000
});
cartModule.addToCart({
    name: 'AC',
    price: 58522
});
console.log(cartModule.message);
cartModule.billDetails();

