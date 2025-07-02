"use client";
import { Package, PackagePlus } from "lucide-react";
import { ButtonComponet } from "../Button-component";
// import AddProdutoComponent from "../AddProduto-component";
import { ProdutoStateContext } from "../../context/ProdutoStateContext";
import { useContext } from "react";
import EditarProduto from "../ProdutoModal";

export default function Header() {
  const { telaAddProduto, mostraTelaAddProduto, naoMostraTelaAddProduto } =
    useContext(ProdutoStateContext);

  return (
    <aside className="shadow-2xl w-full bg-white rounded-lg p-3 box-border sticky top-3 h-16 flex items-center">
      <nav className="justify-between flex items-center w-full">
        <div className="flex gap-1 font-extrabold items-center">
          <span className="">
            <Package className="size-5 text-blue-500" />
          </span>
          <h1 className="uppercase font-light select-none">
            Controle de{" "}
            <strong className="text-blue-500 font-black">Estoque</strong>
          </h1>
        </div>
        <div>
          {!telaAddProduto && (
            <div>
              <ButtonComponet.Button onClick={mostraTelaAddProduto}>
                <ButtonComponet.Icon>
                  <PackagePlus />
                </ButtonComponet.Icon>
                Add Novo produto
              </ButtonComponet.Button>
            </div>
          )}
        </div>
      </nav>
      {telaAddProduto && (
        <EditarProduto voltaTela={naoMostraTelaAddProduto} />
      )}
    </aside>
  );
}
