import axios from "axios";

export const MyApiClient = axios.create({
  //baseURL: "https://esg-live.vercel.app/",
  baseURL: "http://127.0.0.1:8080/",
  timeout: 10000,
});
