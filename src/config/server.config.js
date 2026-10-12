import express from 'express'
import http from 'http'
import app from '../app.js'
import {connectDB} from './db.config.js'
import {config} from 'dotenv';
config();

const server = http.createServer(app)
const PORT = process.env.PORT || 3000

export const startServer = async ()=>{
    try{
        console.log('port', PORT)
        server.listen(PORT, ()=>{
            console.log(`Server is running on port ${PORT}`)
        })
        await connectDB()
    } catch (error) {
        console.error('Error starting server:', error)
        process.exit(1)
    }
}