import axios from "axios";

export default axios.create({
    baseURL: 'https://notes-zone-api.onrender.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });