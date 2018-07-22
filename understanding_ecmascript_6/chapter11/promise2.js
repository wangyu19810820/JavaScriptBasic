// 已处理的Promise
// 用静态方法来创建已处理的Promise
// Promise.resolve(content); 已成功的Promise
// Promise.reject(err); 已失败的Promise
let promise1 = Promise.resolve(42);
promise1.then(function(content){
    console.log("1:" + content);
}, function(err){
    console.log("1:" + err);
});

let promise2 = Promise.reject(22);
promise2.then(function(content){
    console.log("12" + content);
}, function(err){
    console.log("2:" + err);
})
