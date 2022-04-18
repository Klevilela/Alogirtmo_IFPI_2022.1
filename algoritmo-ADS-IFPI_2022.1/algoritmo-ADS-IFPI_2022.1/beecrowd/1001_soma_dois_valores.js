import fs from 'fs'
const input = fs.readFileSync('/dev/stdin', 'utf-8');

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
//var lines = input.split('\n');

const a = Number(input('Digite o valor A: '))
const b = Number(input('Digite o valor B: '))

x = a + b

console.log(x)