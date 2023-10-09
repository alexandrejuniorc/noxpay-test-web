import axios from "axios";

export const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });

export const getAllCriptos = async () => {
  return await api.get("/cryptocurrency").then((response) => response.data);
};
export const createNewCripto = async (data: any) => {
  return await api
    .post("/cryptocurrency", data)
    .then((response) => response.data);
};
export const updateVoteCripto = async (id: string) => {
  return await api
    .put(`/cryptocurrency/${id}/vote`)
    .then((response) => response.data);
};
