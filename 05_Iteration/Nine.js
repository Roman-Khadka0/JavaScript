const arr = [1,2,3]
//const total = arr.reduce(function (acc,crrval){
   // console.log(`Accumulation: ${acc},Current value:${crrval}`);
  //  return acc + crrval
//},3)

//const total = arr.reduce((acc,curr)=>acc+curr,0)
//console.log(total);

const shoppinCart = [{
    name: "js",
    price: 1500
},
{
    name: "py",
    price: 1500
},
{
    name: "java",
    price: 500
},
{
    name: "ruby",
    price: 1700
}
]

const total = shoppinCart.reduce((acc,item)=>acc+item.price,0)
console.log(total);