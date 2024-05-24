/*
思路：滑动窗口

1）设置左边界（窗口起始点，left）及右边界（窗口终点，right)都是以0为始点。两者距离为right-left+1。
2）设置两个loop, the outer loop 是right从0向右移动，the inner loop 是left向右移动。
3）移动条件：right向右移动，直到区间内的数字之和sum大于target，停止移动；左边界向右移动，缩短两者距离right-left+1。当sum < target，继续移动右边界, 反复循环。
4）每一次当sum大于target时，将两者距离传递给res=Number.Max_Value，不断通过Math.min更新，最终返回最小值。如果没有结果，则返回0.

2）需要设置的变量：
a) sum：滑动窗口的累加和
b) start：滑动窗口的左边界
c) end：滑动窗口的右边界
d) ans：滑动窗口的假设最大值

*/

var minSubArrayLen = function (target, nums) {
  let ans = Number.MAX_VALUE;
  let start = 0;
  let end = 0;
  let sums = 0;

  while (end < nums.length) {
    sums += nums[end];
    while (sums >= target) {
      //注意这里是<=，要把=也考虑进去
      ans = Math.min(ans, end - start + 1);
      sums -= nums[start];
      start++;
    }
    end++;
    //end是往右推，因此是++
  }
  return ans === Number.MAX_VALUE ? 0 : ans;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
