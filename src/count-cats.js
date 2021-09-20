import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  // return matrix.filter((element) => element.filter(x) => x == '^^')).length;

  let counter = 0;
  for (let key of matrix) {
    for (let secondKey of key) {
      if (secondKey == '^^') counter += 1;
    }
  }
  return counter;
}
