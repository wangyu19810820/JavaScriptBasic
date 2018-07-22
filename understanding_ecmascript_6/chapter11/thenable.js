// 可以将thenable对象转换成Promise对象
// Promise.resolve(thenableObj)可以接收thenable对象
// 成功失败的回调都由thenable控制
// 许多旧的库都在使用thenable对象，可以轻松的转换成Promise对象
let thenable1 = {
    then: function(resolve, reject) {
        resolve(42);
    }
}
let promise1 = Promise.resolve(thenable1);
promise1.then(function(value){
    console.log(value);
})

let thenable2 = {
    then: function(resolve, reject) {
        reject(22);
    }
}
let promise2 = Promise.resolve(thenable2);
promise2.catch(function(err){
    console.log(err);
})
