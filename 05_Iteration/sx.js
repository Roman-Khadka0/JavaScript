const coding = ["js","Ruby","java","py","cpp" ]

//coding.forEach( function (item) {
    //console.log(item);
//} )

//coding.forEach( (item) => {
  //  console.log(item)
//} )


//function printMe(item){
  //  console.log(item);
//}
//coding.forEach(printMe)

//coding.forEach( (item, index, coding)=> {
  //  console.log(item,index,coding);
//} )

const lang = [
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
lang.forEach((item)=> {
    console.log(item.languageName);
})