
const accountSection = document.getElementById("account");
const accountTitle = document.getElementById("accountTitle");
const accountDescription = document.getElementById("accountDescription");
const accountForm = document.getElementById("accountForm");
const accountName = document.getElementById("accountName");
const nameLabel = document.getElementById("nameLabel");
const accountPassword = document.getElementById("accountPassword");
const accountSubmit = document.getElementById("accountSubmit");
const accountMessage = document.getElementById("accountMessage");
const switchText = document.getElementById("switchText");
const switchAccountButton = document.getElementById("switchAccountButton");
const tutorForm = document.getElementById("tutorForm");
const tutorMessage = document.getElementById("tutorMessage");
const tutorResponse = document.getElementById("tutorResponse");
const tutorSubmit = document.getElementById("tutorSubmit");

let accountMode = "signup";

function openAccount(mode) {
  accountMode = mode;
  accountSection.hidden = false;
  document.body.style.overflow = "hidden";
  accountMessage.textContent = "";

  const isSignup = mode === "signup";

  accountTitle.textContent = isSignup ? "Criar a tua conta" : "Bem-vindo de volta";
  accountDescription.textContent = isSignup
    ? "Prepara o teu espaço de aprendizagem."
    : "Entra para continuares a aprender.";
  accountSubmit.textContent = isSignup ? "Criar conta" : "Entrar";
  nameLabel.hidden = !isSignup;
  accountName.hidden = !isSignup;
  accountName.required = isSignup;
  accountName.value = "";
  accountPassword.autocomplete = isSignup ? "new-password" : "current-password";
  switchText.textContent = isSignup ? "Já tens conta?" : "Ainda não tens conta?";
  switchAccountButton.textContent = isSignup ? "Entrar" : "Criar conta";
  accountPassword.value = "";
}

function closeAccount() {
  accountSection.hidden = true;
  document.body.style.overflow = "";
  accountMessage.textContent = "";
}

document.getElementById("createAccountButton").addEventListener("click", () => {
  openAccount("signup");
});

document.getElementById("loginButton").addEventListener("click", () => {
  openAccount("login");
});

document.getElementById("heroStartButton").addEventListener("click", () => {
  openAccount("signup");
});

document.getElementById("closeAccountButton").addEventListener("click", closeAccount);

accountSection.addEventListener("click", (event) => {
  if (event.target === accountSection) {
    closeAccount();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !accountSection.hidden) {
    closeAccount();
  }
});

switchAccountButton.addEventListener("click", () => {
  openAccount(accountMode === "signup" ? "login" : "signup");
});

accountForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = accountName.value.trim();
  const email = document.getElementById("accountEmail").value.trim();
  const password = accountPassword.value;

  accountMessage.textContent = "A preparar o acesso à tua conta...";
  accountSubmit.disabled = true;

  try {
    const response = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: accountMode,
        name,
        email,
        password
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Não foi possível concluir o pedido.");
    }

    accountMessage.textContent = data.message ||
      "Pedido recebido. Verifica o teu email, se necessário.";
  } catch (error) {
    accountMessage.textContent =
      error.message === "Failed to fetch"
        ? "O serviço de contas ainda não está configurado. Vamos ligá-lo ao Supabase."
        : error.message;
  } finally {
    accountSubmit.disabled = false;
  }
});

tutorForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const message = tutorMessage.value.trim();

  if (!message) {
    return;
  }

  tutorResponse.hidden = false;
  tutorResponse.textContent = "O Tutor IA está a preparar a resposta...";
  tutorSubmit.disabled = true;

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Não foi possível obter uma resposta.");
    }

    tutorResponse.textContent = data.reply ||
      "Não foi recebida uma resposta. Tenta novamente.";
  } catch (error) {
    tutorResponse.textContent =
      "O Tutor IA ainda não está ligado ao servidor. Vamos configurar a ligação no próximo passo.";
  } finally {
    tutorSubmit.disabled = false;
  }
});

document.getElementById("currentYear").textContent =
  new Date().getFullYear();
