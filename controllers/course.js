const model = require('../models/index');

const getCourses = async function (req, res, next) {
    try {
        const courses = await model.Course.findAll({
            include: [{
                model: model.Instructor,
                as: 'instructor'
            },{
                model: model.CourseDetail,
                as: 'course_detail'
            }]
        });
        if (courses.length !== 0) {
            res.status(200).json({
                'success': true,
                'message': null,
                'data': courses
            })
        } else {
            res.status(200).json({
                'success': true,
                'message': 'EMPTY',
                'data': []
            })
        }
    } catch (err) {
        res.status(500).json({
            'success': false,
            'error': {
                'message': err.message,
            }
        })
    }
}

const getCourse = async function (req, res, next) {
    try {
        const {id} = req.params;
        const course = await model.Course.findByPk(id, {
            include: [{
                model: model.Instructor,
                as: 'instructor'
            },{
                model: model.CourseDetail,
                as: 'course_detail'
            }]
        });
        if (course) {
            res.status(201).json({
                'success': true,
                'message': null,
                'data': course,
            })
        } else {
            res.status(500).json({
                'success': false,
                'error': {
                    'message': 'Server error',
                }
            })    
        }
    } catch (err) {
        res.status(400).json({
            'success': false,
            'error': {
                'message': err.message,
            }
        })
    }
}

const addCourse = async function(req, res, next) {
    try {
        const course = await model.Course.create({
            name: req.body.name,
            rank: req.body.rank,
        });        

        if (course) {
            res.status(201).json({
                'success': true,
                'message': 'Successfully create course',
                'data': course,
            })
        } else {
            res.status(500).json({
                'success': false,
                'error': {
                    'message': 'Server error',
                }
            })    
        }
    } catch (err) {
        res.status(400).json({
            'success': false,
            'error': {
                'messages': err.message,
            }
        })
    }
}

const updateCourse = async function(req, res, next) {
    try {
        const {id} = req.params;
        const {name, rank} = req.body;

        const course = await model.Course.findByPk(id);

        if (course) {
            course.set({
                name,
                rank,
            })
            course.save()

            res.json({
                'success': true,
                'messages': 'Successfully updated',
                'data': course,
            })
        }else{
            res.status(500).json({
                'success': false,
                'error': {
                    'messages': 'Server error',
                }
            })    
        }
    } catch (err) {
        res.status(400).json({
            'success': false,
            'error': {
                'messages': err.message,
            }
        })
    }
}

const removeCourse = async function(req, res, next) {
    try {
        let {id} = req.params;

        let course = await model.Course.destroy({
            where: {
                id: id
            }
        })

        if (course) {
            res.json({
                'success': true,
                'messages': 'Successfully removed',
            })
        }else{
            res.status(500).json({
                'success': false,
                'error': {
                    'messages': 'Server error',
                }
            })    
        }
    } catch (err) {
        res.status(400).json({
            'success': false,
            'error': {
                'messages': err.message,
            }
        })
    }
}

module.exports = { 
    getCourses,
    getCourse,
    addCourse,
    updateCourse,
    removeCourse
}
