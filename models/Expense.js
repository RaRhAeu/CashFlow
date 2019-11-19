const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
//const Currency = mongoose.Types.Currency;


const ExpenseSchema = new Schema({
  eventName: {
    type: String,
    required: true,
    trim: true
  },
  who: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0.01,
    set: setAmount
  },
  involved: {
    type: [String],
    required: true
  }
})

function setAmount(amount){
  return amount.toFixed(2);
}
// Expense.amount.toFixed(2);

module.exports = Expense = mongoose.model('expense', ExpenseSchema);
