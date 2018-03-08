//我们这里使用CommonJS的风格
function generateText() {
    const element = document.createElement('h2');
    element.innerHTML = "Hello world";
    return element;
}

module.exports = generateText; // 对外暴露出generateText这个方法