import axios from 'axios';

// Axios init start -----------------
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (request) => {
    const originalRequest = request;
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      //Update accessToken to axios headers
      if (originalRequest.headers) {
        originalRequest.headers['Authorization'] = accessToken
          ? `Bearer ${JSON.parse(accessToken)}`
          : accessToken;
      }
      return originalRequest;
    } else {
      // logout();
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // GA-Track exception
    // exceptionEvent(error)
    if (error.response.status === 401) {
      // logout();
      return Promise.reject(error);
    }

    if (error.response.status === 403) {
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export { axiosInstance };

// Axios init end -----------------

export default {};
