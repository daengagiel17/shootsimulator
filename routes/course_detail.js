const express = require('express');
const router = express.Router();
const {course} = require('../controllers/index');

router.put('/:id', course.updateCourseDetail);

module.exports = router;