import express from 'express';
import path from 'path';
import { Request, Response } from 'express';

import connectDB from './config/connection';

import routes from './routes';

const PORT =  process.env.PORT || 3301;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

//Make sure if we are in production, paths use the dist folder created by Vite
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'client/dist')));
    app.get('/*', (req: Request, res: Response) => {
        res.sendFile(path.resolve( __dirname, '..', 'client/dist/index.html'))
    });
};

async () => {
    await connectDB();
    app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
}