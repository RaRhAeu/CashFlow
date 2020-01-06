const express = require('express');
const router = express.Router();

const Expense = require('../../models/Expense');


router.get('/', (req, res) => {
  Expense.find()
    .then((expenses) => res.json(expenses))
    .catch(err => {
      console.log(err);
      res.status(404).json({ success: false });
    })
})

router.get('/:id', (req, res) => {
  Expense.find({ eventID: req.params.id })
    .then((expenses) => res.json(expenses)
  )
    .catch((err) => {
      console.log(err);
      res.status(404).json({ success: false })
    })
});

router.post('/', (req, res) => {
  const newExpense = new Expense({
    eventID: req.body.eventID,
    who: req.body.who,
    whatfor: req.body.whatfor,
    amount: req.body.amount,
    involved: req.body.involved
  });
  newExpense.save().then(expense => res.json(expense))
    .catch(err => res.status(404));
});

router.delete('/:id', (req, res) => {
  Expense.findById(req.params.id)
    .then(expense => expense.remove()
      .then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false }))
});


module.exports = router;
