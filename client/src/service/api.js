import axios from 'axios';
const URL = 'http://localhost:8000/api';
const userURL = 'http://localhost:8000';

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
    // console.log(response.data);
    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }
    localStorage.setItem('accessToken', response.data.accessToken);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const submitAd = async (ad) => {
  try {
    const response = await axios.post(`${URL}/business/submit-ad`, ad, {
      headers: {
        Authorization: `${localStorage.getItem('accessToken')}`,
      },
    });
    if (response.status !== 201) {
      throw new Error('Network response was not ok');
    }
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get(`${userURL}/user`, {
      headers: {
        Authorization: `${localStorage.getItem('accessToken')}`,
      },
    });
    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAds = async () => {
  try {
    const response = await axios.get(`${URL}/viewer/targeted-ads`, {
      headers: {
        Authorization: `${localStorage.getItem('accessToken')}`,
      },
    });
    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAdsByBusinessId = async () => {
  try {
    const response = await axios.get(`${URL}/business/ads`, {
      headers: {
        Authorization: `${localStorage.getItem('accessToken')}`,
      },
    });
    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAdById = async (id) => {
  try {
    // console.log(id);
    const response = await axios.get(`${URL}/business/ad/${id}`, {
      headers: {
        Authorization: `${localStorage.getItem('accessToken')}`,
      },
    });
    console.log(response.data);
    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateAd = async (ad) => {
  try {
    const response = await axios.put(`${URL}/business/ad/${ad._id}`, ad, {
      headers: {
        Authorization: `${localStorage.getItem('accessToken')}`,
      },
    });
    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteAd = async (id) => {
  try {
    const response = await axios.delete(`${URL}/business/ad/${id}`, {
      headers: {
        Authorization: `${localStorage.getItem('accessToken')}`,
      },
    });
    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
