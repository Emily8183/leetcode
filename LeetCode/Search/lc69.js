var searchRange = function (target) {
  let start = 0;
  let end = target;
  let result = 0;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    let square = middle * middle;
    if (square === target) {
      result = middle;
    } else if (square > target) {
      end = middle - 1;
    } else {
      start = middle + 1;
      result = middle; //当square小于target的情况下，如果找不到整数result，就需要在其中一种if...else的情况下返回最接近middle的数
    }
  }

  return result;
};

console.log(searchRange(2));
