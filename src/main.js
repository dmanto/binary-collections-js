import chalk from 'chalk';
import {binLog, addCode, isPrime, nthPrime } from '../lib/binary-collections.js';

console.log(chalk.green(binLog('000000000000100000000000000000000000000000000')));

// console.log(chalk.red(addCode('10101010101010101010101010101010101010101010101010101010101010101010101010101010', 1, {})));
// console.log(chalk.red(JSON.stringify(addCode('1010101010101010101010101010101010101010', 1, {}))));
console.log(chalk.red(addCode('1010101010101010101010101010101010101010', 1, {})));

console.log(chalk.green(nthPrime(20000n)));
