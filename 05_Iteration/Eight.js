const newNum = [1,2,3,4,5,6,7,8]
//const newNumber = newNum.map((num) => num + 10)
//console.log(newNumber)

const newNumbr = newNum
                        .map((num)=>num * 10)
                        .map((num)=> num + 20)
                        .filter((num)=> num>=50)
console.log(newNumbr)