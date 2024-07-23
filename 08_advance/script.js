const request = 'https://randomuser.me/api/'
const xhr = new XMLHttpRequest();
xhr.open('get',request)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState)
    if (xhr.readyState===4) {
        console.log(this.responseText)
        const data = JSON.parse(this.responseText)
        console.log(data)
        console.log(data.password)
    }
}
xhr.send()