import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.ATLAS_URI);

export default mongoose.connection;
