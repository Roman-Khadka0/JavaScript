//singleton(object created from constructor)
//Object.create (constructor)

// Object litrals
const mySym = Symbol("my1")

const Rnuser = {
    name: "Roman",
    age: 1,
    [mySym]: "my1",
    location: "Jorpati",
    isLoggedin: false,
    lastLoggedin: ["Monday", "Tuesday"]
}

//console.log(Rnuser.location);
//console.log(Rnuser["location"]);
//console.log(typeof Rnuser[mySym]);

Rnuser.name = "Ram"
//console.log(Rnuser);

//Object.freeze(Rnuser)
//Rnuser.name = "Rada"
//console.log(Rnuser);

Rnuser.greeting = function(){
    console.log("Hello babu haru");
}
console.log(Rnuser.greeting());

Rnuser.greetingTwo = function(){
    console.log(`Hello ${this.name} dai`);
}
console.log(Rnuser.greetingTwo());