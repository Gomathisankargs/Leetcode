// link: https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //Optimized the solution after refering others solution.
  //Credits goes to them

  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let rem = target - nums[i];
    if (map[rem] !== undefined) {
      return [map[rem], i];
    }
    map[nums[i]] = i;
  }

  return null;
};
