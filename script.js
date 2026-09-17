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


    /* ==============================
       CRIAR CONTA
    ============================== */

    if (createAccountButton) {

        createAccountButton.addEventListener("click", () => {

            const accountScreen =
                document.getElementById("accountScreen");

            if (accountScreen) {

                document.body.classList.add("account-open");

                accountScreen.classList.add("active");

                window.scrollTo(0, 0);
            }

        });

    }


    /* ==============================
       ENTRAR SEM CONTA
    ============================== */

    if (guestButton) {

        guestButton.addEventListener("click", () => {

            alert("Modo visitante do StudyAIz.");

        });

    }


    /* ==============================
       LOGIN
    ============================== */

    if (loginButton) {

        loginButton.addEventListener("click", () => {

            alert("A área de login do StudyAIz será aberta em breve.");

        });

    }


    /* ==============================
       VOLTAR PARA A PÁGINA INICIAL
    ============================== */

    const backHomeButton =
        document.getElementById("backHomeButton");

    if (backHomeButton) {

        backHomeButton.addEventListener("click", () => {

            const accountScreen =
                document.getElementById("accountScreen");

            if (accountScreen) {

                accountScreen.classList.remove("active");

            }

            document.body.classList.remove("account-open");

            window.scrollTo(0, 0);

        });

    }


    /* ==============================
       ANIMAÇÃO DOS CARTÕES
    ============================== */

    const cards =
        document.querySelectorAll(".feature-card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform =
            "translateY(20px)";

        setTimeout(() => {

            card.style.transition =
                "opacity 0.6s ease, transform 0.6s ease";

            card.style.opacity = "1";

            card.style.transform =
                "translateY(0)";

        }, 200 + (index * 150));

    });

});
