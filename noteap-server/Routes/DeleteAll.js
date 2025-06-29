import express from "express"
import { DeleteAllNotes } from "../Db/Functions.js"

const DeleteRouter = express.Router()

DeleteRouter.get("/", async (req, res) => {
	console.log(`[INFO] /delete - Deleted all notes`);
	await DeleteAllNotes()
	res.send({ status: "notes cleared" })
})

export default DeleteRouter
