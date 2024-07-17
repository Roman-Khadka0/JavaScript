/*document.getElementById('owl').onclick = function(){
  //  alert("Ullu Teri Maki Choot")
}*/

/*
document.getElementById('photoshop').addEventListener('click',function(){
  alert('Photoshop hai radi ko ban')
},false)
document.getElementById('japan').addEventListener('click',function(){
  alert('japan hey benchood')
},false)
document.getElementById('river').addEventListener('click',function(){
  alert('River hey makaloda')
},false)
document.getElementById('prayer').addEventListener('click',function(){
  alert('Pray lar raha hey bhai')
})

  document.getElementById('images').addEventListener('click',function(e){
    //console.log("inside ul") 
    
    },true)

    
  document.getElementById('owl').addEventListener('click',function(e){
    console.log("owl clicked") 
    e.stopPropagation()
    },true)

    document.getElementById('google').addEventListener('click',function(e){
      console.log('google clicked')
      e.preventDefault()
      e.stopPropagation()
    })*/

      document.querySelector('#images').addEventListener('click',function(e){
        console.log(e.target.parentNode)
        if(e.target.tagName==='IMG'){
          let removeIt = e.target.parentNode
          removeIt.remove()
        }
        console.log(e.target.tagName)
        
      })