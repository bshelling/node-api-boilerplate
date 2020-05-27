import express from "express"
import cors from "cors"
import { json, urlencoded } from "body-parser"
import { dbconnect } from "../_utils/connection"

const app = express()
app.use(urlencoded({ extended: true }))
app.use(cors())

app.get("/", (req, res) => {
  res.json({ message: "Hello Boilerplate" })
})

app.listen(3000, () => {
  console.log("http://localhost:3000")
})
