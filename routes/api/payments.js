const express = require('express');
const router = express.Router();

const Expense = require('../../models/Expense');
const Event = require('../../models/Event');
const PaymentCalc = require('./PaymentCalc');

router.get('/:eventId', (req, res) => {
    const EventID = req.params.eventID;
  Expense.find({ eventID: EventID })
    .then((expenses) => {
      const payments = [];
      expenses.forEach(expense => {
          let newExpense = {who: expense.who, amount: expense.amount, involved: expense.involved};
          payments.push(newExpense);
      });
        let all_names = [];
      Event.findById(EventID)
          .then(event => all_names = event.participants)
          .catch(err => console.log(err));
      const resolved = new PaymentCalc(payments, all_names);
      const res_json = resolved.finalPayments();
      res.json(res_json);
    })
})

module.exports = router;
