import express from "express"
import SearchIA from "../IA/index.js"
import { AddNote } from "../Db/Functions.js"

const AddRouter = express.Router()

AddRouter.post("/", async (req, res) => {
	const { title } = req.query

	console.log(`[POST] /add - Request received with query:`, title)
	
	const addNote = async () => {
		console.log(`[INFO] /add - Adding note with title: ${title}`);
		
		const text = await SearchIA(title)
		if (!text) {
			return console.log(`[ERROR] /add - No text found for title: ${title} - Skipping note addition.`)
		}
		await AddNote(title, text)
		return console.log(`[INFO] /add - Added note: ${title}`);
	}

	addNote()

	return res.send({ status: `Note about ${title} added` })
})

export default AddRouter
