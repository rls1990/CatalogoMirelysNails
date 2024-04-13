/* eslint-disable no-undef */
import axios from "./axios";

export const list = () => axios.get("/equipo");
export const getMiembro = (id) => axios.get(`/equipo/${id}`);
export const getDiplomasByMiembro = (miembro) =>
  axios.get(`/diploma/imgdiplomapormiembro/${miembro}`);
