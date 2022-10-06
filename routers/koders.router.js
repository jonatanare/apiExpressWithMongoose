import express from 'express'
import { Koders } from '../models/koders.model.js'



const router = express.Router()


// Obtener todos los koders
router.get('/', async (request, response) => {
    const allKoders = await Koders.find({})
    response.json({
        success: true,
        data: {
            koders: allKoders
        }
    })
})

/**
 * TODO: GET /koders/:id
 */
router.get('/:idKoder', async (request, response) => {
    const {idKoder} = request.params
    const getKoder = await Koders.findById(idKoder)

    response.json({
        success: true,
        data: {
            koder: getKoder
        }
    })
})

/**
 * TODO:  PATCH /koders/:id
 */
router.patch('/:idKoder', async (request, response) => {
    const {idKoder } = request.params
    const newKoder = request.body
    const koderUpdated = await Koders.findByIdAndUpdate(idKoder, newKoder, {new: true})

    response.json({
        success: true,
        data: {
            koderUpdated
        }
    })

})

/**
 * TODO: DELETE /koders/:id
 */

router.delete('/:idKoder', async(request, response) => {
    const { idKoder } = request.params
    const koderDeleted = await Koders.findByIdAndRemove(idKoder)

    response.json({
        success: true,
        data: {
            koderDeleted
        }
    })
})

/**
 * TODO: POST /koders
 */

router.post('/', async(request, response) => {
    const newKoder = request.body
    const koderCreated = await Koders.create(newKoder)
    response.json({
        success: true,
        data: {
            koderCreated
        }
    })
})
export default router