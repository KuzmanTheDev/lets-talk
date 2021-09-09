import axios from "axios";

const api = axios.create({
    baseURL: "http://188.166.170.44:8080/v1"
})

export const login= (values) => api.post("/login", values).then((res)=> res.data)
