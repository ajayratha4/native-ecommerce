import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.4.228:8080',
});

const excludeAuthorization = ['/login', '/signup', '/'];

instance.interceptors.request.use(
  config => {
    const includeAuthorizationToken =
      window.location.pathname === '/' ||
      excludeAuthorization.includes(window.location.pathname);

    if (!includeAuthorizationToken) {
      //   config.headers["Authorization"] = `Bearer getItemInLocalStorage("token")`;
      // config.headers.Cookie = document.cookie;
    }
    //config.headers["Access-Control-Allow-Origin"] = "*";

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(
      error.response && error.response.data ? error.response.data : error,
    );
  },
);
export const Axios = instance;
