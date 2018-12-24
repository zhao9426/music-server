# music-server

music-server

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org


## Note
AudioNode
AudioContext对象
属性

destination AudioDestinationNode所有音频输出聚集地，所有AudioNode直接或间接连接到这里
currentTime 当前播放的时间,单位s

方法
1. decodeAudioData(arrayBuffer, succuss(buffer), error) 异步音频解码；
1. createBufferSource() 创建AudioBufferSourceNode对象
1. createAnalyser() 创建AnalyserNode对象
1. createGain()/ createGainNode() 创建GainNode对象

AudioBufferSourceNode 一段音频资源
AudioContext.createBufferSource()
1. buffer AudioBuffer数据
1. duration 音频时长
1. loop 是否循环播放
1. onended 播放结束事件

start()/noteOn(when=ac.currentTime, offset=0, duration=buffer.duration-offset) 播放音频
stop()/noteOff(when=ac.currentTime) 结束播放

GainNode 音量调节 通过改变音频数据的所有sample frame的信号强度来调节音量
gn = ac.createGain() / ac.createGainNode()

gain AudioParam对象，改边其value值可以改变音频信号强弱，其值一般在0~1之间

AnalyserNode 音频分析对象 能够实时分析音频资源的频域和时域信息，不会对音频流做任何处理
const analyser = ac.createAnalyser();

fftSize 设置FFT值的大小，用于分析得到频域， 32～2048
frequencyBinCount 实时得到音频频域的数据个数即FFT的一半
getBtyeFrequencyData(Uint8Array) 复制音频当前频域数据到Uint8Array中



