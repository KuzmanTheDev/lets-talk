import axios from "axios";

const instance = axios.create({
  baseURL: "https://188.166.170.44:8080/v1",
});

export default instance;
