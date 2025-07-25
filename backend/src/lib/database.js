import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    console.log("MongoDB URI:", process.env.MONGO_URI);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}
