

# Node Express API Boilerplate

#### src/app/index.js
```
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
```


#### src/_utils/connection.js
```
import mongoose from "mongoose"

export const dbconnect = () => {
  mongoose.connect(
    `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=${process.env.DB_NAME}`,
    { useNewUrlParser: true }
  )
}
```

#### src/tests/index.test.js
```
test("Mic Check, One, Two, One, Two", () => {
  expect(true).toBe(true)
})
```