import axios from 'axios';
const URL = 'http://localhost:8000/api';

export const register = async (user) => {
  try {
    const response = await axios.post(`${URL}/user/signup`, user);
    if (response.status !== 201) {
      throw new Error('Network response was not ok');
    }
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const login = async (user) => {
  try {
    const response = await axios.post(`${URL}/user/login`, user);
    // console.log(response.status);
    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
