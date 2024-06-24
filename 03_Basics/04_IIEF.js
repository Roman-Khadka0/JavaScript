// Immediately involked function expression (IIEF)

(function chai(){
    //Named iife 
    console.log(`DB CONNECTED`);
})();//global scope ko polution hatauna ko lagi iife use garni ho

((name)=>{
    //not named iife
    console.log(`DB CONNECTED TWO ${name}`)
})("Roman");