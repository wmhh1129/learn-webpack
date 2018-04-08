import './main.css'
import './greet.scss'
const greetDiv = require('./greet'); // 注意,这里的greet其实是获取了greet.js里的generateText这个function
document.querySelector("#root").appendChild(greetDiv()); // 调用greet()实则是返回了一个div(HTMLElement)
