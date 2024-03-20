import express from 'express';

const router = express.Router();
router.get('/', (req, res) => {
  res.send('Hello1 World');
});
export default router;
