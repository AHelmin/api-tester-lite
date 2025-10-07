import User, { type IUser } from '../models/User';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express'

export async function getUserById(id:string){
    try {
      return await User.findById(id);
    } catch(err){
     const error = err as Error;
     console.error(error.message);
     throw error;
    }
  }
 
  export async function createUser(data: { username: string; email: string; password: string }){
    const hash = await bcrypt.hash(data.password, 10)
    const userData = {...data, password: hash}
    try {
      return await User.create(userData);
    } catch(err){
      const error = err as Error;
     console.error(error.message);
     throw error;
    }
  }

  export async function handleLogin(email: string, pw: string){
    let foundUser 
  
    foundUser = await User.findOne({ email: email })
    if( !foundUser ){
      console.log("couldn't validate email address")
      throw new Error("No user found")
    }
  
    let isVerified = false
    isVerified = await bcrypt.compare(pw, foundUser.password)
    if( !isVerified ){
      console.log("couldn't validate password")
      throw new Error("Password failed")
    }
  
    const { password, ...modifiedUser } = foundUser
    return modifiedUser
  }

  export async function getUserByEmail(email: string){
    try {
      return await User.findOne({email: email});
    } catch(err){
      const error = err as Error;
      console.error(error.message);
      throw error;
    }
  }


  