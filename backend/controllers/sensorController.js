const asyncHandler = require('express-async-handler');
const db = require('../config/db');

module.exports.getSensor1 = asyncHandler(async (req, res) => {
  const query = 'SELECT * FROM sensor1 ORDER BY id DESC LIMIT 1';
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
});

module.exports.getSensor2 = asyncHandler(async (req, res) => {
  const query = 'SELECT * FROM sensor2 ORDER BY id DESC LIMIT 1';
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
});

module.exports.getSensor3 = asyncHandler(async (req, res) => {
  const query = 'SELECT * FROM sensor3 ORDER BY id DESC LIMIT 1';
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
});

module.exports.getSensor4 = asyncHandler(async (req, res) => {
  const query = 'SELECT * FROM sensor4 ORDER BY id DESC LIMIT 1';
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
});

module.exports.getAll = asyncHandler(async (req, res) => {
  const query = 'SELECT * FROM sensor1 ORDER BY id DESC LIMIT 1';
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
});
