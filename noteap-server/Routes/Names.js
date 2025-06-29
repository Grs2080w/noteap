import express from "express"
import { GetNoteNames } from "../Db/Functions.js"

const NamesRouter = express.Router()

NamesRouter.get("/", async (req, res) => {
	console.log(`[INFO] /names - Fetching all note names`);
	const names = await GetNoteNames()

	if (names.length === 0) {
		return res.send([])
	}

	res.send(names)
})

export default NamesRouter
