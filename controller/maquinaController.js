import { Maquina } from "../model/Maquina.js";

import {
    cadastrarMaquina,
    listarMaquinas,
    buscarMaquinaPorIndice,
    atualizarMaquina,
    excluirMaquina
} from "../repository/maquinaRepository.js";

export function cadastrarNovaMaquina(codigo, nome, setor) {
    const maquina = new Maquina(codigo, nome, setor);
    cadastrarMaquina(maquina);
    console.log("Máquina cadastrada com sucesso!");
}

export function listarTodasMaquinas() {
    const listaMaquinas = listarMaquinas();

    console.log("\n=== MÁQUINAS ===");

    for (let indice = 0; indice < listaMaquinas.length; indice++) {
        const maquina = listaMaquinas[indice];

        console.log(
            `Índice: ${indice} | Código: ${maquina.codigo} | ` +
            `Nome: ${maquina.nome} | Setor: ${maquina.setor} | ` +
            `Status: ${maquina.status}`
        );
    }
}

export function buscarMaquina(indice) {
    const maquina = buscarMaquinaPorIndice(indice);

    if (!maquina) {
        console.log("Máquina não encontrada nesse índice.");
        return;
    }

    console.log("Máquina encontrada:", maquina);
    return maquina;
}

export function atualizarDadosMaquina(indice, codigo, nome, setor) {
    if (!buscarMaquinaPorIndice(indice)) {
        console.log("Não foi possível atualizar: máquina inexistente.");
        return;
    }

    const maquina = new Maquina(codigo, nome, setor);
    atualizarMaquina(indice, maquina);

    console.log("Máquina atualizada com sucesso!");
}

export function excluirDadosMaquina(indice) {
    if (!buscarMaquinaPorIndice(indice)) {
        console.log("Não foi possível excluir: máquina inexistente.");
        return;
    }

    excluirMaquina(indice);
    console.log("Máquina excluída com sucesso!");
}

export function ligarMaquina(indice) {
    const maquina = buscarMaquinaPorIndice(indice);

    if (!maquina) {
        console.log("Máquina não encontrada nesse índice.");
        return;
    }

    maquina.ligar();
    console.log("Máquina ligada com sucesso!");
}

export function desligarMaquina(indice) {
    const maquina = buscarMaquinaPorIndice(indice);

    if (!maquina) {
        console.log("Máquina não encontrada nesse índice.");
        return;
    }

    maquina.desligar();
    console.log("Máquina desligada com sucesso!");
}