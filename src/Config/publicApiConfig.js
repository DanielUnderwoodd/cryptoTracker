import axios from "axios";
export default axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
