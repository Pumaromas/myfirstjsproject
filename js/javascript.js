// let users = [
//     {
//         name: "ivan",
//         age: 23,
//         isOnline: false
//     },
//     {
//         name: "alexandr",
//         age: 23,
//         isOnline: true
//     },
//     {
//         name: "maks",
//         age: 23,
//         isOnline: false
//     }
// ]

// for (let i = 0; i < users.length; i++) {
//     users[i].name = users[i].name[0].toUpperCase() + users[i].name.slice(1);
//     users[i].textStatus = users[i].isOnline ? "online" : "offline";
// }

// console.log(users);

// ----------------------------------------------------------------------------

// Tasks for loops

// --------------------------------------------------------------------------

// Task 1

// let str = "I am in the easycode";
// let str2 = "";

// for (let i = 0; i < str.length; i++) {
//     if (str2 === "" || str[i-1] === " ") {
//         str2 += str[i].toUpperCase();
//     }
//     else {
//         str2 += str[i];
//     }
// }

// console.log(str2);

// -----------------------------------------------------------------

// Task 2

// str = "tseb eht ma I";
// str2 = "";

// for (let i = str.length -1; i >= 0; i--) {
//     str2 += str[i];
// }

// console.log(str2);

// --------------------------------------------------------------------

// Task 3

// let a = 10;
// let b = 1;

// for (let i = 1; i <= a; i++) {
//     b *= i;
// }

// console.log(`${a}! = ${b}`);

// ---------------------------------------------------------------------

// Task 4

// let a = 10;
// let str = "Считаем до 10-и: ";

// for (i = 1; i <= a; i++) {
//     str += " " + i;
//     if (i != a) {
//         str += ",";
//     } else {
//         str += ".";
//     }
// }

// console.log(str);

// -------------------------------------------------------------------

// Task 5

// let str = "javaScript is a pretty good language";
// let str2 = "";

// for (let i = 0; i < str.length; i++) {
//     if (i === 0 || str[i-1] === " ") {
//         str2 += str[i].toUpperCase();
//     } else if (str[i] !== " ") {
//         str2 += str[i];
//     }
// }

// console.log(str2);

// ------------------------------------------------------------------

// Task 6

// let arr = [];
// for (let i = 1; i <= 15; i++) {
//     if (i % 2 === 1) {
//         arr += i + " ";
//     }
// }

// console.log(arr);

// ---------------------------------------------------------------------

// Возврат функции

// function highFunc() {
//     return function(x, y) {
//         return x + y;
//     }
// }

// let parentFunc = highFunc();

// -------------------------------------------------------------------------------

// Передача функции

// function getNumber(number, handler) { // принимает число и функцию
//     let newNumber;
//     newNumber = handler(number);
//     return newNumber;
// };

// function worker(num) { // handler
//     return "The number is - " + num;
// };

// --------------------------------------------------------------------------------

// function processString(string, separator, handler) {
//     let newStr = "";
//     for (let i = 0; i < string.length; i++) {
//         newStr += handler(string[i], separator);
//     };
//     return newStr;
// };

// function workerWithString(symbol, separator) {
//     return symbol + separator;
// };

// let stringRes = processString("some string", '|', workerWithString);

// -------------------------------------------------------------------

// function http(method, callback) {
//     console.log(`Sending ${method} request...`);
//     setTimeout(function(){
//         callback({
//             method: method,
//             status: "success"
//         })
//     }, 2000);
// }

// http("POST", function(res) {
//     console.log(res);
// })

// --------------------------------------------------------------------

// Рекурсия

function foo(limit) {
    let value;
    if (limit > 0) {
        value = limit + foo(limit - 1);
    } else {
        value = limit;
    }
    return value;
};

 let result = foo(3);