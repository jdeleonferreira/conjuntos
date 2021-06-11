import axios from "axios";

const api = axios.create({
    baseURL: `http://18.191.208.152:8000/`,
    responseType: "json",
});

export default api;
