const Walker = require('../models/Walker');

// Create item

exports.createWalker = async (req, res) => {
  try {
    const { name,email,experience, availableTime, description, } = req.body;
    const newItem = new Walker({
      name,
      email,
      experience,
      availableTime,
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
exports.getWalkers = async (req, res) => {
  try {
    const items = await Walker.find();
    res.json(items);
  } catch (err) {
    console.log('err: ', err);
    res.status(500).send('Server Error');
  }
};

// Get single item
exports.getWalker = async (req, res) => {
  try {
    const item = await Walker.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ msg: 'Walker not found' });
    }
    res.json(item);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// Delete item
exports.deleteWalker = async (req, res) => {
  try {
    const item = await Walker.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ msg: 'Walker not found' });
    }
    await item.deleteOne({ _id: req.params.id });
    res.json({ msg: 'Walker removed' });
  } catch (err) {
    console.log('err: ', err);
    res.status(500).send('Server Error');
  }
};

// Update item
exports.updateWalker = async (req, res) => {
  try {
    const { name, email,experience,availableTime,description } = req.body;
    const item = await Walker.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ msg: 'Walker not found' });
    }

    if (name) item.name = name;
    if (email) item.email = email;
    if (experience) item.experience = experience;
    if (availableTime) item.availableTime = availableTime;
    if (description) item.description = description;

    await item.save();
    res.json(item);
  } catch (err) {
    console.log('err: ', err);
    res.status(500).send('Server Error');
  }
};
