import { Schema, model } from "mongoose"

const note = new Schema(
	{
		title: String,
		text: String,
	},
	{
		timestamps: true,
		toJSON: {
			virtuals: true,
			transform: (doc, ret) => {
				ret.id = ret._id.toString()
				delete ret._id
				delete ret.__v
				return ret
			},
		},
	}
)

const Notes = model("Notes", note)

const noteName = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		toJSON: {
			virtuals: true,
			transform: (doc, ret) => {
				ret.id = ret._id.toString()
				delete ret._id
				delete ret.__v
				return ret
			},
		},
	}
)

const NotesName = model("NotesName", noteName)

export { Notes, NotesName }
