const model = require('../models/index');

const getTasks = async function (req, res, next) {
    try {
        const tasks = await model.tasks.findAll({
            include: [{
                model: model.times
            }]
        });
        if (tasks.length !== 0) {
            res.json({
                'status': 200,
                'messages': 'Succes',
                'data': tasks
            })
        } else {
            res.json({
                'status': 'ERROR',
                'messages': 'EMPTY',
                'data': {}
            })
        }
    } catch (err) {
        res.json({
            'status': 'ERROR',
            'messages': err.message,
            'data': {}
        })
    }
}

const updateTasks = async function(req, res, next) {
    try {
        const taskId = req.params.id;
        const {
            description,
        } = req.body;
        const tasks = await model.tasks.update({
            description
        }, {
            where: {
                id: taskId
            }
        });
        if (tasks) {
            res.json({
                'status': 200,
                'messages': 'Task berhasil diupdate',
            })
        }else{
            res.status(500).json({
                'status': 500,
                'messages': 'Server bermasalah',
                'data': {},
            })    
        }
    } catch (err) {
        res.status(400).json({
            'status': 400,
            'messages': err.message,
            'data': {},
        })
    }
}

module.exports = { 
    getTasks,
    updateTasks
}