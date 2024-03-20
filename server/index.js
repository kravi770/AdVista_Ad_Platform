import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import Router from './routes/userRoutes.js';

dotenv.config();

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Router);

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

app.listen(8000 || process.env.PORT, () => {
  console.log('Server is running on port 3000');
});
