import axios from "axios";

export const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });

type Cripto = {
  id: string;
  name: string;
  price: number;
  votes: number;
};

interface GetAllCriptosResponse {
  maxPages: number;
  count: number;
  results: Cripto[];
}

export const getAllCriptos = async (page: number, top: number) => {
  return await api
    .get("/cryptocurrency", {
      params: {
        page,
        top,
      },
    })
    .then((response) => ({
      maxPages: Number(response.headers["max-pages"]),
      count: Number(response.headers["count"]),
      results: response.data,
    }));
};
export const createNewCripto = async (data: any) => {
  return await api
    .post("/cryptocurrency", data)
    .then((response) => response.data);
};
export const updateVoteCripto = async (id: string) => {
  return await api
    .put(`/cryptocurrency/${id}/vote`, {
      id,
      vote: 1,
    })
    .then((response) => response.data);
};
