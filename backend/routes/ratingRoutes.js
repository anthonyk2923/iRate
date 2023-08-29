const router = require('express').Router();
const ratingController = require('../controllers/ratingController');

router.route('/').get(ratingController.get).post(ratingController.post);
router.route('/:id').post(ratingController.postOne);
module.exports = router;
