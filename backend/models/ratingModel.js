const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher',
    required: [true, 'Please enter the teacher this rating is for.'],
  },
  name: {
    type: String,
    required: false,
  },
  score: {
    type: Number,
    required: [true, 'Please give a score 1-5'],
    enum: [1, 2, 3, 4, 5],
  },
  body: {
    type: String,
    required: true,
    maxLength: 500,
  },
});

module.exports = mongoose.model('Rating', ratingSchema);
