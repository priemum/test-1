const { ocrSpace } = require('ocr-space-api-wrapper');
let express = require('express')
let app = express()

app.listen(3000)
let fetch = require('node-fetch')
function validUrl(url) {
    return /http(s)?:\/\/(\w+:?\w*@)?(\S+)(:\d+)?((?<=\.)\w+)+(\/([\w#!:.?+=&%@!\-/])*)?/gi.test(url);
}

function base64ToNode(buffer) {
    return buffer.toString('base64');
}


function imageToBase64(urlOrImage) {
    if (validUrl(urlOrImage)) {
        return fetch(urlOrImage).then(function (response) {
            return response.buffer();
        }).then(base64ToNode);
    } 
}

let our_Space = async ()=>{

let base = `data:image/png;base64,` + await imageToBase64('https://cdn.discordapp.com/attachments/857978295014522921/905894792012103770/unknown.png')
    const res3 = await ocrSpace(base, { apiKey: '68d1092b0588957', language: 'eng' });
console.log(res3)
}
//our_Space()
let p = require('./p.js')
p('image.jpg',2,3).then(d => console.log(d))
/*const {createWorker} = require('tesseract.js');

const worker = createWorker({
//  logger: m => console.log(m)
});

(async () => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize('https://cdn.discordapp.com/attachments/857978295014522921/905894498331148309/unknown.png');
  console.log(text);
  await worker.terminate();
})();*/
