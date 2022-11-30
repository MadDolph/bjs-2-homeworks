"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let nDiscriminant;
  let nRoot;
  nDiscriminant = (Math.pow(b, 2) - (4 * a * c));

  if (nDiscriminant === 0) {
    nRoot = -b / (2 * a);
    arr.push(nRoot);
  }
     
    else if (nDiscriminant >  0) 
      {
        nRoot = (-b + Math.sqrt(nDiscriminant) )/(2*a);
        arr.push(nRoot);
        nRoot = (-b - Math.sqrt(nDiscriminant) )/(2*a);
        arr.push(nRoot);
      }
    
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  if (typeof(percent) === "string") {
    percent = parseInt(percent, 10);
  }
    
  if (percent != percent) {
    return(`Параметр <Процентная ставка> содержит неправильное значение ${percent}`);
  }

  if (typeof(contribution) === "string") {
    contribution = parseInt(contribution, 10);
  }
    
  if (contribution != contribution) {
    return(`Параметр <Первоначальный взнос> содержит неправильное значение ${contribution}`);
  }
  
}