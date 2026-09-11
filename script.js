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

    const disciplina =
        campo ? campo.value.trim() : "";


    if (!disciplina) {

        alert("Escreve a matéria que queres testar.");

        return;
    }


    if (!testes[disciplina]) {

        alert(
            "Ainda não temos perguntas preparadas para esta matéria. " +
            "Vamos adicionar mais matérias em breve!"
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


    if (!area) return;


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

    `;


    pergunta.opcoes.forEach(opcao => {

        html += `

            <button
                class="opcao"
                onclick="responder('${opcao.replace(/'/g, "\\'")}')"
            >
                ${opcao}
            </button>

        `;

    });


    html += `

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


    const tempo =
        Math.round((Date.now() - inicioTeste) / 1000);


    const minutos =
        Math.floor(tempo / 60);


    const segundos =
        tempo % 60;


    const total =
        perguntasAtuais.length;


    const percentagem =
        Math.round((pontuacao / total) * 100);


    let classificacao = "";

    let mensagem = "";


    if (percentagem >= 90) {

        classificacao = "🏆 Excelente!";

        mensagem =
            "Dominas muito bem este conteúdo.";

    } else if (percentagem >= 70) {

        classificacao = "🌟 Muito bom!";

        mensagem =
            "Tens um ótimo desempenho.";

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

            <p>
                ${mensagem}
            </p>


            <div class="estatisticas">

                <div class="estatistica">

                    <strong>${pontuacao}</strong>

                    <span>✅ Certas</span>

                </div>


                <div class="estatistica">

                    <strong>${total
