// node的process对象的unhandledRejection事件监听拒绝后，无出错回调的Promise
// rejectionHandled监听处理拒绝后，有出错回调的Promise
// 注册监听要到下一个事件循环才能生效，所以要用setTimeout模拟
var promise1, promise2;
var possiblyUnhandledRejections = new Map();
promise1 = Promise.reject(new Error("no handler"));
promise2 = Promise.reject(new Error("has handler"));
setTimeout(function(){
     promise2.catch(function(err){
        console.log(err.message);
    })
}, 2000);


process.on("unhandledRejection", function(reason, p){
    console.log('unhandledRejection process');
    possiblyUnhandledRejections.set(p, reason);
});

process.on("rejectionHandled", function(p){
    console.log('rejectionHandled process');
    possiblyUnhandledRejections.delete(p);;
});

setInterval(function(){
    console.log("打印被拒绝，但是没有被处理的Promise");
    possiblyUnhandledRejections.forEach(function(reason, promise){
        console.log(reason.message);
    })
}, 1000);