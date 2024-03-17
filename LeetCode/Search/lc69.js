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
      result = middle; //当square小于target的情况下，如果已经找不到target了，就返回最接近target的数
    }
  }

  return result;
};

console.log(searchRange(2));
