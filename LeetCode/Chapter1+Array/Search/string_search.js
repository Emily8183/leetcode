function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      //short string往前推进一位的同时，long string也往前推进一位
      if (short[j] !== long[i + j]) break;
      //在此循环中，当j能够等于short的长度-1，说明找到了
      if (j === short.length - 1) count++;
    }
  }
  //   return count;
  console.log(count);
}

naiveSearch("lorie loled", "lol");
