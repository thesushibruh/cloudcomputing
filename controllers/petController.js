const Pet = require('../models/Pet');

// Create item
exports.createPet = async (req, res) => {
  try {
    const { name,email,breed, age, description, } = req.body;
    const newItem = new Pet({
      name,
      email,
      breed,
      age,
      description,
    });
    await newItem.save();
    res.json(newItem);
  } catch (err) {
    console.log('err: ', err);
    res.status(500).send('Server Error');
  }
};

// Get all items
exports.getPets = async (req, res) => {
  try {
    const items = await Pet.find();
    res.json(items);
  } catch (err) {
    console.log('err: ', err);
    res.status(500).send('Server Error');
  }
};

// Get single item
exports.getPet = async (req, res) => {
  try {
    const item = await Pet.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ msg: 'Pet not found' });
    }
    res.json(item);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Delete item
exports.deletePet = async (req, res) => {
  try {
    const item = await Pet.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ msg: 'Pet not found' });
    }
    await item.deleteOne({ _id: req.params.id });
    res.json({ msg: 'Pet removed' });
  } catch (err) {
    console.log('err: ', err);
    res.status(500).send('Server Error');
  }
};

// Update item
exports.updatePet = async (req, res) => {
  try {
    const { name, email,breed,age,description } = req.body;
    const item = await Pet.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ msg: 'Pet not found' });
    }

    if (name) item.name = name;
    if (email) item.email = email;
    if (breed) item.breed = breed;
    if (age) item.age = age;
    if (description) item.description = description;

    await item.save();
    res.json(item);
  } catch (err) {
    console.log('err: ', err);
    res.status(500).send('Server Error');
  }
};
