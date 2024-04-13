/* eslint-disable no-undef */
import axios from "./axios";

export const list = () => axios.get("/precios");
