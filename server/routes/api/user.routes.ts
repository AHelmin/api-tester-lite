import { Router, Request, Response } from 'express';
import { createUser, handleLogin } from '../../controllers/user.controller';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

//jwt create token
function createToken(id: string) {
    return jwt.sign({ id }, process.env.JWT_SECRET as string, {expiresIn: '1h'})
}

router.post('/', async (req: Request, res: Response) => {
    try{
    const payload = await createUser(req.body);
    const token = createToken(payload._id.toString());
    res
    .status(200)
    .cookie('auth_cookie', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 3600000
    })
    .json({ status: 'success', payload} )
} catch(err){
    const error = err as Error;
    console.error(error.message);
    throw error; 
}
});