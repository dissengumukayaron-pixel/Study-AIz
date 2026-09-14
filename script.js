// ========================================
// StudyAIz — Navegação principal
// ========================================

document.addEventListener("DOMContentLoaded", () => {

    // Botão Menu
    const menuButton = document.getElementById("menuButton");

    if (menuButton) {
        menuButton.addEventListener("click", () => {

            const menu = document.getElementById("mainMenu");

            if (menu) {
                menu.classList.toggle("active");
            }
        });
    }


    // Botões que levam para uma secção
    document.querySelectorAll("[data-section]").forEach(button => {

        button.addEventListener("click", () => {

            const sectionId = button.dataset.section;
            const section = document.getElementById(sectionId);

            if (section) {

                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // Botão Começar Estudos
    const startButton =
        document.getElementById("startStudies");

    if (startButton) {

        startButton.addEventListener("click", () => {

            const setup =
                document.getElementById("setup");

            if (setup) {

                setup.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }


    // Botão Continuar
    const continueButton =
        document.getElementById("continueButton");

    if (continueButton) {

        continueButton.addEventListener("click", () => {

            const country =
                document.getElementById("country")?.value;

            const education =
                document.getElementById("education")?.value;

            const discipline =
                document.getElementById("discipline")?.value.trim();

            const topic =
                document.getElementById("topic")?.value.trim();


            if (!country) {
                alert("Escolha o seu país.");
                return;
            }

            if (!education) {
                alert("Escolha o seu sistema de ensino.");
                return;
            }

            if (!discipline) {
                alert("Escreva a disciplina que deseja estudar.");
                return;
            }

            if (!topic) {
                alert("Escreva o tema que deseja aprender.");
                return;
            }


            const configuracao = {
                country,
                education,
                discipline,
                topic
            };


            localStorage.setItem(
                "studyAIzSetup",
                JSON.stringify(configuracao)
            );


            alert(
                "Configuração guardada! Vamos começar os estudos."
            );


            const studyArea =
                document.getElementById("studyArea");

            if (studyArea) {

                studyArea.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    }
    // ========================================
    // Tutor IA — Perguntas do aluno
    // ========================================

    const sendButton = document.getElementById("sendBtn");
    const questionInput = document.getElementById("questionInput");
    const tutorResponse = document.getElementById("tutorResponse");

    if (sendButton && questionInput) {

        sendButton.addEventListener("click", async () => {

            const question = questionInput.value.trim();

            if (!question) {
                alert("Escreva uma pergunta para o Tutor IA.");
                return;
            }

            if (tutorResponse) {
                tutorResponse.innerHTML = "🤖 O Tutor IA está a pensar...";
            }

            sendButton.disabled = true;

            try {

                const configuracao =
                    JSON.parse(
                        localStorage.getItem("studyAIzSetup") || "{}"
                    );

                const resposta = await fetch("/api/chat", {

                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        message: question,
                        profile: configuracao
                    })

                });

                const dados = await resposta.json();

                if (!resposta.ok) {
                    throw new Error(
                        dados.error || "Erro ao comunicar com a IA."
                    );
                }

                if (tutorResponse) {
                    tutorResponse.innerHTML =
                        dados.reply ||
                        dados.response ||
                        "Não foi possível obter uma resposta.";
                }

            } catch (erro) {

                console.error("Erro Tutor IA:", erro);

                if (tutorResponse) {
                    tutorResponse.innerHTML =
                        "❌ Não foi possível contactar o Tutor IA. Verifica se o servidor está ligado.";
                }

            } finally {

                sendButton.disabled = false;

            }

        });

    }
});
