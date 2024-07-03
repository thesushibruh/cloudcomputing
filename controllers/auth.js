const User = require('../models/User');
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// const signup = async (req, res) => {
//   try {
//     const {name, email, password } = req.body;
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ msg: 'User already exists' });
//     }
//     user = new User({name, email, password });
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(password, salt);
//     await user.save();
//     res.json({ msg: 'User created successfully' });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// };

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }
    // const isMatch = await bcrypt.compare(password, user.password);
    if (password !== user.password) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }
    const payload = { user: { id: user.id } };
    jwt.sign(payload, 'ijazkhanafridi', (err, token) => {
      if (err) throw err;
      res.json({ token, id: user?.id });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ msg: 'user not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).send('Server Error');
  }
};

// const getAllUsers = async (req, res) => {
//   try {
//     const user = await User.find().select('-password');
//     if (!user) {
//       return res.status(404).json({ msg: 'user not found' });
//     }
//     res.json(user);
//   } catch (err) {
//     res.status(500).send('Server Error');
//   }
// };

module.exports = { 
  login,
  getProfile,
  };
