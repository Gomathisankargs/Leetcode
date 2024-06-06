// link: https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map();

  for (number of nums) {
    if (map.has(number)) {
      map.set(number, map.get(number) + 1);
    } else {
      map.set(number, 1);
    }
  }

  let sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  return Array.from(sortedMap.keys()).slice(0, k);
};
