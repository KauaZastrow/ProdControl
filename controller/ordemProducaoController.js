import { OrdemProducao } from "../model/OrdemProducao.js";

import {
    cadastrarOrdemProducao,
    listarOrdensProducao,
    buscarOrdemProducaoPorIndice,
    atualizarOrdemProducao,
    excluirOrdemProducao
} from "../repository/ordemProducaoRepository.js";

export function cadastrarNovaOrdem(numero, produto, quantidade, prazo) {
    const ordem = new OrdemProducao(numero, produto, quantidade, prazo);
    cadastrarOrdemProducao(ordem);
    console.log("Ordem de produção cadastrada com sucesso!");
}

export function listarTodasOrdensProducao() {
    const listaOrdens = listarOrdensProducao();

    console.log("\n=== ORDENS DE PRODUÇÃO ===");

    for (let indice = 0; indice < listaOrdens.length; indice++) {
        const ordem = listaOrdens[indice];

        console.log(
            `Índice: ${indice} | Número: ${ordem.numero} | ` +
            `Produto: ${ordem.produto} | Quantidade: ${ordem.quantidade} | ` +
            `Prazo: ${ordem.prazo} | Status: ${ordem.status}`
        );
    }
}

export function buscarOrdemProducao(indice) {
    const ordem = buscarOrdemProducaoPorIndice(indice);

    if (!ordem) {
        console.log("Ordem de produção não encontrada nesse índice.");
        return;
    }

    console.log("Ordem encontrada:", ordem);
    return ordem;
}

export function atualizarDadosOrdemProducao(
    indice, numero, produto, quantidade, prazo
) {
    if (!buscarOrdemProducaoPorIndice(indice)) {
        console.log("Não foi possível atualizar: ordem inexistente.");
        return;
    }

    const ordem = new OrdemProducao(numero, produto, quantidade, prazo);
    atualizarOrdemProducao(indice, ordem);

    console.log("Ordem de produção atualizada com sucesso!");
}

export function excluirDadosOrdemProducao(indice) {
    if (!buscarOrdemProducaoPorIndice(indice)) {
        console.log("Não foi possível excluir: ordem inexistente.");
        return;
    }

    excluirOrdemProducao(indice);
    console.log("Ordem de produção excluída com sucesso!");
}

export function iniciarOrdemProducao(indice) {
    const ordem = buscarOrdemProducaoPorIndice(indice);

    if (!ordem) {
        console.log("Ordem de produção não encontrada nesse índice.");
        return;
    }

    ordem.iniciar();
    console.log("Ordem de produção iniciada com sucesso!");
}

export function concluirOrdemProducao(indice) {
    const ordem = buscarOrdemProducaoPorIndice(indice);

    if (!ordem) {
        console.log("Ordem de produção não encontrada nesse índice.");
        return;
    }

    ordem.concluir();
    console.log("Ordem de produção concluída com sucesso!");
}