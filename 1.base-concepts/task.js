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

  let P;
  let loanPayment;

  //проверяем входящие данные на соответствие требованиям
  if (typeof(percent) === "string") {
    percent = parseInt(percent, 10);
  }
    
  if (percent != percent) {
    return false;
  }

  if (typeof(contribution) === "string") {
    contribution = parseInt(contribution, 10);
  }
    
  if (contribution != contribution) {
    return false;
  }

  if (typeof(amount) === "string") {
    amount = parseInt(amount, 10);
  }
    
  if (amount != amount) {
    return false;
  }

  if (typeof(countMonths) === "string") {
    countMonths = parseInt(countMonths, 10);
  }
    
  if (countMonths != countMonths) {
   return false;
  }
  
  //начинаем обработку входящих данных
  
  //Так и не разобрался в постановке задачи, но описание разнится с входными данными, например.
  
}