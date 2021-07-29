const express = require('express');
const taskController = require('../controller/taskController');
const router = express.Router();

const TaskController = require('../controller/taskController');
const TaskValidation = require('../middlewares/taskValidation');


router.post('/', TaskValidation, TaskController.create);

router.put('/:id', TaskController.update);
router.put('/:id/:done', TaskController.done);

router.get('/:id', TaskController.show);

router.get('/filter/all/:macaddress', TaskController.all);
router.get('/filter/late/:macaddress', TaskController.late);
router.get('/filter/today/:macaddress', TaskController.today);
router.get('/filter/week/:macaddress', TaskController.week);
router.get('/filter/month/:macaddress', TaskController.month);
router.get('/filter/year/:macaddress', TaskController.year);


router.delete('/:id', TaskController.delete);

module.exports = router;