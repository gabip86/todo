import { Request, Response, NextFunction } from "express";
import Todo from "../models/Todo";

export const createTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newTodo = new Todo(req.body);

  try {
    const savedTodo = await newTodo.save();
    res.status(200).json(savedTodo);
  } catch (error) {
    next(error);
  }
};

export const updateTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    next(error);
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json("Todo has been deleted.");
  } catch (error) {
    next(error);
  }
};

export const getTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
};

export const getTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};
