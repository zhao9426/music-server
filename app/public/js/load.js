function $(s){
    return document.querySelectorAll(s);
}

/* const AC = new (window.AudioContext || window.webkitAudioContext);
const xhr = new XMLHttpRequest();
const gainNode = AC[AC.createGain ? 'createGain' : '.createGainNode']();
const analyser = AC.createAnalyser();
 */
const size = 128;
const mv = new MusicVisualizer({
    size: size,
    visualizer: draw
});

//analyser.fftSize = size * 2;
let type = "column";
/* analyser.connect(gainNode);
gainNode.connect(AC.destination); */

var list = $("#list li");

for(let i = 0; i < list.length; i++){
    list[i].onclick = function(){
        for(let j = 0; j < list.length; j++){
            list[j].className = "";
        }
        this.className = "selected";
        mv.play('/public/media/'+ this.title);
    }
}

var types = $("#type li");
for(let i = 0; i < types.length; i++){
    types[i].onclick = function(){
        for(let i = 0; i < types.length; i++){
            types[i].className = "";
        }
        type = this.getAttribute('data-type');
        this.className = "selected";
    }
}


/* var source = null;
var count = 0;
function load(url){
    var n = ++count;
    source && source[source.stop?'stop':'noteOff']();
    xhr.abort();
    xhr.open("GET", url);
    xhr.responseType = "arraybuffer";
    xhr.onload = function(){
        if(n != count) return;
        AC.decodeAudioData(xhr.response, function(buffer){
            if(n != count) return;
            var bufferSource = AC.createBufferSource();
            bufferSource.buffer = buffer;
          //  bufferSource.connect(AC.destination);
          //  bufferSource.connect(gainNode);
            bufferSource.connect(analyser)
            bufferSource[bufferSource.start ? "start":"noteOn"](0);
            source = bufferSource;
        }, function(error){
            console.error(err);
        })
      //  console.log(xhr.response);
    }
    xhr.send();
} */

/* function visualizer(){
    var arr = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(arr);
    requestAnimationFrame = window.requestAnimationFrame || 
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame;
    function v(){
        analyser.getByteFrequencyData(arr);
      //  console.log(arr);
        draw(arr);
        requestAnimationFrame(v);
    }
    requestAnimationFrame(v);
    console.log(arr, "visualizer");
}

visualizer(); */

$("#volume")[0].onchange = function() {
    mv.changeVolume(this.value / this.max);
}

var box = $("#box")[0];
var height, width;
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
box.appendChild(canvas);
var Dots = [];

function random(m, n){
    return Math.round(Math.random()*(n - m) + m);
}

function getDots(){
    Dots = [];
    for(let i = 0; i < size; i++) {
        let x = random(0, width);
        let y = random(0, height);
        let color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
        Dots.push({
            x,
            y, 
            color
        });
    }
}

var line;
function resize(){
    height = box.clientHeight;
    width = box.clientWidth;
    canvas.height = height;
    canvas.width = width;
    line = ctx.createLinearGradient(0, 0, 0, height);
    line.addColorStop(0, 'red');
    line.addColorStop(0.5, 'yellow');
    line.addColorStop(1, 'green');
    getDots();
}

function draw(arr) {
    ctx.clearRect(0, 0, width, height);
    let w = width / size;
    ctx.fillStyle = line;
    for(let i = 0; i < size; i++){
        if(type == 'column'){
            let h = arr[i] / 256 * height;
            ctx.fillRect(w * i, height - h, w * 0.6, h);
        } else if(type == 'dot'){
            ctx.beginPath();
            let o = Dots[i];
            let r = arr[i] / 256 * 50;
            ctx.arc(o.x, o.y, r, 0, Math.PI*2, true);
            let g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, r);
            g.addColorStop(0, '#fff'); 
            g.addColorStop(0, o.color);
            ctx.fillStyle = g;
            ctx.fill();
           // ctx.strokeStyle = '#fff';
          //  ctx.stroke();
        }
       
    }
}

resize();
getDots();
console.log(Dots, "dots");
window.onresize = resize;