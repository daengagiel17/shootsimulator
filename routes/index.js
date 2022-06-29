const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Shoot Simulator Server Connect!' });
});

const instructor = require('./instructor');
routes.use('/instructor', instructor);

const course = require('./course');
routes.use('/course', course);

const courseDetail = require('./course_detail');
routes.use('/course-detail', courseDetail);

const task = require('./task');
routes.use('/task', task);

const time = require('./time');
routes.use('/time', time);

module.exports = routes;