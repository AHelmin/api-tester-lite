import express from "express";

import {
  createRequest,
  getAllUserRequests,
  deleteRequestById,
  deleteAllByUserId,
} from "../../controllers/request.controller.js";

const router = express.Router();


router.get("/:id", async (req, res) => {
  try {
    const payload = await getAllUserRequests(req.params.id)
    res.status(200).json({ status: "success", payload })
  }catch(err){
    console.log(err.message)
    res.status(500).json({ status: "error", payload: err.message })
  }
})

router.post("/", async (req, res) => {
  try {
    const payload = await createRequest(req.body)
    res.status(200).json({ status: "success", payload })
  }catch(err){
    console.log(err.message)
    res.status(500).json({ status: "error", payload: err.message })
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const payload = await deleteRequestById(req.params.id)
    res.status(200).json({ status: "success", payload })
  }catch(err){
    console.log(err.message)
    res.status(500).json({ status: "error", payload: err.message })
  }
});

router.delete("/:userid", async (req, res) => {
  try {
    const payload = await deleteAllByUserId(req.params.userid)
    res.status(200).json({ status: "success", payload })
  }catch(err){
    console.log(err.message)
    res.status(500).json({ status: "error", payload: err.message })
  }
});

export default router;
