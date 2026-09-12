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

});
