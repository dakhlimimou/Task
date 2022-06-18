let nums= [ 1, 2, 3, 4, 10, 11 ]
function simpleArraySum(ar) {
    var sum = 0;
    for (var i = 0; i < ar.length; i++) {
      sum += ar[i];
    }
    return sum;
  }
  
  console.log(simpleArraySum(nums))