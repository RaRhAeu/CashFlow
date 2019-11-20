const express = require('express');
const router = express.Router();

const Expense = require('../../models/Expense');

router.get('/:name', (req, res) => {
  Expene.find({ eventName: req.params.name })
    .then(async function(expenses) {
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
