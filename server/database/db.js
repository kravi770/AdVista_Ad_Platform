import mongoose from 'mongoose';

const connection = async (username, password) => {
  const uri = `mongodb+srv://${username}:${password}@cluster0.uqthuaz.mongodb.net/Terabh_internship`;
  try {
    await mongoose.connect(uri);
    console.log('Database connected successfully !');
  } catch (error) {
    console.log('Error in database connection', error);
  }
};
export default connection;
