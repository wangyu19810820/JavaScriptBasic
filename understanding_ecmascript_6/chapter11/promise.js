
// Promise的使用，then方法接收两个参数，成功回调和失败回调
// catch函数，接收失败回调
// 可以多次调用then和catch方法，依次添加到试行队列末尾

// 加载bluebird模块，第三方Promise实现
var Promise = require("bluebird");
var readFile = Promise.promisify(require("fs").readFile);

let promise = readFile("example.txt");
// 处理成功回调，处理失败回调
promise.then(function(contents){
    console.log(contents);

    // 将回调添加到任务队列的最后
    promise.then(function(){
        console.log("read a file again");
    })
}, function(err){
    console.log(err.message);
})

// 处理成功回调
promise.then(function(contents){
    console.log("read a file");
})

// 处理失败回调
promise.catch(function(err){
    console.log("catch a error");
})