import { Request, Response } from "express";
import { userService } from "./user.service";

// request and response are handled by controller
const createAdmin = async (req: Request, res: Response) => {
  const result = await userService.createAdmin();

  res.send(result);
};

export const userController = {
  createAdmin,
};
