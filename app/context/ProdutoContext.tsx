"use client";

import { createContext, useState } from "react";
import { Produto } from "../types/typeProdutos";

type ProdutoContextType = {
  produtos: Produto[];
  adicionarProdutos: (produtos: Produto[]) => void;
};

export const ProdutoContext = createContext<ProdutoContextType>(
  {} as ProdutoContextType
);

export function ProdutoContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [produtoState, setProdutosState] = useState<Produto[]>([]);

  function adicionarProdutos(produtos: Produto[]) {
    setProdutosState(produtos);
  }

  return (
    <ProdutoContext.Provider
      value={{
        produtos: produtoState,
        adicionarProdutos,
      }}
    >
      {children}
    </ProdutoContext.Provider>
  );
}
