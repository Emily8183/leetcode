/*
  思路：
 
  1. 遍历数组，将不等于val的数字放到数组前面，最后返回i
  2. 遍历数组，将等于val的数字放到数组后面，最后返回nums.length - i

  * nums是数组，val是需要删除的数字
  * time complexity: O(n);
  * space complexity: O(1);
*/

var removeElement = (nums, val) => {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      // nums[i] = nums[j];
      // i++;
      nums[i++] = nums[j];
    }
  }
  return i;
};
