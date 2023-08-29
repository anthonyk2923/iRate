const Teacher = require('../models/teacherModel');

//get all teachers
const get = async (req, res) => {
  res.json(await Teacher.find());
};
const post = async (req, res) => {
  if (req.body.name) {
    if ((await Teacher.exists({ name: req.body.name })) == null) {
      res.json(await Teacher.create({ name: req.body.name }));
    } else {
      res.status(400).json({
        message:
          'The teacher you are trying to add is already in the database.',
      });
    }
  } else {
    res
      .status(400)
      .json({ message: 'Please add a teacher name to your request' });
  }
};
module.exports = {
  get,
  post,
};
