import mongoose from "mongoose"

export const dbconnect = () => {
  mongoose.connect(
    `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=${process.env.DB_NAME}`,
    { useNewUrlParser: true }
  )
}
