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


/* ENTRAR NA CONTA */

if (loginSubmitButton) {

    loginSubmitButton.addEventListener("click", () => {

        const loginEmail =
            document.getElementById("loginEmail");

        const loginPassword =
            document.getElementById("loginPassword");


        if (
            !loginEmail.value.trim() ||
            !loginPassword.value
        ) {

            alert(
                "Preenche o teu e-mail e a tua palavra-passe."
            );

            return;

        }


        /* PROCURAR CONTA GUARDADA */

        const savedAccount =
            localStorage.getItem("studyaizAccount");


        if (!savedAccount) {

            alert(
                "Não encontrámos uma conta criada neste dispositivo."
            );

            return;

        }


        const account =
            JSON.parse(savedAccount);


        /* VERIFICAR DADOS */

        if (
            loginEmail.value.trim().toLowerCase()
            !== account.email.toLowerCase()
            ||
            loginPassword.value
            !== account.password
        ) {

            alert(
                "E-mail ou palavra-passe incorretos."
            );

            return;

        }


        /* LOGIN CORRETO */

        localStorage.setItem(
            "studyaizLoggedIn",
            "true"
        );


        alert(
            "Login efetuado com sucesso! 🚀"
        );


        /*
           AQUI VAMOS ABRIR
           A ÁREA PRINCIPAL DO STUDYAIZ
        */

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
});
