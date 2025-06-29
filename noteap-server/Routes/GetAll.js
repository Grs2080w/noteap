import express from "express"
import { GetAllNotes } from "../Db/Functions.js"

const GetAllRouter = express.Router()

GetAllRouter.get("/", async (req, res) => {
	console.log(`[INFO] /all - Fetching all notes`);
	const notes = await GetAllNotes()

	if (notes.length === 0) {
		return res.send([])
	}

	res.send(notes)
})

export default GetAllRouter
