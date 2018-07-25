// 异步转“同步”的，迭代器写法
let fs = require("fs");

// 异步转“同步”的通用转换器
function run(taskDef) {
    // 创建可以在其他地方使用的迭代器
    let task = taskDef();

    // 开始执行任务
    let result = task.next();

    // 不断调用next()的递归函数
    function step() {
        // 如果有更多任务要做
        if (!result.done) {
            if (typeof result.value === "function") {
                result.value(function(err, data) {
                    if (err) {
                        result = task.throw(err);
                        return;
                    }
                    // 将执行结果再次传回迭代生成器
                    result = task.next(data);
                    step();
                });
            } else {
                result = task.next(result.value);
                step();
            }
        }
    }
    step();
}
function readFile(fileName) {
    return function(callback) {
        fs.readFile(fileName, {encoding:"utf8"}, callback);
    }
}

// 读文件内容，底层是异步写法fs.readFile(fileName, callback);
// 此处改写为“同步”写法，读取内容，打印内容
run(function*(){
    let contents = yield readFile("example.txt");
    console.log(contents);
    console.log("Done");
})