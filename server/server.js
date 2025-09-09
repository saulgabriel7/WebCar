import express from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
const port = process.env.PORT_BACKEND || 5000;

app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/parseQuery", async (req, res) => {
  try {
    const { query } = req.body;
    if (!query) {
      return res.json({ name: "", location: "", price: "", type: "", year: "" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      Transforme a consulta do usuário sobre carros em filtros.
      Retorne apenas JSON no formato:
      { "name": "marca ou modelo", "location": "cidade", "price": "valor inteiro", "type": "tipo de carro", "year": "ano do veículo" }
      Frase do usuário: "${query}"
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    console.log("Resposta Gemini:", text);

    let data = { name: "", location: "", price: "", type: "", year: "" };

    try {
      const match = text.match(/\{[\s\S]*\}/);
      if (match) {
        data = JSON.parse(match[0]);
      }
    } catch (e) {
      console.error("Erro ao parsear JSON:", e);
    }

    res.json({
      name: data.name || "",
      location: data.location || "",
      price: data.price || "",
      type: data.type || "",
      year: data.year || "",
    });

  } catch (err) {
    console.error("Erro geral no endpoint:", err);
    res.status(500).json({ name: "", location: "", price: "", type: "", year: "" });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
