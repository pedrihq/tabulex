"use client";

import { createContext, ReactNode, useState } from "react";
type ProdutoSateContext = {
  telaAddProduto: boolean;
  mostraTelaAddProduto: () => void;
  naoMostraTelaAddProduto: () => void;
};

export const ProdutoStateContext = createContext<ProdutoSateContext>(
  {} as ProdutoSateContext
);

export function ProdutoStateProvider({ children }: { children: ReactNode }) {
  //
  //  Mostra a tela de add produtos, Função de mostra e a outra de remover a tela "Comerça"
  //
  const [telaAddProduto, setTelaAddProduto] = useState(false);

  function mostraTelaAddProduto() {
    setTelaAddProduto(true);
  }

  function naoMostraTelaAddProduto() {
    setTelaAddProduto(false);
  }
  //
  // Mostra a tela de add produtos "Termina"
  //
  return (
    <ProdutoStateContext.Provider
      value={{
        telaAddProduto,
        mostraTelaAddProduto,
        naoMostraTelaAddProduto,
      }}
    >
      {children}
    </ProdutoStateContext.Provider>
  );
}
