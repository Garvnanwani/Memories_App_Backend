import mongoose from "mongoose"

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    console.log("Connected to database")
  } catch (err) {
    throw new Error(err)
  }
}

export default connectDB
