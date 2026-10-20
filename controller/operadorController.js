import { Operador } from "../model/Operador.js";

import {
    cadastrarOperador,
    listarOperadores,
    buscarOperadorPorIndice,
    atualizarOperador,
    excluirOperador
} from "../repository/operadorRepository.js";

export function cadastrarNovoOperador(matricula, nome, funcao, turno) {
    const operador = new Operador(matricula, nome, funcao, turno);
    cadastrarOperador(operador);
    console.log("Operador cadastrado com sucesso!");
}

export function listarTodosOperadores() {
    const listaOperadores = listarOperadores();

    console.log("\n=== OPERADORES ===");

    for (let indice = 0; indice < listaOperadores.length; indice++) {
        const operador = listaOperadores[indice];

        console.log(
            `Índice: ${indice} | Matrícula: ${operador.matricula} | ` +
            `Nome: ${operador.nome} | Função: ${operador.funcao} | ` +
            `Turno: ${operador.turno} | Status: ${operador.status}`
        );
    }
}

export function buscarOperador(indice) {
    const operador = buscarOperadorPorIndice(indice);

    if (!operador) {
        console.log("Operador não encontrado nesse índice.");
        return;
    }

    console.log("Operador encontrado:", operador);
    return operador;
}

export function atualizarDadosOperador(indice, matricula, nome, funcao, turno) {
    if (!buscarOperadorPorIndice(indice)) {
        console.log("Não foi possível atualizar: operador inexistente.");
        return;
    }

    const operador = new Operador(matricula, nome, funcao, turno);
    atualizarOperador(indice, operador);

    console.log("Operador atualizado com sucesso!");
}

export function excluirDadosOperador(indice) {
    if (!buscarOperadorPorIndice(indice)) {
        console.log("Não foi possível excluir: operador inexistente.");
        return;
    }

    excluirOperador(indice);
    console.log("Operador excluído com sucesso!");
}

export function ativarOperador(indice) {
    const operador = buscarOperadorPorIndice(indice);

    if (!operador) {
        console.log("Operador não encontrado nesse índice.");
        return;
    }

    operador.ativar();
    console.log("Operador ativado com sucesso!");
}

export function desativarOperador(indice) {
    const operador = buscarOperadorPorIndice(indice);

    if (!operador) {
        console.log("Operador não encontrado nesse índice.");
        return;
    }

    operador.desativar();
    console.log("Operador desativado com sucesso!");
}