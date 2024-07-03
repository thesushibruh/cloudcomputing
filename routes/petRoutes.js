const express = require('express');
const router = express.Router();
const {
  createPet,
  getPets,
  getPet,
  updatePet,
  deletePet,
} = require('../controllers/petController');
const auth = require('../middleware/auth');

router.post('/', auth, createPet);
router.get('/', getPets);
router.get('/:id', getPet);
router.patch('/:id',auth, updatePet);
router.delete('/:id',auth, deletePet);

module.exports = router;
