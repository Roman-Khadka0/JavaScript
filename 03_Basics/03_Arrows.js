const user = {
    username:"Roman Khadka",
    price: 999,
    
    welcome: function(){
     console.log(`welcome ${this.username}`)
    // console.log(this)
    }
}
//user.welcome()
//user.username = "Ram"
//user.welcome() 
//console.log(this);

//function roman(){
  //  let username="Roman"
    //console.log(this.username);
//}
//roman()

//const ram = function(){
  // let username="Roman"
    //console.log(this.username);
//}
//ram()

/*const ram = ()=>{
    let username="Roman"
     console.log(this.username);
 }
 ram()*/

 
 const roman = (num1,num2) => {
    return num1 + num2;
 }
//console.log(roman(100,100))


//const add=(num1, num2) => num1 + num2
//console.log(add(100,100))

const add=(num1, num2) => ({username:"Roman"})
console.log(add(100,100))