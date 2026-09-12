const testes = {
    "Matemática": [
        {
            pergunta: "Quanto é 5 + 7?",
            opcoes: ["10", "12", "13", "15"],
            correta: "12"
        },
        {
            pergunta: "Quanto é 8 × 3?",
            opcoes: ["21", "24", "26", "28"],
            correta: "24"
        },
        {
            pergunta: "Quanto é 20 ÷ 4?",
            opcoes: ["4", "5", "6", "8"],
            correta: "5"
        }
    ],

    "Português": [
        {
            pergunta: "Qual é o plural de 'animal'?",
            opcoes: ["animais", "animals", "animalis", "animales"],
            correta: "animais"
        },
        {
            pergunta: "Qual destas palavras é um verbo?",
            opcoes: ["correr", "casa", "bonito", "azul"],
            correta: "correr"
        }
    ],

    "História": [
        {
            pergunta: "Qual é o planeta conhecido como Planeta Vermelho?",
            opcoes: ["Terra", "Marte", "Júpiter", "Vénus"],
            correta: "Marte"
        },
        {
            pergunta: "Em que continente fica Angola?",
            opcoes: ["Europa", "Ásia", "África", "América"],
            correta: "África"
        }
    ],

    "Geografia": [
        {
            pergunta: "Qual é o maior oceano da Terra?",
            opcoes: [
                "Atlântico",
                "Índico",
                "Pacífico",
                "Ártico"
            ],
            correta: "Pacífico"
        }
    ]
};


/* =========================
   VARIÁVEIS DO TESTE
========================= */

let perguntasAtuais = [];
let perguntaAtual = 0;
let pontuacao = 0;
let respostasErradas = [];
let inicioTeste = null;


/* =========================
   INICIAR TESTE
========================= */

function iniciarTeste() {

    const campo =
        document.getElementById("disciplinaTeste") ||
        document.getElementById("disciplina");

    const disciplina = campo
        ? campo.value.trim()
        : "";

    if (!disciplina) {
        alert("Escolhe uma matéria para começar.");
        return;
    }

    if (!testes[disciplina]) {
        alert(
            "Ainda não temos perguntas preparadas para esta matéria."
        );
        return;
    }

    perguntasAtuais = [...testes[disciplina]];

    perguntaAtual = 0;
    pontuacao = 0;
    respostasErradas = [];
    inicioTeste = Date.now();

    mostrarPergunta();
}


/* =========================
   MOSTRAR PERGUNTA
========================= */

function mostrarPergunta() {

    const area =
        document.getElementById("teste");

    if (!area) {
        console.error("Elemento #teste não encontrado.");
        return;
    }

    if (perguntaAtual >= perguntasAtuais.length) {
        mostrarResultado();
        return;
    }

    const pergunta =
        perguntasAtuais[perguntaAtual];

    let html = `
        <div class="pergunta">

            <p>
                <strong>
                    Pergunta ${perguntaAtual + 1}
                    de ${perguntasAtuais.length}
                </strong>
            </p>

            <h3>
                ${pergunta.pergunta}
            </h3>

            <div class="opcoes">
    `;

    pergunta.opcoes.forEach((opcao) => {

        const opcaoSegura =
            opcao.replace(/'/g, "\\'");

        html += `
            <button
                class="opcao"
                onclick="responder('${opcaoSegura}')"
            >
                ${opcao}
            </button>
        `;
    });

    html += `
            </div>

        </div>
    `;

    area.innerHTML = html;
}


/* =========================
   RESPONDER
========================= */

function responder(resposta) {

    const pergunta =
        perguntasAtuais[perguntaAtual];

    if (!pergunta) return;

    if (resposta === pergunta.correta) {

        pontuacao++;

    } else {

        respostasErradas.push({
            pergunta: pergunta.pergunta,
            resposta: resposta,
            correta: pergunta.correta
        });
    }

    perguntaAtual++;

    mostrarPergunta();
}


/* =========================
   RESULTADO
========================= */

function mostrarResultado() {

    const area =
        document.getElementById("teste");

    if (!area) return;

    const tempo =
        inicioTeste
            ? Math.round((Date.now() - inicioTeste) / 1000)
            : 0;

    const minutos =
        Math.floor(tempo / 60);

    const segundos =
        tempo % 60;

    const total =
        perguntasAtuais.length;

    const percentagem =
        total > 0
            ? Math.round((pontuacao / total) * 100)
            : 0;

    let classificacao = "";
    let mensagem = "";

    if (percentagem >= 90) {

        classificacao = "🏆 Excelente!";
        mensagem = "Dominas muito bem este conteúdo.";

    } else if (percentagem >= 70) {

        classificacao = "🌟 Muito bom!";
        mensagem = "Tens um ótimo desempenho.";

    } else if (percentagem >= 50) {

        classificacao = "💪 Bom trabalho!";
        mensagem =
            "Continua a estudar para melhorar ainda mais.";

    } else {

        classificacao = "📚 Continua a tentar!";
        mensagem =
            "Revê a matéria e tenta novamente.";
    }

    area.innerHTML = `
        <div class="resultado">

            <h2>${classificacao}</h2>

            <div class="nota">
                ${percentagem}%
            </div>

            <p>${mensagem}</p>

            <div class="estatisticas">

                <div class="estatistica">
                    <strong>${pontuacao}</strong>
                    <span>✅ Certas</span>
                </div>

                <div class="estatistica">
                    <strong>${total - pontuacao}</strong>
                    <span>❌ Erradas</span>
                </div>

                <div class="estatistica">
                    <strong>${minutos}m ${segundos}s</strong>
                    <span>⏱️ Tempo</span>
                </div>

            </div>

            <button
                class="btn"
                onclick="reiniciarTeste()"
            >
                🔄 Fazer novamente
            </button>

        </div>
    `;
}


/* =========================
   REINICIAR TESTE
========================= */

function reiniciarTeste() {

    perguntaAtual = 0;
    pontuacao = 0;
    respostasErradas = [];

    iniciarTeste();
}


/* =========================
   BOTÃO CONTINUAR
========================= */

function continuar() {

    const inicio =
        document.getElementById("inicio");

    const configuracao =
        document.getElementById("configuracao");

    const tutor =
        document.getElementById("tutor");

    if (inicio) {
        inicio.style.display = "none";
    }

    if (configuracao) {
        configuracao.style.display = "block";
    }

    if (tutor) {
        tutor.style.display = "none";
    }
}


/* =========================
   MENU
========================= */

function abrirMenu() {

    const menu =
        document.getElementById("menu");

    if (!menu) {
        console.warn("Elemento #menu não encontrado.");
        return;
    }

    if (
        menu.style.display === "none" ||
        menu.style.display === ""
    ) {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}


/* =========================
   FECHAR MENU
========================= */

function fecharMenu() {

    const menu =
        document.getElementById("menu");

    if (menu) {
        menu.style.display = "none";
    }
}


/* =========================
   VOLTAR AO INÍCIO
========================= */

function voltarInicio() {

    const inicio =
        document.getElementById("inicio");

    const configuracao =
        document.getElementById("configuracao");

    const teste =
        document.getElementById("teste");

    const tutor =
        document.getElementById("tutor");

    if (inicio) inicio.style.display = "block";
    if (configuracao) configuracao.style.display = "none";
    if (teste) teste.innerHTML = "";
    if (tutor) tutor.style.display = "none";

    fecharMenu();
}


/* =========================
   QUANDO A PÁGINA CARREGAR
========================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("StudyAIz carregado com sucesso! 🤖");

    const botaoContinuar =
        document.getElementById("continuar");

    if (botaoContinuar) {
        botaoContinuar.addEventListener(
            "click",
            continuar
        );
    }

    const botaoMenu =
        document.getElementById("menuBtn");

    if (botaoMenu) {
        botaoMenu.addEventListener(
            "click",
            abrirMenu
        );
    }

});
/* =========================
   BOTÃO CONTINUAR
========================= */

function continuar() {

    const inicio =
        document.getElementById("inicio");

    const configuracao =
        document.getElementById("configuracao");

    const tutor =
        document.getElementById("tutor");

    if (inicio) {
        inicio.style.display = "none";
    }

    if (configuracao) {
        configuracao.style.display = "block";
    }

    if (tutor) {
        tutor.style.display = "none";
    }
}


/* =========================
   MENU
========================= */

function abrirMenu() {

    const menu =
        document.getElementById("menu");

    if (!menu) {
        console.warn("Elemento #menu não encontrado.");
        return;
    }

    if (
        menu.style.display === "none" ||
        menu.style.display === ""
    ) {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}


/* =========================
   FECHAR MENU
========================= */

function fecharMenu() {

    const menu =
        document.getElementById("menu");

    if (menu) {
        menu.style.display = "none";
    }
}


/* =========================
   VOLTAR AO INÍCIO
========================= */

function voltarInicio() {

    const inicio =
        document.getElementById("inicio");

    const configuracao =
        document.getElementById("configuracao");

    const teste =
        document.getElementById("teste");

    const tutor =
        document.getElementById("tutor");

    if (inicio) inicio.style.display = "block";
    if (configuracao) configuracao.style.display = "none";
    if (teste) teste.innerHTML = "";
    if (tutor) tutor.style.display = "none";

    fecharMenu();
}


/* =========================
   QUANDO A PÁGINA CARREGAR
========================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("StudyAIz carregado com sucesso! 🤖");

    const botaoContinuar =
        document.getElementById("continuar");

    if (botaoContinuar) {
        botaoContinuar.addEventListener(
            "click",
            continuar
        );
    }

    const botaoMenu =
        document.getElementById("menuBtn");

    if (botaoMenu) {
        botaoMenu.addEventListener(
            "click",
            abrirMenu
        );
} else {

        console.error(
            "ERRO: botão #menuBtn não encontrado."
        );

    }


    /* BOTÃO FECHAR MENU */

    const botaoFechar =
        document.getElementById("closeMenu");

    if (botaoFechar) {

        botaoFechar.addEventListener(
            "click",
            fecharMenu
        );

    }


    /* BOTÃO VOLTAR */

    const botaoVoltar =
        document.getElementById("voltarInicio");

    if (botaoVoltar) {

        botaoVoltar.addEventListener(
            "click",
            voltarInicio
        );

    }

});
