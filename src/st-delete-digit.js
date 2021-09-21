import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let smallesNumber = n.toString().split('').sort()[0];
  let numberToString = n.toString().split('');

  for (let i = 0; i <  numberToString.length; i++) {
    if (smallesNumber == numberToString[i]) numberToString.splice(i, 1)
  }

  return +numberToString.join('');
}
