let arr = [20,10,40,50,60,70,30];
const value = 90;
const findTwoNum = ((arr, value) => {
  let result = [];
  for(let i= 0; i< arr.length-1; i++) {
      if(arr[i] > value) {
          continue;
      }
      if(arr.includes(value-arr[i])) {
          result.push(arr[i]);
          result.push(value-arr[i]);
          break;;
      }
         
  }
    return result;
  });
  
  output = findTwoNum(arr, value);
  console.log("Pair found ("+output+")");