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
//TODO: logout controller(likely will need to be handled here since I will be checking loggedIn from backend)
