function MusicVisualizer(obj) {
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

MusicVisualizer.prototype.load = function(url, fn) {
  this.xhr.abort();
  this.xhr.open('GET', url);
  this.xhr.responseType = 'arraybuffer';
  const self = this;
  this.xhr.onload = function() {
    fn(self.xhr.response);
  };
  this.xhr.send();
};

MusicVisualizer.prototype.decode = function(arraybuffer, fn) {
  this.ac.decodeAudioData(arraybuffer, function(buffer) {
    fn(buffer);
  }, function(err) {
    console.error(err);
  });
};

MusicVisualizer.prototype.play = function(url) {
  const n = ++this.count;
  this.source && this.source.stop();
  const self = this;
  this.load(url, function(arraybuffer) {
    if (n !== self.count) return;
    arraybuffer && self.decode(arraybuffer, function(buffer) {
      if (n !== self.count) return;
      const bs = self.ac.createBufferSource();
      bs.buffer = buffer;
      bs.connect(self.analyser);
      self.source = bs;
      self.source.start();
    });
  });
};

MusicVisualizer.prototype.stop = function() {
  this.source.stop();
};

MusicVisualizer.prototype.addInit = function(fun) {
  this.initCallBack = fun;
};

MusicVisualizer.prototype.changeVolume = function(percent) {
  this.gainNode.gain.value = percent * percent;
};

MusicVisualizer.prototype.visualize = function() {
  const arr = new Uint8Array(this.analyser.frequencyBinCount);
  this.analyser.getByteFrequencyData(arr);
  const self = this;
  function v() {
    self.analyser.getByteFrequencyData(arr);
    self.visualizer(arr);
    requestAnimationFrame(v);
  }
  requestAnimationFrame(v);
};
