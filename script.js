//----------------Excercise printReverse()----------------

function printReverse(arr) {
    for(let i = arr.length - 1; i >= 0; i--) {
      console.log(arr[i]);
    }
  }
  
  printReverse([1, 2, 3, 4]);
  printReverse(["a", "b", "c", "d"]);

//----------------Excercise isUniform()----------------
console.log("Please open js file to see all the exercises' solutions!");

function isUniform(arr) {
    const firstItem = arr[0];
    for(let i = 1; i < arr.length; i++) {
        return arr[i] === firstItem;
      }
  }
  
isUniform([1, 1, 1, 1]);
isUniform([1, 1, 2, 1]);
isUniform(["a", "a", "a", "a"]);
isUniform(["a", "a", "b", "a"]);

//solution from the video
/*
function isUniform(arr) {
    const firstItem = arr[0];
    for(let i = 1; i < arr.length; i++) {
      if(arr[i] === firstItem) {
        return true;
      }
      return false;
    }
    
  }
  
isUniform([1, 1, 1, 1]);
isUniform([1, 1, 2, 1]);
isUniform(["a", "a", "a", "a"]);
isUniform(["a", "a", "b", "a"]);
*/

//----------------Excercise sumArray()----------------

function sumArray(arr) {
    let sum = 0;
    for(i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
  }
  
  sumArray([1, 2, 3]);

// solution from the video
/*
  function sumArray(arr) {
    let sum = 0;
    arr.forEach(function(item){
      sum += item;
    });
    return sum;
  }
  
  sumArray([1, 2, 3]);
  */

// otherwise...
/*
function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  
  sumArray([1, 2, 3]);
*/

//----------------Excercise max()----------------

function max(arr) {
    let highestNum = arr[0];
    arr.forEach(function(num) {
        if(num > highestNum) {
            highestNum = num;
        }
    });
    return highestNum;
}

max([1, 2, 3]);

// solution from the video
/*
function max(arr) {
    let highestNum = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > highestNum) {
            highestNum = arr[i];
        }
    }
    return highestNum;
}

max([1, 2, 3]);
*/
