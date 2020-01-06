const express = require('express');
const router = express.Router();

const Expense = require('../../models/Expense');
const Event = require('../../models/Event');
const PaymentCalc = require('./PaymentCalc');

router.get('/:eventID', (req, res) => {
  const eventID = req.params.eventID;
  Expense.find({ eventID: eventID })
    .then((expenses) => {
      const payments = [];
      expenses.forEach(expense => {
          const newExpense = {
            who: expense.who,
            amount: expense.amount,
            involved: expense.involved
          };

          payments.push(newExpense);
      });
    Event.findById(eventID)
        .then(event => {
          const all_names = [...event.participants];
          if (all_names.length == 0) {
            res.status(404).json({succes: "false"});
          }
          const resolved = new PaymentCalc(payments, all_names);
          resolved.finalPayments();

          res.json(resolved.results);
        }).catch(err => console.log(err));
    })
    .catch(err => {
      console.log(err);
      res.status(500);
  });
});

module.exports = router;
