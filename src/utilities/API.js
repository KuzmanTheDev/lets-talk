import axios from "axios";
import SecureLS from "secure-ls";

const ls = new SecureLS();
const { token } = ls.get("userData");

const api = axios.create({
  baseURL: "https://188.166.170.44:8080/v1",
});

export const home = () =>
  api
    .get("/home", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

export const login = (values) =>
  api.post("/login", values).then((res) => res.data);
