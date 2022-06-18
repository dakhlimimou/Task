let arr = [1, 2, 0, 7, 9, 0, 3, 0]
function shift(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (j > i) {
    if (arr[i] === 0) {
      // swapping the numbers --->
      let last = arr[j];
      arr[j] = arr[i];
      arr[i] = last;
      j--;
    } else {
      i++;
    }
  }

  return;
}
shift(arr)
console.log(arr);
