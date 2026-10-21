import {
    cadastrarNovaMaquina,
    listarTodasMaquinas,
    buscarMaquina,
    ligarMaquina,
    atualizarDadosMaquina,
    excluirDadosMaquina
} from "./controller/maquinaController.js";

import {
    cadastrarNovoOperador,
    listarTodosOperadores,
    buscarOperador,
    desativarOperador,
    atualizarDadosOperador,
    excluirDadosOperador
} from "./controller/operadorController.js";

import {
    cadastrarNovaOrdem,
    listarTodasOrdensProducao,
    buscarOrdemProducao,
    iniciarOrdemProducao,
    concluirOrdemProducao,
    atualizarDadosOrdemProducao,
    excluirDadosOrdemProducao
} from "./controller/ordemProducaoController.js";

// 1. Cadastrar duas máquinas
console.log("\n========== CADASTRO DE MÁQUINAS ==========");

cadastrarNovaMaquina(101, "Torno CNC", "Usinagem");
cadastrarNovaMaquina(102, "Fresadora CNC", "Usinagem");

// 2. Cadastrar dois operadores
console.log("\n========== CADASTRO DE OPERADORES ==========");

cadastrarNovoOperador(1001, "Carlos", "Operador CNC", "Manhã");
cadastrarNovoOperador(1002, "Mariana", "Inspetora", "Tarde");

// 3. Cadastrar duas ordens de produção
console.log("\n========== CADASTRO DE ORDENS ==========");

cadastrarNovaOrdem(5001, "Eixo industrial", 100, "2026-10-25");
cadastrarNovaOrdem(5002, "Engrenagem", 200, "2026-10-28");

// 4. Listar os três recursos
console.log("\n========== LISTAGEM INICIAL ==========");

listarTodasMaquinas();
listarTodosOperadores();
listarTodasOrdensProducao();

// 5. Buscar um objeto de cada recurso pelo índice
console.log("\n========== BUSCAS ==========");

buscarMaquina(0);
buscarOperador(0);
buscarOrdemProducao(0);

// 6. Ligar uma máquina
console.log("\n========== AÇÕES ESPECÍFICAS ==========");

ligarMaquina(0);

// 7. Desativar um operador
desativarOperador(0);

// 8. Iniciar e concluir uma ordem de produção
iniciarOrdemProducao(0);
concluirOrdemProducao(1);

// Mostrar os efeitos das ações
console.log("\n========== APÓS AS AÇÕES ==========");

listarTodasMaquinas();
listarTodosOperadores();
listarTodasOrdensProducao();

// 9. Atualizar um objeto de cada recurso
console.log("\n========== ATUALIZAÇÕES ==========");

atualizarDadosMaquina(1, 102, "Fresadora CNC Atualizada", "Produção");

atualizarDadosOperador(
    1, 1002, "Mariana Silva", "Supervisora", "Noite"
);

atualizarDadosOrdemProducao(
    1, 5002, "Engrenagem Atualizada", 250, "2026-11-01"
);

// 10. Excluir um objeto de cada recurso
console.log("\n========== EXCLUSÕES ==========");

excluirDadosMaquina(1);
excluirDadosOperador(1);
excluirDadosOrdemProducao(1);

// 11. Listar novamente os três recursos
console.log("\n========== LISTAGEM FINAL ==========");

listarTodasMaquinas();
listarTodosOperadores();
listarTodasOrdensProducao();