"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = (Math.pow(b, 2)-4*a*c);
  let radical;
  let sqrtFirst;
  let sqrtSecond;

  if (d > 0) {
    sqrtFirst = (-b + Math.sqrt(d) )/(2*a);
    sqrtSecond = (-b - Math.sqrt(d) )/(2*a);
    arr.push(sqrtFirst)
    arr.push(sqrtSecond)

    return arr;
  }
  else if (d === 0) {
    radical = (-b/(2*a));
    arr.push(radical)
    return arr;
  }
  else {
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = (percent / 100) / 12;
  let s = amount - contribution;
  let n = countMonths;
  let monthlyPayment = s * (p + (p / (((1 + p) ** n) - 1)));
  
  return (+(monthlyPayment * n).toFixed(2)) 
}

calculateTotalMortgage(10, 0, 50000, 12);