function name() {
    console.log("R");
    console.log("O");
    console.log("M");
    console.log("A");
    console.log("N");
}
//name()

/*  function addNum(num1, num2){//parameter
 console.log(num1 + num2)
}
addNum(2,2)//Arguement */

function addNum(num1, num2){//parameter
    //let result = num1 + num2
    //return result
    return num1 + num2
   }
   
   const result = addNum(2, 2)
  // console.log("Result: ",result);

   function Username(loginUsername){
    if(loginUsername === undefined){
       // console.log("Enter username");
        return
     } 
     return `${loginUsername} just loggedd in`
    }
   //console.log(Username());

   function myCart(val1,val2,...num1){//rest ko use gareko
    return num1
   }
   console.log(myCart(2000,1000,9200,3443));

   const user = {
    username:"Roman",
    price:450
   }

   function handleObject(anyobject){
       console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
   }
   //handleObject(user)
   handleObject({
    username:"Sam",
    price:230
   })

   const myarr = [200,399,400,500]

   function secondHandler(newArray){
    return newArray[0]
   }

   console.log(secondHandler(myarr))