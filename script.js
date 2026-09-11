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


// ===============================
// VARIÁVEIS DO TESTE
// ===============================

let perguntasAtuais = [];
let perguntaAtual = 0;
let pontuacao = 0;
let respostasErradas = [];
let inicioTeste = null;


// ===============================
// INICIAR TESTE
// ===============================

function iniciarTeste() {

    const disciplina = document.getElementById("disciplina").value;

    if (!testes[disciplina]) {
        alert("Ainda não temos testes para esta disciplina.");
        return;
    }

    perguntasAtuais = testes[disciplina];
    perguntaAtual = 0;
    pontuacao = 0;
    respostasErradas = [];

    inicioTeste = new Date();

    mostrarPergunta();
}


// ===============================
// MOSTRAR PERGUNTA
// ===============================

function mostrarPergunta() {

    const pergunta = perguntasAtuais[perguntaAtual];

    const progresso =
        ((perguntaAtual) / perguntasAtuais.length) * 100;

    document.getElementById("teste").innerHTML = `

        <div style="
            background:white;
            padding:25px;
            border-radius:20px;
            box-shadow:0 8px 30px rgba(0,0,0,0.08);
        ">

            <div style="
                display:flex;
                justify-content:space-between;
                align-items:center;
                margin-bottom:15px;
            ">

                <strong>
                    📝 Pergunta ${perguntaAtual + 1}
                    de ${perguntasAtuais.length}
                </strong>

                <span>
                    ${Math.round(progresso)}%
                </span>

            </div>


            <div style="
                width:100%;
                height:8px;
                background:#e5e7eb;
                border-radius:10px;
                overflow:hidden;
                margin-bottom:25px;
            ">

                <div style="
                    width:${progresso}%;
                    height:100%;
                    background:#2563eb;
                    border-radius:10px;
                "></div>

            </div>


            <h2 style="
                color:#172554;
                line-height:1.4;
            ">
                ${pergunta.pergunta}
            </h2>


            <div style="margin-top:25px;">

                ${pergunta.opcoes.map(opcao => `

                    <button
                        onclick="responder('${opcao.replace(/'/g, "\\'")}')"
                        style="
                            width:100%;
                            padding:16px;
                            margin:7px 0;
                            border:2px solid #e5e7eb;
                            border-radius:14px;
                            background:white;
                            font-size:16px;
                            text-align:left;
                            cursor:pointer;
                        "
                    >
                        ${opcao}
                    </button>

                `).join("")}

            </div>

        </div>
    `;
}


// ===============================
// RESPONDER
// ===============================

function responder(resposta) {

    const pergunta = perguntasAtuais[perguntaAtual];

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

    if (perguntaAtual < perguntasAtuais.length) {

        mostrarPergunta();

    } else {

        mostrarResultado();

    }
}


// ===============================
// RESULTADO PROFISSIONAL
// ===============================

function mostrarResultado() {

    const total = perguntasAtuais.length;

    const porcentagem = Math.round(
        (pontuacao / total) * 100
    );

    const tempoFinal = new Date();

    const segundos = Math.floor(
        (tempoFinal - inicioTeste) / 1000
    );

    const minutos = Math.floor(segundos / 60);

    const segundosRestantes = segundos % 60;

    let tempoTexto;

    if (minutos > 0) {
        tempoTexto =
            `${minutos} min ${segundosRestantes} s`;
    } else {
        tempoTexto =
            `${segundosRestantes} s`;
    }


    // CLASSIFICAÇÃO

    let titulo;
    let mensagem;
    let emoji;

    if (porcentagem >= 90) {

        titulo = "Excelente!";
        mensagem = "Dominas muito bem este conteúdo.";
        emoji = "🏆";

    } else if (porcentagem >= 70) {

        titulo = "Muito bom!";
        mensagem = "Tens um ótimo desempenho.";
        emoji = "🌟";

    } else if (porcentagem >= 50) {

        titulo = "Bom trabalho!";
        mensagem = "Continua a estudar para melhorar ainda mais.";
        emoji = "💪";

    } else {

        titulo = "Continua a tentar!";
        mensagem = "Revê a matéria e tenta novamente.";
        emoji = "📚";
    }


    // COR

    let corNota;

    if (porcentagem >= 70) {
        corNota = "#16a34a";
    } else if (porcentagem >= 50) {
        corNota = "#f59e0b";
    } else {
        corNota = "#dc2626";
    }


    document.getElementById("teste").innerHTML = `

        <div style="
            background:white;
            padding:30px 22px;
            border-radius:24px;
            box-shadow:0 10px 40px rgba(0,0,0,0.10);
            text-align:center;
        ">

            <div style="font-size:55px;">
                ${emoji}
            </div>


            <h1 style="
                color:#172554;
                margin:10px 0;
            ">
                ${titulo}
            </h1>


            <p style="
                color:#64748b;
                font-size:16px;
            ">
                ${mensagem}
            </p>


            <!-- NOTA -->

            <div style="
                width:150px;
                height:150px;
                border-radius:50%;
                margin:25px auto;
                border:10px solid ${corNota};
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
            ">

                <strong style="
                    font-size:36px;
                    color:${corNota};
                ">
                    ${porcentagem}%
                </strong>

                <span style="color:#64748b;">
                    desempenho
                </span>

            </div>


            <!-- ESTATÍSTICAS -->

            <div style="
                display:grid;
                grid-template-columns:repeat(3,1fr);
                gap:10px;
                margin:25px 0;
            ">

                <div style="
                    background:#f0fdf4;
                    padding:15px 5px;
                    border-radius:15px;
                ">

                    <strong style="
                        color:#16a34a;
                        font-size:22px;
                    ">
                        ${pontuacao}
                    </strong>

                    <br>

                    <small>
                        ✅ Corretas
                    </small>

                </div>


                <div style="
                    background:#fef2f2;
                    padding:15px 5px;
                    border-radius:15px;
                ">

                    <strong style="
                        color:#dc2626;
                        font-size:22px;
                    ">
                        ${total - pontuacao}
                    </strong>

                    <br>

                    <small>
                        ❌ Erradas
                    </small>

                </div>


                <div style="
                    background:#eff6ff;
                    padding:15px 5px;
                    border-radius:15px;
                ">

                    <strong style="
                        color:#2563eb;
                        font-size:18px;
                    ">
                        ${tempoTexto}
                    </strong>

                    <br>

                    <small>
                        ⏱️ Tempo
                    </small>

                </div>

            </div>


            <!-- FRASE FINAL -->

            <div style="
                background:#f8fafc;
                padding:18px;
                border-radius:15px;
                margin-bottom:20px;
            ">

                <strong>
                    📊 Resultado final
                </strong>

                <p style="
                    margin-bottom:0;
                    color:#64748b;
                ">
                    Acertaste ${pontuacao}
                    de ${total} perguntas.
                </p>

            </div>


            <!-- BOTÕES -->

            <button
                onclick="iniciarTeste()"
                style="
                    width:100%;
                    padding:16px;
                    border:none;
                    border-radius:14px;
                    background:#2563eb;
                    color:white;
                    font-size:16px;
                    font-weight:bold;
                    cursor:pointer;
                    margin-bottom:10px;
                "
            >
                🔄 Fazer novamente
            </button>


            <button
                onclick="mostrarRespostas()"
                style="
                    width:100%;
                    padding:16px;
                    border:2px solid #2563eb;
                    border-radius:14px;
                    background:white;
                    color:#2563eb;
                    font-size:16px;
                    font-weight:bold;
                    cursor:pointer;
                "
            >
                📖 Rever respostas
            </button>

        </div>
    `;
}


// ===============================
// REVER RESPOSTAS
// ===============================

function mostrarRespostas() {

    let html = `

        <div style="
            background:white;
            padding:25px;
            border-radius:22px;
            box-shadow:0 8px 30px rgba(0,0,0,0.08);
        ">

            <h2 style="color:#172554;">
                📖 Revisão do teste
            </h2>
    `;


    if (respostasErradas.length === 0) {

        html += `

            <div style="
                background:#f0fdf4;
                padding:20px;
                border-radius:15px;
                text-align:center;
            ">

                <h3>🎉 Todas corretas!</h3>

                <p>
                    Não tens respostas para rever.
                </p>

            </div>

        `;

    } else {

        respostasErradas.forEach((item, index) => {

            html += `

                <div style="
                    padding:18px 0;
                    border-bottom:1px solid #e5e7eb;
                ">

                    <strong>
                        ${index + 1}. ${item.pergunta}
                    </strong>

                    <p style="color:#dc2626;">
                        ❌ A tua resposta:
                        ${item.resposta}
                    </p>

                    <p style="color:#16a34a;">
                        ✅ Resposta correta:
                        ${item.correta}
                    </p>

                </div>

            `;
        });
    }


    html += `

            <button
                onclick="mostrarResultado()"
                style="
                    width:100%;
                    padding:15px;
                    margin-top:20px;
                    border:none;
                    border-radius:14px;
                    background:#2563eb;
                    color:white;
                    font-size:16px;
                    font-weight:bold;
                "
            >
                ← Voltar ao resultado
            </button>

        </div>
    `;


    document.getElementById("teste").innerHTML = html;
}


// ===============================
// PREPARAR TESTE
// ===============================

function prepararTeste() {

    const disciplina =
        document.getElementById("disciplina").value;

    if (!testes[disciplina]) {

        alert(
            "Ainda não temos testes para esta disciplina."
        );

        return;
    }

    iniciarTeste();
}
