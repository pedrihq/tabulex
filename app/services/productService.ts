import { api } from "@/app/services/api";
import { Produto } from "../types/typeProdutos";

export const getProdutos = async (): Promise<Produto[]> => {
  const response = await api.get("/products");
    return response.data;
};
export const postProdutos = async (data: unknown) => {
  const response = await api.post("/AddProduct", data);
  return response.data;
};
export const putProdutos = async (data: unknown, id: any) => {
  const response = await api.put(`/products/${id}`, data);
  return response.data;
};
export const deletaProduto = async (id: any) => {
  const response = await api.post(`/deleteProducts/${id}`);
  return response;
};
