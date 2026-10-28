
const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "20kb" }));

// Publica os ficheiros do website.
app.use(express.static(__dirname));

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    service: "StudyAIz 2.0"
  });
});

// Endpoint do Tutor IA.
app.post("/api/chat", async (req, res) => {
  try {
    const message = typeof req.body.message === "string"
      ? req.body.message.trim()
      : "";

    if (!message) {
      return res.status(400).json({
        error: "Escreve uma pergunta para o Tutor IA."
      });
    }

    if (message.length > 4000) {
      return res.status(400).json({
        error: "A pergunta é demasiado longa. Usa até 4000 caracteres."
      });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return res.status(503).json({
        error: "O Tutor IA ainda não está configurado no servidor."
      });
    }

    const aiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
        instructions:
          "És o Tutor IA do StudyAIz, um tutor educativo paciente. " +
          "Responde em português simples, explica passo a passo, " +
          "usa exemplos adequados ao nível escolar quando conhecido " +
          "e ajuda o aluno a compreender, não apenas a decorar.",
        input: message,
        max_output_tokens: 1200
      })
    });

    const data = await aiResponse.json();

    if (!aiResponse.ok) {
      console.error("Erro da API de IA:", aiResponse.status);

      return res.status(502).json({
        error: "O Tutor IA não conseguiu responder. Tenta novamente."
      });
    }

    const reply = (data.output || [])
      .filter(item => item.type === "message")
      .flatMap(item => item.content || [])
      .filter(item => item.type === "output_text")
      .map(item => item.text)
      .join("\n")
      .trim();

    if (!reply) {
      return res.status(502).json({
        error: "Não foi recebida uma resposta válida do Tutor IA."
      });
    }

    return res.json({ reply });
  } catch (error) {
    console.error("Erro no Tutor IA:", error.message);

    return res.status(500).json({
      error: "Ocorreu um erro no servidor. Tenta novamente."
    });
  }
});

// O endpoint de contas será ligado ao Supabase no próximo passo.
app.post("/api/auth", (req, res) => {
  return res.status(503).json({
    error: "O sistema de contas ainda está a ser configurado."
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`StudyAIz 2.0 ativo na porta ${PORT}`);
});
