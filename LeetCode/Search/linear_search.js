//You just loop through the entire array and check if the current array element is equal to the value
//that we pass in and if it is, return the index at which it's found.

function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
    //here we use === to check if the value is equal to the value that we pass in
  }
  return -1;
}

linearSearch([34, 51, 1, 2, 3, 45, 56, 687], 100);
