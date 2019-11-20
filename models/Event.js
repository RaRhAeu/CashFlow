const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create event schema
const EventSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  participants: {
    type: [String],
    default: undefined
  }
  // email, password_hash
});

module.exports = Event = mongoose.model('event', EventSchema);
