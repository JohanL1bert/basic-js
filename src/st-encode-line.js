import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  const result = [];

  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1] && str[i + 1] != undefined) {
      counter += 1;
    } else {
      result.push(counter)
      counter = 1;
      result.push(str[i])
    }
  }
  
  return result.filter(x => x != 1).join('');
}
