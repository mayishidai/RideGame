// console.log('开发字节跳动小游戏过程中可以参考以下文档:')
// console.log('https://developer.toutiao.com/docs/game/');

// let systemInfo = tt.getSystemInfoSync()
// let canvas = tt.createCanvas(),
//     ctx = canvas.getContext('2d');

// function draw() {   
//     ctx.fillStyle = '#ffffff'
//     ctx.fillRect(0, 0, systemInfo.windowWidth, systemInfo.windowHeight)

//     ctx.fillStyle = '#000000'
//     ctx.font = `${parseInt(systemInfo.windowWidth / 20)}px Arial`
//     ctx.fillText('欢迎使用字节跳动开发者工具，', 10, systemInfo.windowHeight * 1 / 5)
//     ctx.fillText('可在控制台中查看小游戏开发文档的地址。', 10, systemInfo.windowHeight * 1 / 5 + 30)
// }

// draw();
// if ((typeof swan !== 'undefined') && (typeof swanGlobal !== 'undefined')) {
// 	require("swan-game-adapter.js");
// 	require("libs/laya.bdmini.js");
// } else if (typeof wx!=="undefined") {
require("weapp-adapter.js");
require("libs/laya.wxmini.js");

window.loadLib = require;
require("index.js");