let fs = require("fs");

function run(taskDef) {
    // 创建迭代器
    let task = taskDef();

    // 开始执行任务
    let result = task.next();

    // 递归函数遍历
    (function step(){
        if (!result.done) {
            // 用一个Promise解决会简化问题
            let promise = Promise.resolve(result.value);
            promise.then(function(value){
                result = task.next(value);
                step();
            }).catch(function(err){
                result = task.throw(err);
                step();
            })
        }
    }());
}

// 定义一个可用于任务执行器的函数
function readFile(filename) {
    return new Promise(function(resolve, reject){
        fs.readFile(filename, {encoding:"utf8"}, function(err, contents){
            if(err) {
                reject(err);
            } else {
                resolve(contents);
            }
        })
    });
}

// 执行任务
run(function *() {
    let contents = yield readFile("example.txt");
    console.log(contents);
    console.log("Done");
})
