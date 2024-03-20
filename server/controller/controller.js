import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signupUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
      type: req.body.type,
      targets: req.body.targets || [],
    });
    const newUser = await user.save();
    res
      .status(201)
      .json({ message: 'User created successfully', user: newUser });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const loginUser = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user === null) {
    return res.status(400).send('Cannot find user');
  }
  try {
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (isMatch) {
      const accessToken = jwt.sign(
        { userId: user._id },
        process.env.ACCESS_TOKEN_SECRET
      );
      res.status(200).json({ accessToken: accessToken });
    } else {
      res.status(401).send('Unauthorized');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
    // res.status(500).json({ message: 'Some error occured' });
  }
};
