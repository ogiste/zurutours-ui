import axios from 'axios';

const setAuthToken = token => {

  if (token) {
    // Apply to every request
    localStorage.setItem('AUTH_TOKEN', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${getAuthToken()}`;
  } else {
    // Delete the token
    localStorage.removeItem('AUTH_TOKEN');
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const getAuthToken = () => {
  return localStorage.getItem('AUTH_TOKEN');
};
export default setAuthToken;
