import axios from "axios";
const token = '44798935-c223-47e6-b0eb-84df6c6210c7'
const axiosInstance = axios.create({
  baseURL: "https://dev-api-1.sitedocs.com/api/v1",
  headers: { Authorization: token },
});
console.log('axiosInstance',axiosInstance)
export {axiosInstance}