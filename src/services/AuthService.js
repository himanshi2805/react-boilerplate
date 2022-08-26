import axios from 'axios';
import Config from '../config/ApiConfig';

export const loginService = (payload) => {
  return axios.post(Config.login, payload);
};
