const express = require('express');
const router = express.Router();

const Expense = require('../../models/Expense');
const Event = require('../../models/Event');

router.get('/:name', (req, res) => {
  Expense.find({ eventName: req.params.name })
    .then(async (expenses) => {
      const response = await fetch('http://127.0.0.1:8888/',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(expenses)
      });
      const content = await response.json();
      res.json(content);
    })
})

module.exports = router;
