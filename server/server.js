import express from "express";
import cors from 'cors';
import routes from './routes/index.js'
import { connectDB } from "./config/connection.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(routes);

await connectDB();

app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));

