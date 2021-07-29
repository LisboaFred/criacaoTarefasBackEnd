const TaskModel = require('../model/taskModel');
const { isPast } = require('date-fns');

const TaskValidation = async (req, res, next) => {
    const { macaddress, type, title, description, when } = req.body;

    

    if(!macaddress)
    return res.status(400).json({error: 'macadress is necessary'});
    else if(!type)
    return res.status(400).json({error: 'type is necessary'});
    else if(!title)
    return res.status(400).json({error: 'title is necessary'});
    else if(!description)
    return res.status(400).json({error: 'description is necessary'});
    else if(!when)
    return res.status(400).json({error: 'date and hour is necessary'});
    else if(isPast(new Date(when)))
    return res.status(400).json({error: 'choose a date in the future'});
    else{
        let exists;

        if(req.params.id){
            exists = await TaskModel.
                        findOne(
                            {   '_id': {'$ne': req.params.id},
                                'when': {'$eq': new Date(when)},
                                'macaddress': {'$in': macaddress}
                            });
        }   else {
                exists = await TaskModel.
                        findOne(
                            {
                                'when': {'$eq': new Date(when)},
                                'macaddress': {'$in': macaddress}
                            });
            }                    
        if (exists){
            return res.status(400).json({error: 'you already have a task on this date and time'});
        };
        
        next();
    }
}

module.exports = TaskValidation;