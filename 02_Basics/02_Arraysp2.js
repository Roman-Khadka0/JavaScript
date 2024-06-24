const marvle = ["Ironman","Spiderman","aquaman"]
const dc = ["BAtman","Superman","giliman"]
//marvle.push(dc)
//console.log(marvle);
//console.log(marvle[3][1]);

//const allHeros = marvle.concat(dc)
//console.log(allHeros);

const allHeros = [...marvle,...dc]
//console.log(allHeros);

const lol = [1,2,3,[4,5],6,[6,7,[8,9]]]
const fixedArray = lol.flat(Infinity)
console.log(fixedArray);
console.log(Array.isArray(fixedArray));
console.log(Array.from({name : "Roman"}))//interesting


let score = 100
let score1 = 200
let score2 = 300
console.log(Array.of(score, score1, score2))