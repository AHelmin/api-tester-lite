import express from "express";
import { createUser, handleLogin } from "../../controllers/user.controller.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// tokens are encrypted non-invasive data about the user
function createToken(id) {
  return jwt.sign(
    {
      id: id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
}

router.post("/", async (req, res) => {
  try {
    const payload = await createUser(req.body);
    const token = createToken(payload._id);
    res
      .status(200)
      .cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 3600000,
        sameSite: "lax",
      })
      .json({ status: "success", payload });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: "error", payload: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const payload = await handleLogin(req.body.email, req.body.password);
    const token = createToken(payload._id);
    res
      .status(200)
      .cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 3600000,
        sameSite: "lax",
      })
      .json({ status: "success", payload });
  } catch (err) {
    console.log(err.message);
    res.status(401).json({ status: "error", payload: "Could not authorize." });
  }
});

export default router;
