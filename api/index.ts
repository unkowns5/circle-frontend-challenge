import express from 'express'
import cors from 'cors'

import ErrorHandler from '../dist/src/utils/ErrorHandler'
import booksRouter from '../dist/src/router/booksRouter'

const app = express()
const port = 8000

app.use(express.json())
app.use(cors())

app.use('/books', booksRouter)

app.get("/", (req, res) => {
    res.send("Express on Vercel");
});

app.use((_req, _res, next) => {
    next(new ErrorHandler('Route not found', 404))
})


app.listen(port, () => {
    console.log(`🚀 Example app listening at http://localhost:${port}`)
})

module.exports = app;