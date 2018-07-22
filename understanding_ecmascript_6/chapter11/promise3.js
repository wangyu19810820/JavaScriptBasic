// 执行器内部报错，会自动被捕获，并传递给reject回调
let promise = new Promise(function(resolve, reject){
    throw new Error("a error occur");
});

promise.then(function(content){
    console.log(content);
}, function(err){
    console.log(err.message);
});
