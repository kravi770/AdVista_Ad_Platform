import jwt from 'jsonwebtoken';

//authenticate token middleware
export const authenticateToken = (req, res, next) => {
  // console.log('reached middleware');
  const token = req.headers['authorization'];
  if (token === null) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: err.message });
    req.user = user;
    next();
  });
};
