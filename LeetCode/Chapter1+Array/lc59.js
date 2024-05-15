/*
思路：
1）研究如何得到是转几圈: n/2

2）需要考虑哪些变量：
a) 当前行数值：从0开始
b) 当前列数值：从0开始
c) 需要缩进的量：从1开始
d) 需要填充的数字(count)，从1开始，每次+1
c) 中间数字arr[mid][mid]，将等于最后一个count
e) 创建一个arr遍历，这个arr初始值是n个index, 每个index初始值是0, 从中fill。怎么变成矩阵呢？给这个array加一个map循环，变成n x n的矩阵
f) 转圈的时候，while loop用的是i代表纵轴，j代表横轴

3) 沿着四条边，【左闭右开】进行while loop遍历，一路++；如n x n是奇数，则需要最后填充中间的数字
*/

var generateMatrix = function (n) {
  let loop = map.floor(n / 2);
  // let mid = map.floor(n/2);
  let startX = 0;
  let startY = 0;
  let offset = 1;
  let count = 1;
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while (loop--) {
    //设置i和j
    let i = startX,
      j = startY;

    //遍历正方形上边，从左到右，左闭右开
    for (j = startY; j < startY - offset; j++) {
      res[i][j] = count++;
    }

    //遍历正方形右边，从上到下，上闭下开. 注意这边必须是i++，因为数字是递增的。只有从右往左，数字变小时，才是i--
    for (x = startX; x < startX - offset; i++) {
      res[i][j] = count++;
    }
  }
};
