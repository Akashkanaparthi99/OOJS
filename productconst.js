function Product(name, brand){
    this.name = name;
    this.brand = brand;

    this.getDetails = function() {
        console.log(`${this.name, this.brand}`)
    }   
}

Product.prototype.category="mobile";

Product.prototype.price=12000;

Product.prototype.totalCost=function(quantity){
    console.log(quantity*this.price);
}

let prod=new Product("IQOO 7","Vivo");
prod.totalCost(15);

let prod1=new Product("IQOO 9","Vivo");
prod1.totalCost(25);

let prod2=new Product("IQOO 9 SE","Vivo");
prod2.totalCost(52);

let prod3=new Product("Iphone 13","Apple");
prod3.totalCost(45);




