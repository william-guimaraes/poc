const axios = require("axios")

const baseAPI = axios.create({
  baseURL: 'https://api.smooch.io/v2',
})

baseAPI.interceptors.request.use(
  async (config) => {
    const basicAuthCredentials = btoa(process.env.APP_API_KEY_ID + ":" + process.env.APP_API_KEY_SECRET);
    config.headers.common["Authorization"] = "Basic " + basicAuthCredentials;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

baseAPI.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)

exports.API = baseAPI
