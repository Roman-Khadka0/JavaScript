//Dates

let myDate = new Date()
//console.log(myDate.toString())
//console.log(myDate.toDateString());
//console.log(myDate.toISOString());
//console.log(myDate.toJSON());
//console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toLocaleTimeString());

let myNew = new Date(2023,1,21)
//console.log(myNew.toDateString());

let myDay = new Date(2023,2,23,4,61)
//console.log(myDay.toLocaleString());

let exeDate = new Date("2061-12-21")
//console.log(exeDate.toLocaleString())

let myTimestamp = Date.now()
//console.log(myTimestamp)
//console.log(exeDate.getTime());

//console.log(Math.floor(Date.now()/1000))

console.log(myDate.getMonth())