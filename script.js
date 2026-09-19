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

        const accountEmail =
            document.getElementById("accountEmail");

        const accountPassword =
            document.getElementById("accountPassword");

        const accountCountry =
            document.getElementById("accountCountry");

        const accountScreen =
            document.getElementById("accountScreen");

        const profileScreen =
            document.getElementById("profileScreen");

        const studentName =
            document.getElementById("studentName");


        if (
            !accountName ||
            !accountEmail ||
            !accountPassword ||
            !accountCountry ||
            !profileScreen
        ) {
            return;
        }


        /* VERIFICAR CAMPOS */

        if (
            !accountName.value.trim() ||
            !accountEmail.value.trim() ||
            !accountPassword.value ||
            !accountCountry.value
        ) {

            alert(
                "Preenche todos os campos para criar a tua conta."
            );

            return;

        }


        /* GUARDAR CONTA */

        const account = {

            name:
                accountName.value.trim(),

            email:
                accountEmail.value.trim(),

            password:
                accountPassword.value,

            country:
                accountCountry.value

        };


        localStorage.setItem(
            "studyaizAccount",
            JSON.stringify(account)
        );


        /* PASSAR PARA O PERFIL */

        if (studentName) {

            studentName.value =
                accountName.value.trim();

        }


        if (accountScreen) {

            accountScreen.classList.remove(
                "active"
            );

        }


        document.body.classList.remove(
            "account-open"
        );


        document.body.classList.add(
            "profile-open"
        );


        profileScreen.classList.add(
            "active"
        );


        window.scrollTo(0, 0);

    });

           } 


    /* ==============================
       ENTRAR SEM CONTA
    ============================== */

    if (guestButton) {

    guestButton.addEventListener("click", () => {

        const guestScreen =
            document.getElementById("guestScreen");

        if (guestScreen) {

            document.body.classList.add("guest-open");

            guestScreen.classList.add("active");

            window.scrollTo(0, 0);

        }

    });

    }
   /* ==============================
   COMEÇAR COMO VISITANTE
============================== */

const startGuestButton =
    document.getElementById(
        "startGuestButton"
    );

if (startGuestButton) {

    startGuestButton.addEventListener(
        "click",
        () => {

            const guestName =
                document.getElementById(
                    "guestName"
                );

            const guestCountry =
                document.getElementById(
                    "guestCountry"
                );

            const guestLevel =
                document.getElementById(
                    "guestLevel"
                );

            const guestCourse =
                document.getElementById(
                    "guestCourse"
                );

            const guestStudyTime =
                document.getElementById(
                    "guestStudyTime"
                );

            const guestScreen =
                document.getElementById(
                    "guestScreen"
                );

            const mainDashboard =
                document.getElementById(
                    "mainDashboard"
                );


            /* Verificar informações obrigatórias */

            if (
                !guestName.value.trim() ||
                !guestCountry.value ||
                !guestLevel.value
            ) {

                alert(
                    "Preenche o teu nome, país e nível de ensino."
                );

                return;

            }


            /* Avatar escolhido */

            const selectedAvatar =
                document.querySelector(
                    ".guest-avatar.selected"
                );


            /* Guardar perfil temporário */

            const guestProfile = {

                name:
                    guestName.value.trim(),

                country:
                    guestCountry.value,

                level:
                    guestLevel.value,

                course:
                    guestCourse.value.trim(),

                studyTime:
                    guestStudyTime.value,

                avatar:
                    selectedAvatar
                        ? selectedAvatar.dataset.avatar
                        : "🧑🏽‍🎓"

            };


            sessionStorage.setItem(
                "studyaizGuestProfile",
                JSON.stringify(guestProfile)
            );


            /* Fechar tela de visitante */

            if (guestScreen) {

                guestScreen.classList.remove(
                    "active"
                );

            }

            document.body.classList.remove(
                "guest-open"
            );


            /* Abrir Dashboard */

            document.body.classList.add(
                "dashboard-open"
            );

            if (mainDashboard) {

                mainDashboard.classList.add(
                    "active"
                );

            }


            /* Atualizar saudação */

            const dashboardGreeting =
                document.querySelector(
                    ".dashboard-greeting"
                );

            if (dashboardGreeting) {

                dashboardGreeting.textContent =
                    "👋 Olá, " +
                    guestName.value.trim() +
                    "!";

            }


            window.scrollTo(0, 0);

        }
    );

}
/* ==============================
   VOLTAR DO MODO VISITANTE
============================== */

const backGuestButton =
    document.getElementById("backGuestButton");

if (backGuestButton) {

    backGuestButton.addEventListener("click", () => {

        const guestScreen =
            document.getElementById("guestScreen");

        if (guestScreen) {

            guestScreen.classList.remove("active");

        }

        document.body.classList.remove("guest-open");

        window.scrollTo(0, 0);

    });

}

/* ==============================
   LOGIN
============================== */

const loginScreen =
    document.getElementById("loginScreen");

const backLoginButton =
    document.getElementById("backLoginButton");

const loginSubmitButton =
    document.getElementById("loginSubmitButton");


/* ABRIR LOGIN */

if (loginButton && loginScreen) {

    loginButton.addEventListener("click", () => {

        document.body.classList.remove("account-open");
        document.body.classList.remove("guest-open");
        document.body.classList.remove("profile-open");

        document.body.classList.add("login-open");

        loginScreen.classList.add("active");

        window.scrollTo(0, 0);

    });

}


/* ==============================
   ENTRAR NA CONTA
============================== */

if (loginSubmitButton) {

    loginSubmitButton.addEventListener("click", () => {

        const loginEmail =
            document.getElementById("loginEmail");

        const loginPassword =
            document.getElementById("loginPassword");

        const mainDashboard =
            document.getElementById("mainDashboard");


        /* VERIFICAR CAMPOS */

        if (
            !loginEmail.value.trim() ||
            !loginPassword.value
        ) {

            alert(
                "Preenche o teu e-mail e a tua palavra-passe."
            );

            return;

        }


        /* PROCURAR CONTA */

        const savedAccount =
            localStorage.getItem("studyaizAccount");


        /* CONTA NÃO EXISTENTE */

        if (!savedAccount) {

            alert(
                "Conta não existente."
            );

            return;

        }


        const account =
            JSON.parse(savedAccount);


        /* VERIFICAR E-MAIL */

        if (
            loginEmail.value.trim().toLowerCase()
            !== account.email.toLowerCase()
        ) {

            alert(
                "Conta não existente."
            );

            return;

        }


        /* VERIFICAR PALAVRA-PASSE */

        if (
            loginPassword.value
            !== account.password
        ) {

            alert(
                "Palavra-passe incorreta."
            );

            return;

        }


        /* LOGIN CORRETO */

        localStorage.setItem(
            "studyaizLoggedIn",
            "true"
        );


        /* FECHAR LOGIN */

        if (loginScreen) {

            loginScreen.classList.remove(
                "active"
            );

        }

        document.body.classList.remove(
            "login-open"
        );


        /* ABRIR DASHBOARD */

        document.body.classList.add(
            "dashboard-open"
        );

        if (mainDashboard) {

            mainDashboard.classList.add(
                "active"
            );

        }


        /* RECUPERAR PERFIL */

        const savedProfile =
            localStorage.getItem(
                "studyaizProfile"
            );

        if (savedProfile) {

            const profile =
                JSON.parse(savedProfile);

            const dashboardGreeting =
                document.querySelector(
                    ".dashboard-greeting"
                );

            if (dashboardGreeting) {

                dashboardGreeting.textContent =
                    "👋 Olá, " +
                    profile.name +
                    "!";

            }

        }


        window.scrollTo(0, 0);

    });

}


/* VOLTAR DO LOGIN */

if (backLoginButton && loginScreen) {

    backLoginButton.addEventListener("click", () => {

        loginScreen.classList.remove("active");

        document.body.classList.remove("login-open");

        window.scrollTo(0, 0);

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

// AVATARES DO PERFIL

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


// AVATARES DO MODO VISITANTE

const guestAvatarOptions =
    document.querySelectorAll(".guest-avatar");

guestAvatarOptions.forEach((avatar) => {

    avatar.addEventListener("click", () => {

        guestAvatarOptions.forEach((item) => {
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

            profileScreen.classList.remove("active");

        }

        document.body.classList.remove("profile-open");

        document.body.classList.add("account-open");

        const accountScreen =
            document.getElementById("accountScreen");

        if (accountScreen) {

            accountScreen.classList.add("active");

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

            const profileScreen =
                document.getElementById(
                    "profileScreen"
                );

            const mainDashboard =
                document.getElementById(
                    "mainDashboard"
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


            /* Avatar escolhido */

            const selectedAvatar =
                document.querySelector(
                    ".avatar-option.selected"
                );


            /* Guarda o perfil */

            const profile = {

                name:
                    studentName.value.trim(),

                level:
                    studentLevel.value,

                course:
                    studentCourse.value.trim(),

                studyTime:
                    studyTime.value,

                avatar:
                    selectedAvatar
                        ? selectedAvatar.dataset.avatar
                        : "🧑🏽‍🎓"

            };


            localStorage.setItem(
                "studyaizProfile",
                JSON.stringify(profile)
            );


            /* Marca o estudante como conectado */

            localStorage.setItem(
                "studyaizLoggedIn",
                "true"
            );


            /* Fechar perfil */

            if (profileScreen) {

                profileScreen.classList.remove(
                    "active"
                );

            }


            document.body.classList.remove(
                "profile-open"
            );


            /* Abrir Dashboard */

document.body.classList.add(
    "dashboard-open"
);

if (mainDashboard) {

    mainDashboard.classList.add(
        "active"
    );

               }


            /* Atualizar saudação */

            const dashboardGreeting =
                document.querySelector(
                    ".dashboard-greeting"
                );

            if (dashboardGreeting) {

                dashboardGreeting.textContent =
                    "👋 Olá, " +
                    studentName.value.trim() +
                    "!";

            }


            window.scrollTo(0, 0);

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
/* ==============================
   MENU DO DASHBOARD
============================== */

const dashboardMenuButton =
    document.getElementById(
        "dashboardMenuButton"
    );

const dashboardSideMenu =
    document.getElementById(
        "dashboardSideMenu"
    );

const closeDashboardMenu =
    document.getElementById(
        "closeDashboardMenu"
    );

const dashboardMenuOverlay =
    document.getElementById(
        "dashboardMenuOverlay"
    );


/* ABRIR MENU */

if (
    dashboardMenuButton &&
    dashboardSideMenu &&
    dashboardMenuOverlay
) {

    dashboardMenuButton.addEventListener(
        "click",
        () => {

            dashboardSideMenu.classList.add(
                "active"
            );

            dashboardMenuOverlay.classList.add(
                "active"
            );

        }
    );

}


/* FECHAR NO X */

if (
    closeDashboardMenu &&
    dashboardSideMenu &&
    dashboardMenuOverlay
) {

    closeDashboardMenu.addEventListener(
        "click",
        () => {

            dashboardSideMenu.classList.remove(
                "active"
            );

            dashboardMenuOverlay.classList.remove(
                "active"
            );

        }
    );

}


/* FECHAR AO CLICAR FORA */

if (
    dashboardMenuOverlay &&
    dashboardSideMenu
) {

    dashboardMenuOverlay.addEventListener(
        "click",
        () => {

            dashboardSideMenu.classList.remove(
                "active"
            );

            dashboardMenuOverlay.classList.remove(
                "active"
            );

        }
    );

}
   /* ==============================
   TELA ESTUDOS
============================== */

const studiesScreen =
    document.getElementById("studiesScreen");

const dashboardStudiesButton =
    document.getElementById("dashboardStudiesButton");

const backStudiesButton =
    document.getElementById("backStudiesButton");

const studiesTopicInput =
    document.getElementById("studiesTopicInput");

const studiesLearnButton =
    document.getElementById("studiesLearnButton");


/* ABRIR ESTUDOS */

if (
    dashboardStudiesButton &&
    studiesScreen
) {

    dashboardStudiesButton.addEventListener(
        "click",
        () => {

            document.body.classList.remove(
                "dashboard-open"
            );

            document.body.classList.add(
                "studies-open"
            );

            studiesScreen.classList.add(
                "active"
            );

            window.scrollTo(0, 0);

        }
    );

}


/* VOLTAR PARA O DASHBOARD */

if (
    backStudiesButton &&
    studiesScreen
) {

    backStudiesButton.addEventListener(
        "click",
        () => {

            studiesScreen.classList.remove(
                "active"
            );

            document.body.classList.remove(
                "studies-open"
            );

            document.body.classList.add(
                "dashboard-open"
            );

            window.scrollTo(0, 0);

        }
    );

}



   /* ==============================
   TELA OBJETIVOS
============================== */

const goalsScreen =
    document.getElementById("goalsScreen");

const backGoalsButton =
    document.getElementById("backGoalsButton");

const goalCards =
    document.querySelectorAll(".goal-card");

const currentGoalText =
    document.getElementById("currentGoalText");


/* ABRIR OBJETIVOS */

const dashboardGoalButton =
    document.getElementById("dashboardGoal");

if (dashboardGoalButton) {

    dashboardGoalButton.addEventListener(
        "click",
        () => {

            if (!goalsScreen) return;

            document.body.classList.remove(
                "dashboard-open"
            );

            document.body.classList.add(
                "goals-open"
            );

            goalsScreen.classList.add(
                "active"
            );

            window.scrollTo(0, 0);

        }
    );

}


/* ABRIR PELO MENU */

const sideMenuItems =
    document.querySelectorAll(
        ".side-menu-item"
    );

sideMenuItems.forEach((item) => {

    const title =
        item.querySelector("strong");

    if (
        title &&
        title.textContent.trim() === "Objetivos"
    ) {

        item.addEventListener(
            "click",
            () => {

                if (!goalsScreen) return;

                dashboardSideMenu.classList.remove(
                    "active"
                );

                dashboardMenuOverlay.classList.remove(
                    "active"
                );

                document.body.classList.remove(
                    "dashboard-open"
                );

                document.body.classList.add(
                    "goals-open"
                );

                goalsScreen.classList.add(
                    "active"
                );

                window.scrollTo(0, 0);

            }
        );

    }

});


/* ESCOLHER OBJETIVO */

goalCards.forEach((card) => {

    card.addEventListener(
        "click",
        () => {

            goalCards.forEach((otherCard) => {
                otherCard.classList.remove(
                    "selected"
                );
            });

            card.classList.add(
                "selected"
            );

            const goalTitle =
                card.querySelector("h3");

            if (
                goalTitle &&
                currentGoalText
            ) {

                currentGoalText.textContent =
                    goalTitle.textContent;

            }

            const goal =
                card.dataset.goal;

            localStorage.setItem(
                "studyaizGoal",
                JSON.stringify({
                    id: goal,
                    title:
                        goalTitle
                            ? goalTitle.textContent
                            : ""
                })
            );

        }
    );

});


/* RECUPERAR OBJETIVO */

const savedGoal =
    localStorage.getItem(
        "studyaizGoal"
    );

if (savedGoal) {

    try {

        const goal =
            JSON.parse(savedGoal);

        if (
            goal &&
            goal.id &&
            currentGoalText
        ) {

            currentGoalText.textContent =
                goal.title;

            const savedCard =
                document.querySelector(
                    `.goal-card[data-goal="${goal.id}"]`
                );

            if (savedCard) {
                savedCard.classList.add(
                    "selected"
                );
            }

        }

    } catch (error) {

        console.log(
            "Não foi possível carregar o objetivo."
        );

    }

}


/* VOLTAR PARA O DASHBOARD */

if (
    backGoalsButton &&
    goalsScreen
) {

    backGoalsButton.addEventListener(
        "click",
        () => {

            goalsScreen.classList.remove(
                "active"
            );

            document.body.classList.remove(
                "goals-open"
            );

            document.body.classList.add(
                "dashboard-open"
            );

            window.scrollTo(0, 0);

        }
    );

}
});
/* ========================================
   STUDYAIz — ÁREA DE APRENDIZAGEM
======================================== */

const learningArea = document.getElementById("learningArea");

const backToStudiesButton =
    document.getElementById("backToStudiesButton");

const learningTopic =
    document.getElementById("learningTopic");

const learningIntro =
    document.getElementById("learningIntro");

const learningTitle =
    document.getElementById("learningTitle");

const learningExplanation =
    document.getElementById("learningExplanation");

const learningProgressText =
    document.getElementById("learningProgressText");

const learningProgressBar =
    document.getElementById("learningProgressBar");

const explainAgainButton =
    document.getElementById("explainAgainButton");

const showExampleButton =
    document.getElementById("showExampleButton");

const startPracticeButton =
    document.getElementById("startPracticeButton");

const nextLearningButton =
    document.getElementById("nextLearningButton");


/* ========================================
   MOSTRAR ÁREA DE APRENDIZAGEM
======================================== */

function abrirAprendizagem(topic) {

    if (!learningArea) return;

    const studiesSections = document.querySelectorAll(
        "#studiesScreen .studies-content > section:not(#learningArea)"
    );

    studiesSections.forEach((section) => {
        section.style.display = "none";
    });

    learningArea.classList.add("active");

    learningTopic.textContent = topic;

    learningIntro.textContent =
        "Vamos começar a aprender " +
        topic +
        " passo a passo.";

    learningTitle.textContent =
        "Introdução a " + topic;

    learningExplanation.innerHTML =
        "<p><strong>Vamos começar pelo essencial.</strong></p>" +
        "<p>Primeiro vamos compreender o que é <strong>" +
        topic +
        "</strong>, depois veremos exemplos e, por fim, poderás praticar.</p>" +
        "<p>Esta estrutura será ligada ao Tutor IA para gerar uma explicação completa e personalizada.</p>";

    atualizarProgresso(10);

    localStorage.setItem(
        "studyaizCurrentLearning",
        JSON.stringify({
            topic: topic,
            progress: 10
        })
    );

    window.scrollTo(0, 0);
}


/* ========================================
   PROGRESSO
======================================== */

function atualizarProgresso(valor) {

    if (learningProgressText) {
        learningProgressText.textContent = valor + "%";
    }

    if (learningProgressBar) {
        learningProgressBar.style.width = valor + "%";
    }
}


/* ========================================
   BOTÃO APRENDER
======================================== */

if (studiesLearnButton) {

    studiesLearnButton.addEventListener("click", () => {

        const topic =
            studiesTopicInput.value.trim();

        if (!topic) {

            alert(
                "Escreve primeiro o que queres aprender."
            );

            studiesTopicInput.focus();

            return;
        }

        abrirAprendizagem(topic);

    });

}


/* ========================================
   VOLTAR PARA ESTUDOS
======================================== */

if (backToStudiesButton) {

    backToStudiesButton.addEventListener("click", () => {

        learningArea.classList.remove("active");

        const studiesSections =
            document.querySelectorAll(
                "#studiesScreen .studies-content > section"
            );

        studiesSections.forEach((section) => {
            section.style.display = "";
        });

        window.scrollTo(0, 0);

    });

}


/* ========================================
   EXPLICAR DE OUTRA FORMA
======================================== */

if (explainAgainButton) {

    explainAgainButton.addEventListener("click", () => {

        const topic =
            learningTopic.textContent;

        learningTitle.textContent =
            "Vamos simplificar " + topic;

        learningExplanation.innerHTML =
            "<p><strong>Imagina que estás a conhecer este tema pela primeira vez.</strong></p>" +
            "<p>Em vez de começarmos pelos detalhes, vamos dividir <strong>" +
            topic +
            "</strong> em pequenas partes.</p>" +
            "<p>Primeiro entendemos a ideia principal. Depois acrescentamos os detalhes, exemplos e exercícios.</p>";

    });

}


/* ========================================
   DAR UM EXEMPLO
======================================== */

if (showExampleButton) {

    showExampleButton.addEventListener("click", () => {

        const topic =
            learningTopic.textContent;

        learningTitle.textContent =
            "Exemplo de " + topic;

        learningExplanation.innerHTML =
            "<p><strong>Agora vamos aplicar a ideia.</strong></p>" +
            "<p>Um exemplo relacionado com <strong>" +
            topic +
            "</strong> será apresentado aqui.</p>" +
            "<p>Quando o Tutor IA estiver ligado, esta parte será gerada automaticamente de acordo com o teu nível de ensino.</p>";

    });

}


/* ========================================
   PRATICAR
======================================== */

if (startPracticeButton) {

    startPracticeButton.addEventListener("click", () => {

        alert(
            "A área de exercícios será ligada aqui. ✏️"
        );

    });

}


/* ========================================
   CONTINUAR APRENDIZAGEM
======================================== */

if (nextLearningButton) {

    nextLearningButton.addEventListener("click", () => {

        const topic =
            learningTopic.textContent;

        atualizarProgresso(25);

        learningTitle.textContent =
            "A ideia principal";

        learningExplanation.innerHTML =
            "<p>Agora que já conhecemos a introdução, vamos avançar para a ideia principal de <strong>" +
            topic +
            "</strong>.</p>" +
            "<p>O próximo passo será aprender o conteúdo de forma detalhada, com exemplos e exercícios adaptados ao teu nível.</p>";

        localStorage.setItem(
            "studyaizCurrentLearning",
            JSON.stringify({
                topic: topic,
                progress: 25
            })
        );

    });

}
