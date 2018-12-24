function MusicVisualizer(obj){
    this.source = null;
    this.count = 0;
    this.size = obj.size;
    this.ac = new AudioContext();
    this.analyser = this.ac.createAnalyser();
    this.analyser.fftSize = this.size * 2;
    this.gainNode = this.ac.createGain();
    this.analyser.connect(this.gainNode);
    this.gainNode.connect(this.ac.destination);
    this.xhr = new XMLHttpRequest();
    this.visualizer = obj.visualizer;
    this.visualize(); 
}

MusicVisualizer.prototype.load = function(url, fn){
    this.xhr.abort();
    this.xhr.open('GET', url);
    this.xhr.responseType = "arraybuffer";
    const self = this;
    console.log(typeof fn, "fn")
    this.xhr.onload = function(){
        console.log(typeof fn, "fn2", fn)
        fn(self.xhr.response)
    }
    this.xhr.send();
}

MusicVisualizer.prototype.decode = function(arraybuffer, fn){
    console.log(arraybuffer, "hah")
    this.ac.decodeAudioData(arraybuffer, function(buffer){
        fn(buffer);
    }, function(err){
        console.error(err);
    })
}

MusicVisualizer.prototype.play = function(url){
    let n = ++this.count;
    this.source && this.source.stop();
    var self = this;
    this.load(url, function(arraybuffer){
        console.log(arraybuffer, "af")
        if(n !== self.count) return;
        arraybuffer && self.decode(arraybuffer, function(buffer){
            if (n !== self.count) return;
            console.log(buffer, "fck")
            let bs = self.ac.createBufferSource();
            bs.buffer = buffer;
           // bs.start();
            self.source = bs;
            sel.source.start();
        })
    })
}

MusicVisualizer.prototype.stop = function(){
    this.source.stop();
}

MusicVisualizer.prototype.changeVolume = function(percent){
    this.gainNode.gain.value = percent * percent;
}

MusicVisualizer.prototype.visualize = function(){
    var arr = new Uint8Array(this.analyser.frequencyBinCount);
   // var arr = new Uint8Array(analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(arr);
    const self = this;
   /// console.log(arr, "ksks")
    function v(){
        self.analyser.getByteFrequencyData(arr);
        self.visualizer(arr);
        console.log(arr, "reqa")
        requestAnimationFrame(v);
    }
    requestAnimationFrame(v);
}