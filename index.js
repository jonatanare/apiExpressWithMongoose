import mongoose from 'mongoose'
import express from 'express'
import * as dotenv from 'dotenv'
import koderRouter from './routers/koders.router.js'
import mentorRouter from './routers/mentors.router.js'

dotenv.config()
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env
console.log(DB_USER, DB_PASSWORD, DB_HOST, DB_NAME);
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
const server = express()

// middleware
server.use(express.json())

// Routers
server.use('/koders', koderRouter)
server.use('/mentors', mentorRouter)

mongoose.connect(URL)
    .then( async (connection) => {
        console.log('Conexión Exitosa!');
        
        server.listen(8080, () => {
            console.log('Server listening on port 8080');
        })
    })
    .catch((error) => {
        console.log('Erros: ', error);
    })

    // iniciar el server - poner a escuchar