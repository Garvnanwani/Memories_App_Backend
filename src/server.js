import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import connectDB from "./utils.js/db"

const app = express()

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors)
dotenv.config()

const PORT = process.env.PORT || 5000

connectDB()
