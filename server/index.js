import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoute from './routes/userRoutes.js';
import connection from './database/db.js';
import authRoute from './routes/auth.js';
import businessRoute from './routes/businessRoutes.js';
import viewerRoute from './routes/viewerRoutes.js';

dotenv.config();

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/user', authRoute);
app.use('/api/business', businessRoute);
app.use('/api/viewer', viewerRoute);
app.use('/', userRoute);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

connection(username, password);

app.listen(8000 || process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
