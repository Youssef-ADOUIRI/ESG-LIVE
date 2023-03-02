import axios from "axios";

export const MyApiClient = axios.create({
  baseURL: "https://esg-live.vercel.app/",
  timeout: 10000,
});
