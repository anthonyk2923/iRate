const Rating = require('../models/ratingModel');

const get = async (req, res) => {
  res.json(await Rating.find());
};
const post = async (req, res) => {
  reqName = req.body.name ? req.body.name : 'anonymous';
  if (
    reqName &&
    req.body.teacher &&
    req.body.score &&
    req.body.score <= 5 &&
    req.body.score >= 1 &&
    req.body.body
  ) {
    res.status(200).json(
      await Rating.create({
        name: reqName,
        teacher: req.body.teacher,
        score: req.body.score,
        body: req.body.body,
      })
    );
  } else {
    res.status(400).json({
      message:
        'Please ensure your have added a score, body, a teacher you are rating, and your score is in the range 1-5  ',
    });
  }
};
const postOne = async (req, res) => {
  res.json(await Rating.find({ teacher: req.params.id }));
};
module.exports = { get, post, postOne };
