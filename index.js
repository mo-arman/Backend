const {addToCart,changeQTY} = require("./cartModule");


console.log('Hello, world!');
console.log(10+20);

const i = [10,20,30,40,50];
i.forEach((v,i) => {
    console.log(v,"=>",i);
});
console.log(addToCart()); // Add To Cart
console.log(changeQTY()); // 5