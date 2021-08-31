var xhr = new XMLHttpRequest();
xhr.open("GET", "www.baidu.com");
xhr.onreadystatechange = function() {
    if(xhr.readyState !== 4) {
        return 
    }
    if(xhr.status === 200) {
        console.log("请求成功了", xhr.responseText)
    }else {
       console.log("Http error", xhr.status, xhr.statusText)
    }
}
xhr.timeout = 3000;
xhr.upload.onprogress = function(p) {
    console.log(Math.round((p.loaded/p.total) *100) + "%");
}
xhr.send()