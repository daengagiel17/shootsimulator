const model = require('../models/index');

const getInstructors = async function (req, res, next) {
    try {
        const instructors = await model.Instructor.findAll();
        if (instructors.length !== 0) {
            res.status(200).json({
                'success': true,
                'message': null,
                'data': instructors
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

const getInstructor = async function (req, res, next) {
    try {
        const {id} = req.params;
        const instructor = await model.Instructor.findByPk(id);
        if (instructor) {
            res.status(201).json({
                'success': true,
                'message': null,
                'data': instructor,
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

const addInstructor = async function(req, res, next) {
    try {
        const instructor = await model.Instructor.create({
            name: req.body.name,
            rank: req.body.rank,
        });        

        if (instructor) {
            res.status(201).json({
                'success': true,
                'message': 'Successfully create instructor',
                'data': instructor,
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

const updateInstructor = async function(req, res, next) {
    try {
        const {id} = req.params;
        const {name, rank} = req.body;

        const instructor = await model.Instructor.findByPk(id);

        if (instructor) {
            instructor.set({
                name,
                rank,
            })
            instructor.save()

            res.json({
                'success': true,
                'messages': 'Successfully updated',
                'data': instructor,
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

const removeInstructor = async function(req, res, next) {
    try {
        let {id} = req.params;

        let instructor = await model.Instructor.destroy({
            where: {
                id: id
            }
        })

        if (instructor) {
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
    getInstructors,
    getInstructor,
    addInstructor,
    updateInstructor,
    removeInstructor
}
