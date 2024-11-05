const express = require('express');
const router = express.Router();
const sensorController = require('../controllers/sensorController');

router.get('/sensor1', sensorController.getSensor1); // GET /api/sensor/sensor1
router.get('/sensor2', sensorController.getSensor2); // GET /api/sensor/sensor2
router.get('/sensor3', sensorController.getSensor3); // GET /api/sensor/sensor3
router.get('/sensor4', sensorController.getSensor4); // GET /api/sensor/sensor4
router.get('/all', sensorController.getAll); // GET /api/sensor/all

module.exports = router;
