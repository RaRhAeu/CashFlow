const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const ExpenseSchema = new Schema({
  who: {
    type: String,
    required: true
  },
  amount: {
    type: Currency,
    required: true,
    min: 0
  },
  involved: {
    type: [String],
    required: true
  }
})
// Expense.amount.toFixed(2);

module.exports = Expense = mongoose.model('expense', ExpenseSchema);
