/**
 * problem link: https://leetcode.com/problems/valid-anagram/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let s_map = {};
  let t_map = {};

  for (let schar of s) {
    s_map[schar] = s_map[schar] ? s_map[schar] + 1 : 1;
  }

  for (let tchar of t) t_map[tchar] = t_map[tchar] ? t_map[tchar] + 1 : 1;

  for (let i of s) {
    if (s_map[i] !== t_map[i]) return false;
  }

  return true;
};
