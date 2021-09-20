import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  return Array.isArray(members) ? 
    members.filter(element => typeof (element) == 'string' && element != '0')
      .map(element => element.trim())
      .filter(element => element != '')
      .map(element => element[0].toUpperCase())
      .sort()
      .join('')
    : false;
}
