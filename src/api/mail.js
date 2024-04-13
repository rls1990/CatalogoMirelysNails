import axios from "./axios";

export const sendMail = (message) => axios.post("/mail", message);
