"use client";
import { FilePen, LoaderCircleIcon, Package } from "lucide-react";
import { ButtonComponet } from "./Button-component";
import { getProdutos } from "../services/productService";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ProdutoContext } from "../context/ProdutoContext";
import EditarProduto from "./ProdutoModal";
import { Produto } from "../types/typeProdutos";
import { Tooltip } from "react-tooltip";

interface EditarEstoqueModalProps {
  isOpen: boolean;
  onClose: () => void;
  produtoParaEditar?: Produto | null;
}

function EditarEstoqueModal({
  isOpen,
  onClose,
  produtoParaEditar,
}: EditarEstoqueModalProps) {
  if (!isOpen) return null;
  return (
    <EditarProduto voltaTela={onClose} produtoParaEditar={produtoParaEditar} />
  );
}

export default function ProdutosRederizados() {
  const { adicionarProdutos, produtos } = useContext(ProdutoContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [produtoParaEditar, setProdutoParaEditar] = useState<Produto | null>(
    null
  );
  const [errorState, setErrorState] = useState(null);
  useEffect(() => {
    getProdutos()
      .then((response) => {
        adicionarProdutos(response);
      })
      .catch((error) => {
        setErrorState(error.message);
      });
  }, [adicionarProdutos]);

  function editarProdutoSelecionado(produto: Produto) {
    setIsOpen(true);
    setProdutoParaEditar(produto);
  }

  if (errorState != null && produtos.length === 0) {
    return (
      <div className="text-2xl flex">
        Error:
        <strong className="text-red-500 uppercase ml-2 mr -2 font-black flex items-center">
          {errorState} <LoaderCircleIcon className="animate-spin size-6" />
        </strong>
      </div>
    );
  } else

  return (
    <div
      className={
        "w-full rounded-lg xl:grid-cols-4 items-center gap-3 grid grid-cols-1"
      }
    >
      {produtos.map((item) => (
        <div
          key={item._id}
          className="bg-white flex-col flex p-4 rounded-md shadow-lg space-y-4"
        >
          <Image
            src={item.urlImg}
            alt="Imagem do jogo"
            className="w-full h-56 object-contain"
            width={200}
            height={200}
          />
          <div className="flex gap-1 w-56 overflow-hidden uppercase text-xl items-center text-blue-500">
            <span>
              <Package className="size-6" />
            </span>

            <a className="truncate" id={`tooltip-${item._id}`}>
              {item.name}
            </a>
            <Tooltip anchorSelect={`#tooltip-${item._id}`} place="top">
              {item.name}
            </Tooltip>
          </div>
          <div className="flex-col flex">
            <p>SKU: {item.sku}</p>
            <p>Estoque: {item.quantity}</p>
            <div className="flex gap-1 font-extrabold text-gray-600">
              <p>R$: {item.price}</p>
            </div>
            <div className="text-sm flex flex-col gap-1 mt-5">
              <p>Marca: {item.marca}</p>
              <p>Material: {item.material}</p>
              <p>Tema: {item.tema}</p>
              <p>Gênero: {item.genero}</p>
              <p>Jogadores: {item.numeroJogadores}</p>
            </div>
          </div>
          <div className="w-full flex-1 flex">
            <ButtonComponet.Button
              onClick={() => editarProdutoSelecionado(item)}
            >
              <ButtonComponet.Icon>
                <FilePen className="size-4" />
              </ButtonComponet.Icon>
              Editar estoque
            </ButtonComponet.Button>
          </div>
        </div>
      ))}
      <EditarEstoqueModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        produtoParaEditar={produtoParaEditar}
      />
    </div>
  );
}
