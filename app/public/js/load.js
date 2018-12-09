function $(s){
    return document.querySelectorAll(s);
}

var list = $("#list li");

for(let i = 0; i < list.length; i++){
    list[i].onclick = function(){
        for(let j = 0; j < list.length; j++){
            list[j].className = "";
        }
        this.className = "selected";
        load('/public/media/'+ this.title);
    }
}

var xhr = new XMLHttpRequest();
function load(url){
    xhr.open("GET", url);
    xhr.responseType = "arraybuffer";
    xhr.onload = function(){
        console.log(xhr.response);
    }
    xhr.send();
}