import User from '../models/user.js';
import Ad from '../models/ad.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// auth-controller
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
        { USER: user },
        process.env.ACCESS_TOKEN_SECRET
      );
      res.status(200).json({ accessToken: accessToken, user: user });
    } else {
      res.status(401).send('Unauthorized');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//ad-controller
export const submitAd = async (req, res) => {
  const { imageURL, title ,content, target1, target2, target3 } = req.body;
  const businessId = req.user.USER._id;
  // console.log(req.user);
  //   console.log(
  //     'content:',
  //     content,
  //     'target1:',
  //     target1,
  //     'target2:',
  //     target2,
  //     'target3:',
  //     target3,
  //     'businessId:',
  //     businessId
  //   );
  try {
    const newAd = new Ad({
      title,
      imageURL,
      content,
      target1,
      target2,
      target3,
      businessId,
    });
    const ad = await newAd.save();
    res.status(201).json({ message: 'Ad created successfully', ad });
  } catch {
    res.status(500).json({ message: 'Error creating Ad.' });
  }
};

export const getAds = async (req, res) => {
  try{
    const viewerTargets = req.user.USER.targets;
    const requiredAds = await Ad.find({
      $or: [
        { target1: { $in: viewerTargets } },
        { target2: { $in: viewerTargets } },
        { target3: { $in: viewerTargets } },
      ],
    });
    res.status(200).json({ ads: requiredAds });
  }
  catch(err){
    res.status(500).json({ message: err.message });
  }
};