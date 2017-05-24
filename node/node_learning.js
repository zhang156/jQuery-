// require加载模块
var module1 = require('./modules/module1.js');
console.log(`半径为 4 的圆的面积是${module1.area(4)}`);

// events
eventEmitter.on('event', () => {
  console.log('发生了一个事件！');
});
eventEmitter.emit('event');
