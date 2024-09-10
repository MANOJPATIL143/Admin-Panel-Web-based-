import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; 

axios.post(`${API_BASE_URL}/api/admin/login`, { username, password })
  .then(response => {
    // Handle success
  })
  .catch(error => {
    console.error('Login failed:', error);
  });
