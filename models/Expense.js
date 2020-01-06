const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// enentName => EventID: { type: ObjectID }
const ExpenseSchema = new Schema({
  eventID: {
    type: Schema.ObjectId,
    required: true,
    trim: true
  },
  who: {
    type: String,
    required: true
  },
  whatfor: {
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


module.exports = Expense = mongoose.model('expense', ExpenseSchema);
