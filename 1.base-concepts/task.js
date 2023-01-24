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

  //вот этот расчёт это дичь, т.к. это не является телом кредитаю...
  const loanBody = amount - contribution;
  
  let totalCredit;

  //проверяем входящие данные на соответствие требованиям
  
  if(isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    
    return false;
    
  } else { 
           percent = parseInt(percent, 10);
           contribution = parseInt(contribution, 10);
           amount = parseInt(amount, 10);
           countMonths = parseInt(countMonths, 10);
          }

  //начинаем обработку входящих данных
  
  //рассчитываем процентную ставку месячную

  P = percent / 12 / 100;
  
  //Расчёт суммы ежемесячного платежа

  loanPayment = loanBody * (P + (P / (((1 + P) ** countMonths) - 1)));
  
  //общая сумма кредита с процентами за весь период

  totalCredit = loanPayment * countMonths;

  //округление до нужной точности

  totalCredit = + totalCredit.toFixed(2);

  return totalCredit;
  
}