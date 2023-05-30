import axios from "axios";

export default axios.create({
    baseURL: 'https://notes-gallery-api-i6hc.onrender.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });