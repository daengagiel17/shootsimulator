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

module.exports = { 
    getTasks
}