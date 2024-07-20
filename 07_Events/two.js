const sayRoman = function(){
    console.log('roman')
}
setTimeout(sayRoman,2000)


const changeText = function(){
    document.querySelector('h1').innerHTML = 'Best Coder' 
}
const changeMe = setTimeout(changeText,2000)

document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(changeMe)
    console.log('stopped')
})