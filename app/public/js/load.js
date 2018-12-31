function $(s){
    return document.querySelectorAll(s);
}

const size = 128;
const mv = new MusicVisualizer({
    size: size,
    visualizer: draw
});

let type = "column";

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
        let color = `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, 0)`;
        Dots.push({
            x,
            y, 
            dx: random(1, 4),
            color,
            cap: 0
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
    let cw = w * 0.6;
    let ch = cw > 10 ? 10 : cw;
    ctx.fillStyle = line;
    for(let i = 0; i < size; i++){
        if(type == 'column'){
            let o = Dots[i]
            let h = arr[i] / 256 * height;
            ctx.fillRect(w * i, height - h, w * 0.6, h);
            ctx.fillRect(w * i, height - (o.cap + ch), cw, ch);
            o.cap--;
            if(o.cap < 0){
                o.cap = 0;
            }
            if(h > 0 && o.cap < h + 40){
                o.cap = h + 40 > height - ch ? height - ch : h + 40;
            }
        } else if(type == 'dot'){
            ctx.beginPath();
            let o = Dots[i];
            let r = 10 + arr[i] / 256 * (height > width ? width : height) / 10;
            ctx.arc(o.x, o.y, r, 0, Math.PI*2, true);
            let g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, r);
            g.addColorStop(0, '#fff'); 
            g.addColorStop(1, o.color);
            ctx.fillStyle = g;
            ctx.fill();
            o.x += o.dx;
            o.x = o.x > width? 0 : o.x;
        }
       
    }
}
resize();
getDots();
window.onresize = resize;