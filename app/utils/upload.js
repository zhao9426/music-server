let OSS = require('ali-oss');
let client = new OSS({
    region: 'oss-cn-hangzhou',
    accessKeyId: 'LTAIv8lFqBrktAvw',
    accessKeySecret: 'Hcra1DuZC18QyQi5H6zcgl6MnOI1mW',
    bucket: 'pmusic'
});

module.exports = client;