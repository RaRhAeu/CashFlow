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

router.get('/:name', (req, res) => {
  Expense.find({ eventName: req.params.name })
    .then((expenses) => res.json(expenses)
  )
    .catch((err) => {
      console.log(err);
      res.status(404).json({ success: false })
    })
});

router.post('/', (req, res) => {
  const newExpense = new Expense({
    eventName: req.body.eventName,
    who: req.body.who,
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
