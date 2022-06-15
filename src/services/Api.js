import axios from "axios";

const Api = axios.create({
  headers: {
    "cache-control": "no-cache",
    "Content-Type": "application/json; charset=utf-8",
    Accept: "*/*",
    "Access-Control-Allow-Origin": "*"
  },
});

export default Api;
