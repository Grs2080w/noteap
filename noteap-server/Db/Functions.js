import { Notes, NotesName } from "./model.js"

export async function AddNote(title, text) {
	new NotesName({ title }).save()
	const note = new Notes({ title, text })

	try {
		await note.save()
	} catch (err) {
		console.log(`Error saving note: ${err}`)
		return false
	}
	return true
}

export async function GetAllNotes() {
	const notes = await Notes.find({})
	if (notes.length === 0) {
		return []
	} else {
		return notes
	}
}

export async function GetNoteNames() {
	const notes = await NotesName.find({})
	if (notes.length === 0) {
		return []
	} else {
		return notes
	}
}

export async function DeleteAllNotes() {
	await Notes.deleteMany({})
}
