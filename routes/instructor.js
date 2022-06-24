const express = require('express');
const router = express.Router();
const {instructor} = require('../controllers/index');

router.get('/', instructor.getInstructors);
router.get('/:id', instructor.getInstructor);
router.post('/', instructor.addInstructor);
router.put('/:id', instructor.updateInstructor);
router.delete('/:id', instructor.removeInstructor);

module.exports = router;