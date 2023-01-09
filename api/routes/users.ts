import express, { Router } from "express";

import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user";
import { verifyToken } from "../utils/verifyToken";

const router: Router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Hello User, you are now logged in!");
});

router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);
router.get("/", getUsers);

export default router;
