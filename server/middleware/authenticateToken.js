import jwt from 'jsonwebtoken';
//authenticate token middleware
export const authenticateToken = (req, res, next) => {
  // console.log('reached middleware');
  const token = req.headers['authorization'];
  // console.log('authHeader:', authHeader);
  // const token = authHeader && authHeader.split(' ')[1];
  // console.log('token:', token);
  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: err.message });
    req.user = user;
    // console.log('user:', user);
    next();
  });
};
