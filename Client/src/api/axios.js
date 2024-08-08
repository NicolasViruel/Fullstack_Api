import axios from "axios";

const url = import.meta.env.VITE_BACKEND;

const instance = axios.create({
  baseURL: url,
});

export default instance;