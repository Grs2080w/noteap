import { GoogleGenAI } from "@google/genai"
import dotenv from "dotenv"
dotenv.config()

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY })

export default async function SearchIA(title) {
	try {
		const response = await ai.models.generateContent({
			model: "gemini-2.5-flash",
			contents: `Fale detalhadamente sobre ${title} e me entregue o texto em formato Markdown. O texto deve ser claro, conciso e informativo, adequado para ser usado como uma nota de estudo.`,
		})
		return response.text
	} catch (error) {
		console.error(error)
	}
}
