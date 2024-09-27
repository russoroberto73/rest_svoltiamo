import express from 'express'
import { Libri } from './db.js'

const app = express()
import cors from "cors"


app.use(cors({
    methods: ['GET'],
  }));

app.get("/", async (req, res) => {
    const libri = await Libri()
    res.send(libri)
})

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send("error")   
})

app.listen(8088, () => {
    console.log('online')    
})

