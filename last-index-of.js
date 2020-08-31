function lastIndexOf(arr, num) {
  let i = arr.length - 1;
  let index = -1;
  
  while (i >= 0) {
    if (arr[i] === num) {
      index = i;
      break;
    }
    i--;
  }

  return index;
}

// console.log(lastIndexOf([0, 1, 4, 1, 2], 1));
// console.log(lastIndexOf([5, 5, 5], 5));
// console.log(lastIndexOf([], 3));
