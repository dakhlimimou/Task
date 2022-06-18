let d=4;
function rotLeft(a, d) {
    let size = a.length;
    let newArr = [1,5,8,7,9,6,3];
    let rotateLeftIdx = d;
 
    let i = 0;
    while(rotateLeftIdx < size){
        newArr[i] = a[rotateLeftIdx];
        i++;
        rotateLeftIdx++;
    }
 
    //set rotateLeftIdx back to 0
    rotateLeftIdx = 0;
    while(rotateLeftIdx < d){
        newArr[i] = a[rotateLeftIdx];
        i++;
        rotateLeftIdx++;
    }
    return newArr;
 }
