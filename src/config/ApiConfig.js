const mainURL = process.env.REACT_APP_API_URL;
const apiUrl = `${mainURL}/`;

let ApiConfig = {
  mainURL,
  apiUrl,
  token: null,
  login: `${apiUrl}doctor/login`,
  forgotPassword: `${apiUrl}doctor/reset/link`,
};

export default ApiConfig;
