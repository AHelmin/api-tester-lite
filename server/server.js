import express from "express";
import cors from 'cors';
import routes from './routes/index.js'
import { connectDB } from "./config/connection.js";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cookieParser());

app.use(routes);

await connectDB();

app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));

