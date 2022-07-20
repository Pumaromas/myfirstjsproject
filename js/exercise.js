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

showFirstMessage();
function showFirstMessage() {
    console.log('Hello, world!');
}
