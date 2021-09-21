import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  const positiveNumber = arr.filter(element => element > 0).sort((a, b) => a - b);

  const negativeNumber = [];
  arr.map((x, i) => x < 0 ? negativeNumber.push(i) : 0);

  const result = [];
  let counter = 0;
  arr.map((_, index) => {
    if (negativeNumber.includes(index)) {
      result.push(arr[index])
    } else {
      result.push(positiveNumber[counter])
      counter++;
    }
  })
  
  return result;
}
