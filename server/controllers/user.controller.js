import User from "../models/User.js";
import bcrypt from "bcrypt";

//TODO: need sign up controller
export async function createUser(data) {
  const hash = await bcrypt.hash(data.password, 10);
  const userData = { ...data, password: hash };
  try {
    return await User.create(userData);
  } catch (err) {
    console.log(err.message);
    throw new Error(err);
  }
};
//TODO: need login controller
export async function handleLogin(email, pw){
    let foundUser 
  
    foundUser = await User.findOne({ email: email })
    if( !foundUser ){
      console.log("couldn't validate email address")
      throw new Error("No user found")
    }
  
    let isVerified = false
    //bcrypt compare returns boolean
    isVerified = await bcrypt.compare(pw, foundUser.password)
    if( !isVerified ){
      console.log("couldn't validate password")
      throw new Error("Password failed")
    }
  //remove password before response for security reasons
    const { password, ...modifiedUser } = foundUser
    return modifiedUser
  };
//TODO: logout controller(likely will need to be handled here since I will be checking loggedIn from backend)
