import { z } from "zod";

// Campos reutilizáveis
const name = z.string().trim().min(2, "Digite o nome");
const urlImg = z.string().trim().url("Digite uma URL válida");
const price = z.coerce.number().min(1, "Digite o preço");
const sku = z.string().trim().min(2, "No mínimo 2 dígitos").max(6, "No máximo 6 dígitos");
const quantity = z.coerce.number().min(1, "A quantidade deve ser um número positivo");
const marca = z.string().trim();
const material = z.string().trim();
const tema = z.string().trim();
const genero = z.string().trim();
const numeroJogadores = z.string().trim();

// Schema principal
export const productSchema = z.object({
  name,
  urlImg,
  price,
  sku,
  quantity,
  marca,
  material,
  tema,
  genero,
  numeroJogadores,
});

export type ProductShemaType = z.infer<typeof productSchema>;
