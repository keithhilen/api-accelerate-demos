'use strict'

// models/amortization.js

exports.amortize = async (context, params) => {

  return new Promise((resolve, reject) => {
    var loan = {
      rate: params.rate,
      principal: params.principal,
      term: params.term,
      monthly: null,
      schedule: []
    }

    const round = (n) => {return Math.round(n * 100 / 100);};

    loan.monthly = round((((loan.rate / 12) * loan.principal)) / (1-(Math.pow(1 + (loan.rate / 12),(-loan.term)))));
    var balance = loan.principal;
    var month = 1;

    while (balance > 0) {

      var payment = Math.min(loan.monthly, balance);
      var interest = round((balance*loan.rate / 12));
      if (interest <= 1) {interest = 0;}
      var principal = payment - interest;

      var record = {
        month: month,
        balance: balance,
        payment: payment,
        interest: interest,
        principal: principal
      }
      loan.schedule.push(record);
      balance -= principal;
      month++;
    }
    resolve(loan);
  });

}
