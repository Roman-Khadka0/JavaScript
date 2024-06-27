//let array = ["Roman","Ram","Nani","Sumanta","Rashmita","Susma"]

//const value = array.forEach((item)=> {
  //  console.log(item)
//})
//console.log(value);

//const array = [1,2,3,4,5,6,7,8,9,10]
//const newNum = array.filter((num)=> num > 4)
//console.log(newNum);


//const myArr = [1,2,3,4,5,6,78,98]
//const data = myArr.filter((num)=>{
 //return num > 4
//}
//)
//console.log(data)

//const newNum = []
//myArr.forEach((num)=>{
  //if(num>4){
    //newNum.push(num)
  //}
//})
//console.log(newNum)

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBook = books.filter((bk)=> bk.publish > 1989 && bk.genre === "History")
console.log(userBook)