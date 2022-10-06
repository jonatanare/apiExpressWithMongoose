import mongoose from "mongoose"

// Schema de Koders

const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['h', 'm'] // que valores son validos para este campo
    },
    module: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    }
})

const Mentors = mongoose.model('mentors', mentorSchema)

export { Mentors }