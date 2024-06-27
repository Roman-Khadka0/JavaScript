// for of

const arr = [1,2,3,4,5]

for (const num of arr) {
   // console.log(num);
}

const greetings = "hello"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map()
map.set('IN',"iNDIA");
map.set('Usa',"Unted states of america")
map.set('Npl',"Nepal")
//console.log(map);

for (const [Key, value] of map) {
   // console.log("key=",Key,"//","Value=",value);
}

const myObj = {
    game:'Gta',
    game2:'NFS'
}

//for (const [key, value] of myObj) {
  //  console.log(Key);
//} not For Objects
