///var c = 30
let a = 300
if (true) {
    let a = 20
    const b = 30
    //console.log("inner:",a);
     //c = 50
}
//console.log("Outer:",a);
//console.log(b);
//console.log(c);

function one(){
    const name= "Roman";

    function two(){
        const chanel="romankjk";
        console.log(name);
        one()
    }
    console.log(chanel);
    two()
}

if(true){
    const name = "roman" 
    if(name === "roman"){
        const website = " youtube"
        //console.log(name + website);
    }
    //console.log(website);
}
//console.log(name);

function one(num){
    return num +=1;
}
console.log(one(1))

const two = function one(num){//const two lai expression nih bhanin xa
    return num + 2
}
console.log(two(1))