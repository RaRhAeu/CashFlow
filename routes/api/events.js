const express = require('express');
const router = express.Router();

// Event model
const Event = require('../../models/Event');
const Expense = require('../../models/Expense');

// TODO: block route?
router.get('/', (req, res) => {
  Event.find()
    .sort({ date: -1 })
    .then((events) => res.json(events))
    .catch((err) => {
      console.log(err);
      res.status(404).json({ success: false })
    })
});

router.post('/', (req, res) => {
  const newEvent = new Event({
    name: req.body.name,
    participants: req.body.participants
  });
  newEvent.save().then(event => res.json(event))
    .catch(err => res.status(404));

});
router.get('/:id', (req, res) => {
  Event.findById(req.params.id)
    .then(event => {
      res.json(event);
    })
    .catch(err => {
      console.log(err);
      res.status(404);
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Expense.find({eventID: id})
    .then(expenses => expenses.forEach(expense => {
      expense.remove();
    }))
    .catch(err => res.status(404).json({success: false}));
  Event.findById(id)
    .then(event => event.remove()
      .then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false }))
});

module.exports = router;
