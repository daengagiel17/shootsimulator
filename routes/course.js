const express = require('express');
const router = express.Router();
const {course} = require('../controllers/index');

router.get('/', course.getCourses);
router.get('/:id', course.getCourse);
router.post('/', course.addCourse);
router.put('/:id', course.updateCourse);
router.delete('/:id', course.removeCourse);

module.exports = router;