import { Request, Response } from "express";
import { userService } from "./user.service";

// request and response are handled by controller
const createAdmin = async (req: Request, res: Response) => {
  try {
    //console.log(req.body);
    const result = await userService.createAdmin(req.body);
    res.status(200).json({
      success: true,
      message: "Admin Created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.name || "Something went wrong",
      error: err,
    });
  }
};

export const userController = {
  createAdmin,
};
