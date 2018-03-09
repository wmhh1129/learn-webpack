const greet = require('./greet'); // 注意,这里的sub其实是获取了sub.js里的generateText这个function
document.querySelector("#root").appendChild(greet());