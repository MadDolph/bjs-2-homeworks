function getArrayParams(...arr) {
  if(arr.length == 0) {
    return 0;
  }

  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;
  
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > max) max = arr[i];
    if(arr[i] < min) min = arr[i];
    sum += arr[i];
  }

  avg = sum / arr.length;
  avg = + avg.toFixed(2);
  return {min: min, max: max, avg: avg};
}

function summElementsWorker(...arr) {
  if(arr.length == 0) {
    return 0;
  }
 
  sum = arr.reduce(function(accum, currentValue) {
    return accum + currentValue;
  }, 0)
 
  return sum;
}

  function differenceMaxMinWorker(...arr) {
    if(arr.length == 0) {
      return 0;
    }
    
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    
    if(min !== min || max !== max) {
      return false;
    }
    
    let div = max - min;
    if (!Number.isFinite(div)) {
      div = 0;
    }
    
    return div;
  }

function differenceEvenOddWorker(...arr) {
  if(arr.length == 0) {
    return 0;
  }
  
  let sumOdd = 0; 
  let sumEven = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEven += arr[i];
    } else {
       sumOdd += arr[i];
      }
  }
  
  return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
  if(arr.length == 0) {
    return 0;
  }
  let evenArr = [];
  let evenSum = 0;
 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenArr.push(arr[i]);
    } 
  }
 
  evenSum = evenArr.reduce(function(accum, currentValue) {
    return accum + currentValue;
  }, 0)
 
  return evenSum / evenArr.length;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
 
  for(let j = 0; j < arrOfArr.length; j++) {
    if(func(...arrOfArr[j]) > maxWorkerResult) maxWorkerResult = func(...arrOfArr[j]);
  }
 
  return maxWorkerResult;
}
