/*
  思路：
 
  1.使用双指针，左右各const一个variable
  2. 遍历，比较两头的平方，将大的那一边放入res中
  3 遍历数字--
*/

var sortedSquares = function (nums) {
  let n = nums.length;
  let res = new Array(n).fill(0);

  let i = 0,
    j = n - 1,
    k = n - 1;

  while (i <= j) {
    let left = nums[i] * nums[i];
    let right = nums[j] * nums[j];

    if (left > right) {
      res[k] = left;
      i++;
    } else {
      res[k] = right;
      j--;
    }
    k--;
  }

  return res;
};

let nums = [-7, -3, 2, 3, 11];
console.log(sortedSquares(nums));
