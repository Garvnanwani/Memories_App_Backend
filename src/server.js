import cors from "cors"
import { config } from "dotenv"
import express from "express"
import postRoutes from "./routes/posts.js"
import connectDB from "./utils/db.js"

config({ path: "../.env" })

const app = express()

app.use("/posts", postRoutes)

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors)

const PORT = process.env.PORT || 5000

connectDB()

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})
