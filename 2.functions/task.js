function getArrayParams(...arr) {

  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;

  for (i = 0; i < arr.length; i++) {

    if(arr[i] > max) max = arr[i];

    if(arr[i] < min) min = arr[i];

    sum += arr[i];


  }

  avg = sum / arr.length;

  avg = + avg.toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
