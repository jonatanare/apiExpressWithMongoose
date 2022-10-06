import express from 'express'
import { Mentors } from '../models/mentors.model.js'

const router = express.Router()

// Obtener todos los mentores
router.get('/', async(request, response) => {
    const allMentors = await Mentors.find({})
    response.json({
        success: true,
        data: {
            koders: allMentors
        }
    })
})

// Crear un mentor
router.post('/', async(request, response) => {
    const newMentor = request.body
    const mentorCreated = await Mentors.create(newMentor)
    response.json({
        success: true,
        data: {
            mentorCreated
        }
    })
})

// Obtener un mentor mentor por ID
router.get('/:idMentor', async (request, response ) => {
    const { idMentor } = request.params
    const mentorfinded = await Mentors.findById(idMentor)
    response.json({
        success: true,
        data: {
            mentor: mentorfinded
        }
    })
})

// Actualiar mentor por su ID
router.patch('/:idMentor', async (request, response) => {
    const { idMentor } = request.params
    const newMentor = request.body
    const mentorUpdated = await Mentors.findByIdAndUpdate(idMentor, newMentor, {new: true})

    response.json({
        success: true,
        data: {
            mentorUpdated
        }
    })
})

// Eliminar un mentor por su ID
router.delete('/:idMentor', async (request, response) => {
    const { idMentor } = request.params
    const mentorDeleted = await Mentors.findByIdAndRemove(idMentor)
    response.json({
        success: true,
        data: {
            mentorDeleted
        }
    })
})
export default router