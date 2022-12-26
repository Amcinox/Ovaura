const axios = require("axios");
require("dotenv").config();

// ----------------------------------------------------------------------
const apiKey = process.env.DELLE_API_KEY;

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

async function callGetApi({ url }) {
  const response = await axiosInstance({
    method: "get",
    url,
  });
  return response.data;
}

async function callPostApi({ url, data }) {
  const response = await axiosInstance({
    method: "post",
    url,
    data,
  });

  return response.data;
}

async function callPutApi({ url, data }) {
  const response = await axiosInstance({
    method: "put",
    url,
    data,
  });
  return response.data;
}

async function callUploadApi({ url, data }) {
  const response = await axiosInstance({
    method: "post",
    url,
    data,
  });
  return response.data;
}

module.exports = {
  callGetApi,
  callPostApi,
  callPutApi,
  callUploadApi,
  axiosInstance,
};
