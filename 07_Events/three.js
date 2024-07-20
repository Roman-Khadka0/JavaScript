let Roman;
document.querySelector('#start').addEventListener('click',function(){
    Roman = setInterval(function(){
        console.log('Roman',Date.now())
    },1000)
}
)
document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(Roman)
})