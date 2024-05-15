/*
思路：

1）滑动窗口，先从0开始，移动右边界，如果右边界大于等于target，则移动左边界，如果左边界大于等于target，则移动右边界；依次把所有情况筛选一遍。
也就是说，在滑动guess函数中，如果sum大于等于target，则sum减去nums[left]，left++，如果sum小于target，则right++；

2）如何找到最大值：先定义一个ans=max.value，通过Math.min将实际的最小值去赋给ans

3）需要设置的变量：
a) sum：滑动窗口的累加和
b) left：滑动窗口的左边界
c) right：滑动窗口的右边界
d) ans：滑动窗口的最大值

*/

var minSubArrayLen = function (target, nums) {};
