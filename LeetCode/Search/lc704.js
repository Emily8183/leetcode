var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (start <= end && nums[middle] !== target) {
    if (target < nums[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return nums[middle] === target ? middle : -1;
};

search([-1, 0, 3, 5, 9, 12], 0);
