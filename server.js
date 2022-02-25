import express from "express"
import range from "@ceicc/range"

const app = express()

app.get('*', range({ baseDir: './public' }))

app.listen(3000, () => console.log("http://localhost:3000/"))