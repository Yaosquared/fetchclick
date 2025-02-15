import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI as string);
    console.log(`MongoDB Connected: ${db.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
