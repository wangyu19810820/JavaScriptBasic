// 导出数据
export var color = "red";
export let name = "Nicholas";
export const magicNumber = 7;

console.log('export1.js execute');

// 导出函数
export function sum(num1, num2) {
    return num1 + num2;
}

// 导出类
export class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
}

// 这个函数是模块私有的
function subtract(num1, num2) {
    return num1 - num2;
}

// 定义一个函数...
function multiply(num1, num2) {
    return num1 * num2;
}

// 书上的"export multiply;"写法错误，可参看MDN文档
export {multiply};
