const express = require('express');
const teacherController = require('../controllers/teacherController');

const router = express.Router();

router.route('/').get(teacherController.get).post(teacherController.post);

module.exports = router;
