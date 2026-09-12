const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.get("/", (req, res) => {
    res.send("StudyAIz IA está funcionando! 🤖");
});

app.post("/api/chat", async (req, res) => {
    try {
        const { message, profile } = req.body;

        if (!message || !message.trim()) {
            return res.status(400).json({
                error: "Mensagem vazia."
            });
        }

        const contexto = `
Você é o Tutor IA do StudyAIz.

Ajude o aluno de forma clara, paciente e educativa.
Explique os assuntos passo a passo.
Adapte a explicação ao nível escolar do aluno.
Não dê apenas a resposta quando for um exercício: explique como chegar à resposta.

Informações do aluno:
País: ${profile?.country || "não informado"}
Nível: ${profile?.level || "não informado"}
Classe: ${profile?.grade || "não informado"}
Idioma: ${profile?.language || "português"}

Pergunta do aluno:
${message}
`;

        const response = await client.responses.create({
            model: process.env.OPENAI_MODEL || "gpt-5.6-mini",
            instructions: contexto,
            input: message
        });

        res.json({
            reply: response.output_text
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Não foi possível contactar o Tutor IA."
        });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`StudyAIz rodando na porta ${PORT}`);
});a
