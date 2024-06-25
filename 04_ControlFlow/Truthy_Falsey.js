const email = []
if (email) {
    console.log("User mail available");
} else {
    console.log("Please enter user mail");
}

/*
falsy value
false, 0 .-0 ,"", BingInt 0n, null, undefined, NaN
*/

/*
truthy values
"0",'false'," ",[],{},function(){} 
*/
//if(email.length===0){
  //  console.log("empty array");
//}

const emptObj={}
if(Object.keys(emptObj).length === 0){
    console.log("Empty object");
}

//Nullish Coalescing Operator (??):null undefined
let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1= undefined??15

val1 = null ?? 10??20
console.log(val1);

//terinary operation

//condition ? true: false

const icePrice = 100
icePrice >= 200 ? console.log("less than 80") : console.log("more than 80")