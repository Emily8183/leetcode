/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  //insert a helper function
  const binSearch = (nums, target, leftBias) => {
    //set a boolean of left side bias, if the left side bias is true, we need to look for the left most index.
    //If the left side bias is false, which means we have found the left most index, then we need to look for the right most index
    let start = 0,
      end = nums.length - 1;
    let i = -1; //i代表目标值在数组中的位置，根据题目要求，如果目标值不在数组中，则初始值 -1。

    while (start <= end) {
      let middle = Math.floor((start + end) / 2);
      if (target > nums[middle]) {
        start = middle + 1;
      } else if (target < nums[middle]) {
        end = middle - 1;
      } else {
        i = middle;
        if (leftBias) {
          end = middle - 1;
        } else {
          //when leftBias is false, i will move to the right side of the middle to check the right most index
          start = middle + 1;
        }
      }
    }
    return i;
  };

  let leftIndex = binSearch(nums, target, true);
  //according to the set-up above, when the left side bias is true, we need to look for the left most index
  let rightIndex = binSearch(nums, target, false);
  //when the left side bias is false, we need to look for the right most index

  if (leftIndex === -1 || rightIndex === -1) {
    return [-1, -1];
  } else if (rightIndex - leftIndex >= 0) {
    return [leftIndex, rightIndex];
  }
};

console.log(searchRange([8, 8, 8, 8], 8));
