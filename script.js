/* ========================================
   STUDYAIZ — SCRIPT PRINCIPAL
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==============================
       BOTÕES DA PÁGINA INICIAL
    ============================== */

    const createAccountButton =
        document.getElementById("createAccountButton");

    const guestButton =
        document.getElementById("guestButton");

    const loginButton =
        document.getElementById("loginButton");


    /* Criar conta */
    if (createAccountButton) {
        createAccountButton.addEventListener("click", () => {
            alert("A área de criação de conta do StudyAIz será aberta em breve.");
        });
    }


    /* Entrar sem conta */
    if (guestButton) {
        guestButton.addEventListener("click", () => {
            alert("Modo visitante do StudyAIz.");
        });
    }


    /* Login */
    if (loginButton) {
        loginButton.addEventListener("click", () => {
            alert("A área de login do StudyAIz será aberta em breve.");
        });
    }


    /* ==============================
       ANIMAÇÃO DOS CARTÕES
    ============================== */

    const cards =
        document.querySelectorAll(".feature-card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {

            card.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, 200 + (index * 150));

    });

});
