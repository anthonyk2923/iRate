const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      unique: [
        true,
        'Teacher Name already taken, please check if this teacher already exists.',
      ],
      maxLength: [20, 'teacher name to long'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Teacher', teacherSchema);
