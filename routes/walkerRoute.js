const express = require('express');
const router = express.Router();
const {
  createWalker,
  getWalkers,
  getWalker,
  updateWalker,
  deleteWalker,
} = require('../controllers/walkerController');
const auth = require('../middleware/auth');

router.post('/', auth, createWalker);
router.get('/', getWalkers);
router.get('/:id', getWalker);
router.patch('/:id',auth, updateWalker);
router.delete('/:id',auth, deleteWalker);

module.exports = router;
