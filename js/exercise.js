'use strict';

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] *= 2;
//     } else {
//         data[i] += ` - done`;
//     }
// }

// console.log(data);
// -----------------------------------

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// let i = data.length - 1, k = 0;
// while (i >= 0) {
//     result[k] = data[i];
//     k++;
//     i--;
// }

// console.log(result);

// -------------------------

// const lines = 5;
// let result = '';

// let i = lines;
// let k = 1;
// while (i >= 0) {
//     for (let j = i; j > 0; j--) {
//         result += ' ';
//     }
//     for (let m = k; m > 0; m--) {
//         result += '*';
//     }
//     result += '\n';
//     i--;
//     k += 2;
// }

// console.log(result);

// ----------------------------------

// showFirstMessage();
// function showFirstMessage() {
//     console.log('Hello, world!');
// }

// -----------------------------------

// function getMathResult(a, b) {
//     if (typeof(b) !== 'number' || b <= 0) {
//         return a;
//     }
//     let c = a;
//     let ans = `${c}`;
//     while (b != 1) {
//         c += a;
//         ans += `---${c}`;
//         b--;
//     }
//     return ans;
// }

// console.log(getMathResult(10, -5));

// ------------------------------------

// function calculateVolumeAndArea(lengthSide) {
//     if (typeof(lengthSide) !== 'number' || lengthSide <= 0 || !Number.isInteger(lengthSide)) {
//         return `При вычислении произошла ошибка`;
//     }
//     return `Объем куба: ${Math.pow(lengthSide, 3)}, площадь всей поверхности: ${Math.pow(lengthSide, 2) * 6}`;
// }

// console.log(calculateVolumeAndArea(0));

// ------------------------------------

// function getCoupeNumber (placeNumber) {
//     if (typeof(placeNumber) == 'number' && placeNumber >= 0 && placeNumber - Math.trunc(placeNumber) === 0) {
//         if (placeNumber > 0 && placeNumber <= 36) {
//             let temp = Math.trunc(placeNumber / 4);
//             if (placeNumber % 4 === 0) {
//                 return temp;
//             } else {
//                 return ++temp;
//             }
//         } else {
//             return `Таких мест в вагоне не существует`;
//         }
//     } else {
//         return `Ошибка. Проверьте правильность введенного номера места`;
//     }
// } 

// console.log(getCoupeNumber(8));

// ---------------------------------------------

// function getTimeFromMinutes(min) {
//     if (min < 0 || !Number.isInteger(min)) {
//         return `Ошибка, проверьте данные`;
//     }
//     let hours = Math.trunc(min / 60);
//     let mins = min % 60;
//     let strH = 'час';
//     if (hours % 10 === 1 && hours % 100 !== 11) {
//         strH += '';
//         console.log('first step by hours ' + strH);
//     } else if ((hours % 10 === 2 || hours % 10 === 3 || hours % 10 === 4) && (hours % 100 !== 12 || hours % 100 !== 13 || hours % 100 !== 14)) {
//         strH += 'а';
//         console.log('second step by hours ' + strH);
//     } else {
//         strH += 'ов';
//         console.log('third step by hours ' + strH);
//     }
//     let strM = 'минут';
//     if (mins % 10 === 1 && mins % 100 !== 11) {
//         strM += 'а';
//         console.log('first step by minutes ' + strM);
//     } else if ((mins % 10 === 2 || mins % 10 === 3 || mins % 10 === 4) && (mins % 100 !== 12 || mins % 100 !== 13 || mins % 100 !== 14)) {
//         strM += 'ы';
//         console.log('second step by minutes ' + strM);
//     } else {
//         strM += '';
//         console.log('third step by minutes ' + strM);
//     }
//     return `Это ${hours} ${strH} и ${mins} ${strM}`;
// }

// console.log(getTimeFromMinutes(-150));

// --------------------------------------------

// function findMaxNumber(a, b, c, d) {
//     if (typeof(a + b + c + d) != 'number' || a == null || b == null || c == null || d == null) {
//         return 0;
//     }
//     let temp = a;
//     if (temp < b) {
//         temp = b;
//     }
//     if (temp < c) {
//         temp = c;
//     }
//     if (temp < d) {
//         temp = d;
//     }
//     return temp;
// }

// console.log(findMaxNumber(250));

// -----------------------------------------------------

// function fib(num) {
//     let str = '';
//     let a = 0, 
//         b = 1;
//     if (Number.isInteger(num) && num > 2) {
//         str = `${a} ${b}`;
//         for (let i = 2; i < num; i++) {
//             let s = a + b;
//             a = b;
//             b = s;
//             str += ` ${s}`;
//         }
//     } else if (num == 2) {
//         str = `${a} ${b}`;
//     } else if (num == 1) {
//         str = `${a}`;
//     }
//     return str;
// }

// console.log(fib(3));

// ---------------------------------------------

// function first() {
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// ------------------------------------------

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// learnJS(`JavaScript`, function() {
//     console.log(`Я прошел этот урок!`);
// });

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(bg);

// delete options.name;
// console.log(options);


// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// console.log(Object.keys(options));
// console.log(Object.keys(options).length);

// ---------------------------------------------------

// const arr = [1, 2, 3, 6, 8];

// // arr.pop();
// // arr.push(10);


// console.log(arr);

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// // for (let value of arr) {
// //     console.log(value);
// // }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

// ---------------------------------------------

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function (plan) {
//         const {languages} = plan.skills;
//         return `Мне ${plan.age} и я владею языками: ${languages[0].toUpperCase()} ${languages[1].toUpperCase()}`;
//     }
// };

// // console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));



// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return `${exp}`; 
// }

// // console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {
//     const {programmingLangs} = plan.skills;
//     let answer = '';
//     for (let key in programmingLangs) {
//         if (key) {
//             answer += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//         }
//     }
//     return answer;
// }

// // console.log(showProgrammingLangs(personalPlanPeter));

// ---------------------------------------------

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';
//     for (let i = 0; i < arr.length; i++) {
//         str += ` ${arr[i]}`;
//     }
//     if (str !== '') {
//         return `Семья состоит из:${str}`;
//     } else {
//         return `Семья пуста`;
//     } 
// }
// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = `${arr[i].toLowerCase()}`;
//         console.log(arr[i]);
//     }
// }

// standardizeStrings(favoriteCities);

// ------------------------------------------
// const someString = 'This is some strange string';

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverse(someString));


// ------------------------------------

// function availableCurr(arr, missingCurr) {
//     let str;
//     if(arr.length === 0) {
//         str = `Нет доступных валют`;
//     } else {
//         str = `Доступные валюты:\n`;
//         arr.forEach(function(item) {
//             if(item !== missingCurr) {
//                 str += `${item}\n`;
//             }
//         });
//     }
//     return str;
// }

// console.log(availableCurr(['UAN', 'RUB', 'CNY'], 'CNY'));

// -----------------------------------------------

// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. 
// Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; 
// стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.
// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета 
// хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет 
// - 'Бюджета недостаточно'. И все 🙂

// Но эта задача содержит несколько подзадач внутри:
// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
// - определение того, хватает ли бюджета на оплату такого объема;
// - все числа идут без единиц измерения для упрощения, просто цифры и все;
// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или 
// подставляется вообще другой объект.

