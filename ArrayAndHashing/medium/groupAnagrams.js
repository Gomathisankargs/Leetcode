/**
 *
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * link: https://leetcode.com/problems/group-anagrams/
 *
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // --------- start of array approach ------------
  /**let response = [];
  let res = [];

  for (i=0;i<strs.length; i++){
      // ["ba"] -> ["b","a"] -> ["ab"]
      //Added " " at end to fix js specific error when key is -> at
      key = strs[i].split("").sort().join("")+` `;
      if(!response[key]) response[key] = [];
      response[key].push(strs[i]);
  }

   
  //    [ aet: [ 'eat', 'tea', 'ate' ], ant: [ 'tan', 'nat' ], abt: [ 'bat' ] 
  //    converted to [["eat","tea","ate"],["tan","nat"],["bat"]]
  
  for(let j in response){
      res.push(response[j]);
  }

  return res;
  */

  // ------------- end of array appraoch -----------

  // ------------- start of map approach -----------

  let map = new Map();

  for (i = 0; i < strs.length; i++) {
    const sortedString = sortString(strs[i]);
    if (map.has(sortedString)) {
      map.get(sortedString).push(strs[i]);
    } else {
      map.set(sortedString, [strs[i]]);
    }
  }

  return Array.from(map.values());
};

const sortString = function (str) {
  return str.split("").sort().join("");
};
