import express, { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
  getTodo,
  updateTodo,
} from "../controllers/todo";

const router: Router = express.Router();

router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);
router.get("/:id", getTodo);
router.get("/", getTodos);

export default router;
