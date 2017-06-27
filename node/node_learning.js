// require加载模块
var module1 = require('./modules/module1.js');
console.log(`半径为 4 的圆的面积是${module1.area(4)}`);

// events
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('发生了一个事件！');
});

myEmitter.emit('event');

console.log(process.argv);
console.log(process.env);

// node退出之前发送
process.on('exit',function() {
	console.log('exit***************');
})
