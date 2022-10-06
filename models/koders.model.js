import mongoose from "mongoose"

// Schema de Koders

const koderSchema = new mongoose.Schema({
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
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    gender: {
        type: String,
        required: true,
        enum: ['h', 'm'] // que valores son validos para este campo
    },
    isGradruate: {
        type: Boolean,
        default: false // tenga un valor por defecto
    }
})

// crear el modelo
//                          (nombre de la colleccion a la que hacemos referencia, schema)
const Koders = mongoose.model('koders', koderSchema)

export {Koders}