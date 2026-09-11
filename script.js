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
        }
    ],

    "Português": [
        {
            pergunta: "Qual destas palavras é um verbo?",
            opcoes: ["correr", "casa", "bonito", "mesa"],
            correta: "correr"
        },
        {
            pergunta: "Qual é o plural de 'animal'?",
            opcoes: ["animals", "animais", "animalis", "animales"],
            correta: "animais"
        }
    ],

    "História": [
        {
            pergunta: "Qual civilização construiu as pirâmides de Gizé?",
            opcoes: ["Romana", "Egípcia", "Grega", "Persa"],
            correta: "Egípcia"
        }
    ],

    "Geografia": [
        {
            pergunta: "Qual é o maior continente?",
            opcoes: ["África", "Europa", "Ásia", "Oceania"],
            correta: "Ásia"
        }
    ]
};

let perguntasAtuais = [];
let perguntaAtual = 0;
let pontuacao = 0;

function iniciarTeste() {
    const disciplina = document.getElementById("disciplina").value;

    if (!testes[disciplina]) {
        alert("Ainda não temos testes para esta disciplina.");
        return;
    }

    perguntasAtuais = testes[disciplina];
    perguntaAtual = 0;
    pontuacao = 0;

    mostrarPergunta();
}

function mostrarPergunta() {
    const pergunta = perguntasAtuais[perguntaAtual];

    document.getElementById("teste").innerHTML = `
        <h2>📝 Pergunta ${perguntaAtual + 1}</h2>

        <p>${pergunta.pergunta}</p>

        ${pergunta.opcoes.map(opcao => `
            <button onclick="responder('${opcao}')">
                ${opcao}
            </button>
        `).join("<br><br>")}
    `;
}

function responder(resposta) {
    const pergunta = perguntasAtuais[perguntaAtual];

    if (resposta === pergunta.correta) {
        pontuacao++;
        alert("✅ Resposta correta!");
    } else {
        alert("❌ Resposta errada!");
    }

    perguntaAtual++;

    if (perguntaAtual < perguntasAtuais.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }function prepararTeste() {
    const disciplina = document.getElementById("disciplina").value;

    if (!testes[disciplina]) {
        alert("Ainda não temos testes para esta disciplina.");
        return;
    }

    iniciarTeste();
    }
}

function mostrarResultado() {
    document.getElementById("teste").innerHTML = `
        <h2>🏆 Resultado</h2>

        <p>
            Acertaste
            <strong>${pontuacao}</strong>
            de
            <strong>${perguntasAtuais.length}</strong>
            perguntas.
        </p>

        <button onclick="iniciarTeste()">
            🔄 Fazer novamente
        </button>
    `;
}
function prepararTeste() {
    const disciplina = document.getElementById("disciplina").value;

    if (!testes[disciplina]) {
        alert("Ainda não temos testes para esta disciplina.");
        return;
    }

    iniciarTeste();
}
