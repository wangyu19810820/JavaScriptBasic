// 新建一个未完成Promise，参数是执行器函数
// 执行器函数包含成功回调函数，和失败回调函数
let fs = require("fs");
function readFile(filename) {
    return new Promise(function(resolve, reject){
        fs.readFile(filename, {encoding:"utf8"}, function(err, contents){
            if (err) {
                reject(err);
                return;
            }
            resolve(contents);
        })
        console.log("promise init")
    })
}

let promise = readFile("example.txt");
// 处理成功回调，处理失败回调，会被添加到任务队列末尾
promise.then(function(contents){
    console.log(contents);
}, function(err){
    console.log(err.message);
})

console.log("file end");