import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") });

console.log(path.resolve(__dirname, "../.env"));

export const config = {
    mongodbConnectionString: process.env.MONGODB_CONN || ''
}