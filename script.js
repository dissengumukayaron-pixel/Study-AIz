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
       FORMULÁRIO DA CONTA
    ============================== */

    const accountForm =
        document.getElementById("accountForm");

    if (accountForm) {

        accountForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const accountName =
                document.getElementById("accountName");

            const accountCountry =
                document.getElementById("accountCountry");

            const profileScreen =
                document.getElementById("profileScreen");

            const studentName =
                document.getElementById("studentName");


            if (
                accountName &&
                accountCountry &&
                profileScreen
            ) {

                /* Passa o nome para o perfil */

                if (studentName) {
                    studentName.value =
                        accountName.value;
                }


                /* Esconde a tela da conta */

                document.body.classList.remove(
                    "account-open"
                );

                accountScreen.classList.remove(
                    "active"
                );


                /* Abre o perfil */

                document.body.classList.add(
                    "profile-open"
                );

                profileScreen.classList.add(
                    "active"
                );

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

            alert(
                "A área de login do StudyAIz será aberta em breve."
            );

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

                accountScreen.classList.remove(
                    "active"
                );

            }

            document.body.classList.remove(
                "account-open"
            );

            window.scrollTo(0, 0);

        });

    }


    /* ==============================
       AVATARES
    ============================== */

    const avatarOptions =
        document.querySelectorAll(".avatar-option");

    avatarOptions.forEach((avatar) => {

        avatar.addEventListener("click", () => {

            avatarOptions.forEach((item) => {

                item.classList.remove("selected");

            });

            avatar.classList.add("selected");

        });

    });


    /* ==============================
       VOLTAR PARA A CONTA
    ============================== */

    const backAccountButton =
        document.getElementById("backAccountButton");

    if (backAccountButton) {

        backAccountButton.addEventListener("click", () => {

            const profileScreen =
                document.getElementById("profileScreen");

            if (profileScreen) {

                profileScreen.classList.remove(
                    "active"
                );

            }

            document.body.classList.remove(
                "profile-open"
            );

            document.body.classList.add(
                "account-open"
            );

            const accountScreen =
                document.getElementById("accountScreen");

            if (accountScreen) {

                accountScreen.classList.add(
                    "active"
                );

            }

            window.scrollTo(0, 0);

        });

    }


    /* ==============================
       TERMINAR PERFIL
    ============================== */

    const finishProfileButton =
        document.getElementById(
            "finishProfileButton"
        );

    if (finishProfileButton) {

        finishProfileButton.addEventListener(
            "click",
            () => {

                const studentName =
                    document.getElementById(
                        "studentName"
                    );

                const studentLevel =
                    document.getElementById(
                        "studentLevel"
                    );

                const studentCourse =
                    document.getElementById(
                        "studentCourse"
                    );

                const studyTime =
                    document.getElementById(
                        "studyTime"
                    );


                /* Verificação básica */

                if (
                    !studentName.value.trim() ||
                    !studentLevel.value
                ) {

                    alert(
                        "Preenche o teu nome e seleciona o teu nível de ensino."
                    );

                    return;

                }


                /* Guarda temporariamente o perfil */

                const profile = {

                    name:
                        studentName.value.trim(),

                    level:
                        studentLevel.value,

                    course:
                        studentCourse.value.trim(),

                    studyTime:
                        studyTime.value

                };


                localStorage.setItem(
                    "studyaizProfile",
                    JSON.stringify(profile)
                );


                alert(
                    "Perfil criado com sucesso! 🚀"
                );

            }
        );

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
