const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController');

router.get('/sensor1', sensorController.getSensor1); // GET /api/sensor/sensor1
router.get('/sensor2', sensorController.getSensor2); // GET /api/sensor/sensor2
router.get('/sensor3', sensorController.getSensor3); // GET /api/sensor/sensor3
router.get('/sensor4', sensorController.getSensor4); // GET /api/sensor/sensor4
router.get('/all1', sensorController.getAll1); // GET /api/sensor/all1
router.get('/all2', sensorController.getAll2); // GET /api/sensor/all2
router.get('/all3', sensorController.getAll3); // GET /api/sensor/all3
router.get('/all4', sensorController.getAll4); // GET /api/sensor/all4

module.exports = router;
