let alice = [5, 6, 7]
let bob = [3, 6, 10]
function compareTriplets(alice, bob) {
    // Write your code here
    let alicePoint=0
    let bobPoint=0
    
    // Loop through and compare the various indexes of the two arrays
    for(let i=0;i<alice.length;i++){
        if(alice[i]>bob[i]){
          alicePoint+=1
        }else if(b[i]>a[i]){
          bobPoint+=1
        }
    }

   
    // Add alice and bobs point to the array
    finalArray.push(alicePoint)
    finalArray.push(bobPoint)
    
     return finalArray;
}