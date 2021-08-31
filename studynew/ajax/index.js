import { response } from "express";

let xhr = new XMLHttpRequest();
xhr.open("GET", url)

xhr.onreadystatechenge = function() {
    if(xhr.readyState !== 4) {
        return;
    }
    if(xhr.status === 200) {
        console.log(xhr.responseText)
    }else {
        console.log("HTTP error", xhr.status, xhr.statusText)
    }
}
xhr.timeout = 3000;
xhr.ontimeout = () => {
     console.log("Timeout", xhr.responseURL)
}
xhr.send()
///////
fetch("https://url", {
    method: "GET"
}).then(function(res) {
   if(res.ok) {
       return response.json()
   }
   throw console.error("response was not ok");
}).then((json) => {
   console.log(json)
}).catch(err => {
    console.log(err)
})

//fetch设置超时
function fetch(url, initObj, timeout = 3000) {
    return new Promise((resolve, reject) => {
        fetch(url, initObj).then((res) => {
            resolve(res)
        }).catch(reject)
        setTimeout(reject, timeout)
    })
}