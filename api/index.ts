import express from 'express'
import cors from 'cors'

const app = express()
const port = 8000

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Express on Vercel");
});



app.listen(port, () => {
    console.log(`🚀 Example app listening at http://localhost:${port}`)
})

module.exports = app;