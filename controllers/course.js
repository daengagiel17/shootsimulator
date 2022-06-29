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
            courses.sort((a,b) => b.id - a.id);
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
        const {time, weapon_name, weapon_type, instructorId, course_detail} = req.body
        const date = new Date(req.body.date);

        if (time && date && weapon_name && weapon_type && instructorId && course_detail)
        {
            const course = await model.Course.create({
                time,
                date,
                weapon_name,
                weapon_type,
                instructorId
            });

            course_detail.sort((a, b) => b.score - a.score);
            await Promise.all(course_detail.map(async(detail) => {
                await model.CourseDetail.create({
                        courseId: course.id,
                        ...detail
                });    
            }));

            const data = await model.Course.findByPk(course.id, {
                include: [{
                    model: model.Instructor,
                    as: 'instructor'
                },{
                    model: model.CourseDetail,
                    as: 'course_detail'
                }]
            });
            if (data) {
                res.status(201).json({
                    'success': true,
                    'message': 'Successfully create course',
                    'data': data,
                })
            } else {
                res.status(500).json({
                    'success': false,
                    'error': {
                        'message': 'Server error',
                    }
                })    
            }    
        }
        else
        {
            res.status(400).json({
                'success': false,
                'error': {
                    'messages': 'date,time,weapon_name,weapon_type,instructorId,course_detail is required',
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

const updateCourseDetail = async function(req, res, next) {
    try {
        const {id} = req.params;
        const {round_fired, hits, misses, score, result} = req.body;

        const courseDetail = await model.CourseDetail.findByPk(id);

        if (courseDetail) {
            courseDetail.set({
                round_fired,
                hits,
                misses,
                score,
                result
            })
            courseDetail.save()

            res.json({
                'success': true,
                'messages': 'Successfully updated',
                'data': courseDetail,
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
    removeCourse,
    updateCourseDetail
}
