const sub = require('./sub'); // 注意,这里的sub其实是获取了sub.js里的generateText这个function
const app = document.createElement('div');
app.innerHTML = '<h1>Hello World</h1>';
app.appendChild(sub()); // 相当于调用 generateText()
document.body.appendChild(app);