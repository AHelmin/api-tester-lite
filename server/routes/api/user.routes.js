import express from './express'
import { createUser, handleLogin } from '../../controllers/user.controller.js'

const router = express.router();

router.post("/", async (req, res) => {
    try {
      const payload = await createUser(req.body)
      res.status(200).json({ status: "success", payload })
    }catch(err){
      console.log(err.message)
      res.status(500).json({ status: "error", payload: err.message })
    }
  });
  
  router.post("/login", async(req, res) => {
    try {
      const payload = await handleLogin(req.body.email, req.body.password)
      res.status(200).json({ status: "success", payload })
    }catch(err){
      console.log(err.message)
      res.status(401).json({ status: "error", payload: "Could not authorize." })
    }
  });