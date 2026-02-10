import Request from '../models/Request.js'
  
  

 //TODO: POST new request(tagged with user info)
 export async function createRequest(data){
    try {
      return await Request.create(data);
    } catch(err){
      console.log(err.message)
      throw new Error(err)
    }
  }
 //TODO: GET history(limit sotred history to 10)
export async function getAllUserRequests(userId){
    try {
      return await Request.find({ userId: userId });
    } catch(err){
      console.log(err.message)
      throw new Error(err)
    }
  }
 //TODO: DELETE item/ or delete all?
 export async function deleteRequestById(id){
    try {
      return await Request.findByIdAndDelete(id);
    } catch(err){
      console.log(err.message)
      throw new Error(err)
    }
  }
//Delete all requests by userId
export async function deleteAllByuserId(userId){
    try {
      return await Request.deleteMany({ userId: userId });
    } catch(err){
      console.log(err.message)
      throw new Error(err)
    }
  }