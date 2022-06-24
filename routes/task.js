const express = require('express');
const router = express.Router();
const {tasks} = require('../controllers/index');

// GET tasks listing.
router.get('/', tasks.getTasks);
// POST tasks
router.post('/', function(req, res, next) {});
// UPDATE tasks
router.patch('/:id', tasks.updateTasks);
// DELETE tasks
router.delete('/:id', function(req, res, next) {});

module.exports = router;