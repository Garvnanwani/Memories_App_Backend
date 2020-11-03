import cors from "cors"
import { config } from "dotenv"
import express from "express"
import postRoutes from "./routes/posts.js"
import connectDB from "./utils/db.js"

config()

const app = express()

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors)

app.use("/posts", postRoutes)

const PORT = process.env.PORT || 5000

connectDB()

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`)
})
