import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

// Routes
import AddRouter from "./Routes/Add.js"
import GetAllRouter from "./Routes/GetAll.js"
import NamesRouter from "./Routes/Names.js"
import DeleteRouter from "./Routes/DeleteAll.js"

dotenv.config()
const app = express()

await mongoose
	.connect(process.env.MONGO_KEY)
	.then(() => {
		console.log("Connected to MongoDB")
	})
	.catch((err) => {
		console.error("Error connecting to MongoDB:", err)
	})

app.use(express.json())
app.use("/add", AddRouter)
app.use("/all", GetAllRouter)
app.use("/names", NamesRouter)
app.use("/delete", DeleteRouter)

app.get("/health", (req, res) => {
	res.send({ status: "ok" })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log("Server is running on http://localhost:3000")
})
