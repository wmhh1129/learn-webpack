// webpack2.x跟3.x已经可以处理json文件的引入,不再需要json-loader
const greetJson = require('./greet.json')
// 定义一个返回包含问候信息的html元素的函数,并依据CommonJS规范导出这个函数为一个模块：
module.exports = function() {
    const greet = document.createElement('div');
    greet.textContent = greetJson.greetText;
    return greet;
};