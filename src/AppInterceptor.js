import Axios from 'axios';
import ApiConfig from './config/ApiConfig';
import { getObjectFromStore } from './storage/Storage';
import { storageKeys } from './utils/Constant';

Axios.interceptors.request.use(request => requestHandler(request));

Axios.interceptors.response.use(
  response => {
    return response;
  },
  error => errorHandler(error),
);


const requestHandler = async request => {
  let token = ApiConfig.token;
  if (!token) {
    token = await getObjectFromStore(storageKeys.token);
  }
  request.headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  return request;
};

const errorHandler = async error => {
  throw error.response;
};