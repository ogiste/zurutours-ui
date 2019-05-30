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
    get: tourId => axios.get(`${API_URL}/tours/${tourId}/`),
    update: data => axios.patch(`${API_URL}/tours/${data.tourId}/`, data.formProps),
    remove: tourId => axios.delete(`${API_URL}/tours/${tourId}/`),
  }
};
