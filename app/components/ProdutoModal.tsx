import { ArrowLeftCircle, Trash } from "lucide-react";
import { ButtonComponet } from "./Button-component";
import { InputComponent } from "./Input-component";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  deletaProduto,
  postProdutos,
  putProdutos,
} from "../services/productService";
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { ProdutoContext } from "../context/ProdutoContext";
import { Produto } from "../types/typeProdutos";

type AddProdutoType = {
  voltaTela: () => void;
  produtoParaEditar?: Produto | null;
};
const productsSchema = z.object({
  name: z.string().trim().min(2, "Digite o nome"),
  urlImg: z.string().trim().url("Digite uma URL válida"),
  price: z.coerce.number().min(1, "Digite o preço"),
  sku: z
    .string()
    .trim()
    .min(2, "No mínimo 2 dígitos")
    .max(6, "No máximo 6 dígitos"),
  quantity: z.coerce
    .number()
    .min(1, "A quantidade deve ser um número positivo"),
  marca: z.string().trim(),
  material: z.string().trim(),
  tema: z.string().trim(),
  genero: z.string().trim(),
  numeroJogadores: z.string().trim(),
});
type ProductsSchema = z.infer<typeof productsSchema>;
export default function ProdutoModal({
  voltaTela,
  produtoParaEditar,
}: AddProdutoType) {
  const { adicionarProdutos, produtos } = useContext(ProdutoContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductsSchema>({
    resolver: zodResolver(productsSchema),
  });
  async function handleSubmitProducts(data: ProductsSchema) {
    try {
      if (produtoParaEditar) {
        await toast.promise(putProdutos(data, produtoParaEditar?._id), {
          pending: "Carregando...",
          success: "Produto Atualizado com sucesso!",
        });
      } else {
        await toast.promise(postProdutos(data), {
          pending: "Carregando...",
          success: "Produto adicionado com sucesso!",
        });
      }
      adicionarProdutos([...produtos, data as Produto]);
      voltaTela(); // volta para a tela principal
    } catch (e: any) {
      console.error(e);
      toast.error(e.response?.data.message ?? e.message);
    }
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative right-0 top-[-40px] max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg fill-black">
        <div className="w-32 px-4">
          <ButtonComponet.Button onClick={voltaTela}>
            <ButtonComponet.Icon>
              <ArrowLeftCircle />
            </ButtonComponet.Icon>
            Voltar
          </ButtonComponet.Button>
        </div>
        <form
          onSubmit={handleSubmit(handleSubmitProducts)}
          className="m-4 rounded space-y-4"
        >
          <div className="grid grid-cols-2 gap-3">
            <div className="pb-2">
              <InputComponent.field
                type="text"
                placeholder="Nome"
                {...register("name", { value: produtoParaEditar?.name })}
              />
              {errors.name && (
                <p className="absolute text-xs text-red-400 border-red-400 border-b">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="pb-2">
              <InputComponent.field
                type="text"
                placeholder="Imagem (URL)"
                {...register("urlImg", { value: produtoParaEditar?.urlImg })}
              />
              {errors.urlImg && (
                <p className="absolute text-xs text-red-400 border-red-400 border-b">
                  {errors.urlImg.message}
                </p>
              )}
            </div>
            <div className="pb-2">
              <InputComponent.field
                type="text"
                placeholder="Preço"
                {...register("price", { value: produtoParaEditar?.price })}
              />
              {errors.price && (
                <p className="absolute text-xs text-red-400 border-red-400 border-b">
                  {errors.price.message}
                </p>
              )}
            </div>
            <div className="pb-2">
              <InputComponent.field
                type="text"
                placeholder="Marca"
                {...register("marca", { value: produtoParaEditar?.marca })}
              />
              {errors.marca && (
                <p className="absolute text-xs text-red-400 border-red-400 border-b">
                  {errors.marca.message}
                </p>
              )}
            </div>
            <div className="pb-2">
              <InputComponent.field
                type="text"
                placeholder="Material"
                {...register("material", {
                  value: produtoParaEditar?.material,
                })}
              />
              {errors.material && (
                <p className="absolute text-xs text-red-400 border-red-400 border-b">
                  {errors.material.message}
                </p>
              )}
            </div>
            <div className="pb-2">
              <InputComponent.field
                type="text"
                placeholder="Tema"
                {...register("tema", { value: produtoParaEditar?.tema })}
              />
              {errors.tema && (
                <p className="absolute text-xs text-red-400 border-red-400 border-b">
                  {errors.tema.message}
                </p>
              )}
            </div>
            <div className="pb-2">
              <InputComponent.field
                type="text"
                placeholder="Gênero"
                {...register("genero", { value: produtoParaEditar?.genero })}
              />
              {errors.genero && (
                <p className="absolute text-xs text-red-400 border-red-400 border-b">
                  {errors.genero.message}
                </p>
              )}
            </div>
            <div className="pb-2">
              <InputComponent.field
                type="text"
                placeholder="Número de Jogadores"
                {...register("numeroJogadores", {
                  value: produtoParaEditar?.numeroJogadores,
                })}
              />
              {errors.numeroJogadores && (
                <p className="absolute text-xs text-red-400 border-red-400 border-b">
                  {errors.numeroJogadores.message}
                </p>
              )}
            </div>
            <div className="pb-2">
              <InputComponent.field
                type="text"
                placeholder="Quantidade"
                {...register("quantity", {
                  value: produtoParaEditar?.quantity,
                })}
              />
              {errors.quantity && (
                <p className="absolute text-xs text-red-400 border-red-400 border-b">
                  {errors.quantity.message}
                </p>
              )}
            </div>
            <div className="pb-2">
              <InputComponent.field
                type="text"
                placeholder="SKU"
                {...register("sku", { value: produtoParaEditar?.sku })}
              />
              {errors.sku && (
                <p className="absolute text-xs text-red-400 border-red-400 border-b">
                  {errors.sku.message}
                </p>
              )}
            </div>
          </div>
          <ButtonComponet.Button
            className="bg-green-500 hover:bg-green-600"
            type="submit"
          >
            {produtoParaEditar ? "Atualizar produto" : "Adicionar produto"}
          </ButtonComponet.Button>
        </form>
        <div className="m-4">
          {produtoParaEditar && (
            <ButtonComponet.Button
              onClick={() => {
                deletaProduto(produtoParaEditar?._id);
              }}
              className="bg-red-500 hover:bg-red-400"
            >
              <ButtonComponet.Icon>
                <Trash />
              </ButtonComponet.Icon>
            </ButtonComponet.Button>
          )}
        </div>
        <ToastContainer position="bottom-left" theme="light" />
      </div>
    </div>
  );
}
