function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    else if (arr[i] < min) {
      min = arr[i];
    }
      sum += arr[i];
  }

  let avg = +((sum / arr.length).toFixed(2));
  return ( { min: min, max: max, avg: avg } );
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
    return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  if (arr.length === 0) {
      return(0)
  };

  return(max - min);
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (arr[i] % 2 === 0) {
      (sumEvenElement += element);
    }
    else {
      (sumOddElement += element);
    }
  }
  return (sumEvenElement - sumOddElement);
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length === 0) {
    return(0)
  };

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (arr[i] % 2 === 0) {
      (sumEvenElement += element);
      countEvenElement++;
    }
  }
  return (sumEvenElement / countEvenElement);
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i])
    if (result > maxWorkerResult) {
      maxWorkerResult = Math.max(result)
    }
  }
  return maxWorkerResult;
}
