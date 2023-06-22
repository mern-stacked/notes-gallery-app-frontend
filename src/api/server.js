import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance =  axios.create({
    baseURL: 'https://notes-zone-api.onrender.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token')

    if(token){
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err)
  }
);

export default instance;