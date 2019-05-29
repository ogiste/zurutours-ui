import axios from 'axios';

export const API_URL = 'https://zurutours.herokuapp.com/api';

export const api = {
  user: {
    create: data => axios.post(`${API_URL}/users/`, data),
    login: data => axios.post(`${API_URL}/auth/`, data),
  },
  tour: {
    create: data => axios.post(`${API_URL}/tours/`, data),
    list: () => axios.get(`${API_URL}/tours/`),
    update: tourId => axios.patch(`${API_URL}/tours/${tourId}`),
    remove: tourId => axios.delete(`${API_URL}/tours/${tourId}`),
  }
};
