const asyncHandler = require('express-async-handler');
const db = require('../config/db');

module.exports.getSensor1 = asyncHandler(async (req, res) => {
  const query = 'SELECT * FROM sensor1 ORDER BY last_update DESC LIMIT 1';
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
});
// modificar query para los demas sensores

module.exports.getSensor2 = asyncHandler(async (req, res) => {
  const query = 'SELECT * FROM sensor2 ORDER BY last_update DESC LIMIT 1';
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
});

module.exports.getSensor3 = asyncHandler(async (req, res) => {
  const query = 'SELECT * FROM sensor3 ORDER BY last_update DESC LIMIT 1';
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
});

module.exports.getSensor4 = asyncHandler(async (req, res) => {
  const query = 'SELECT * FROM sensor4 ORDER BY last_update DESC LIMIT 1';
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
});

module.exports.getAll1 = asyncHandler(async (req, res) => {
  const query = 'SELECT * FROM sensor1 ORDER BY last_update DESC ';
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
});

module.exports.getAll2 = asyncHandler(async (req, res) => {
  const query = 'SELECT * FROM sensor2 ORDER BY last_update DESC ';
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
});

module.exports.getAll3 = asyncHandler(async (req, res) => {
  const query = 'SELECT * FROM sensor3 ORDER BY last_update DESC ';
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
});

module.exports.getAll4 = asyncHandler(async (req, res) => {
  const query = 'SELECT * FROM sensor4 ORDER BY last_update DESC ';
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
});
