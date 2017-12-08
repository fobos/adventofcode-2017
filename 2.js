'use strict';

const fs = require('fs');

const input = fs.readFileSync('./2.txt', {encoding: 'utf8'});
const matrix = input.split('\n')
    .map(row => row.split('\t').map(val => Number(val)));

const res1 = matrix.map(row => minmaxDiff(row))
    .reduce((acc, val) => acc + val);

function minmaxDiff(arr) {
    let min = arr[0];
    let max = arr[0];

    arr.forEach(val => {
        max = val > max ? val : max;
        min = val < min ? val : min;
    });

    return max - min;
}

const res2 = matrix.map(row => evenlyDevisible(row))
    .reduce((acc, val) => acc + val);

function evenlyDevisible(arr) {
    let res = 0;

    arr.forEach((val1, i) => {
        arr.forEach((val2, j) => {
            if (i !== j) {
                let div = val1 / val2;
                res = Number.isInteger(div) ? div : res;
            }
        });
    });

    return res;
}

console.log(res1);
console.log(res2);
