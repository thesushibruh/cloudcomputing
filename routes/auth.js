const express = require('express');
const router = express.Router();
const {
  // signup,
  login,
  getProfile,
  // getAllUsers,
} = require('../controllers/auth');
// const auth = require('../middleware/auth');

// router.post('/signup', signup);
router.post('/login', login);
router.get('/:id', getProfile);
// router.get('/', auth, getAllUsers);

module.exports = router;
