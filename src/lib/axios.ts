import axios from "axios";

export const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });

export const getAllCriptos = async () => {
  const getAllCriptos = await api
    .get("/criptocurrency")
    .then((response) => response.data);
  return getAllCriptos;
};

export const createNewCripto = async (data: any) => {
  const createNewCripto = await api
    .post("/criptocurrency", data)
    .then((response) => response.data);
  return createNewCripto;
};

export const updateVoteCripto = async (id: string) => {
  const updateVoteCripto = await api
    .put(`/criptocurrency/${id}/vote`)
    .then((response) => response.data);
  return updateVoteCripto;
};
