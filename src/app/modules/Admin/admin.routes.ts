import express, { NextFunction, Request, Response } from "express";
import { AdminController } from "./admin.controller";

const router = express.Router();

const validateRequest = (req: Request, res: Response, next: NextFunction) => {
  console.log("Checker response");
  next();
};

router.get("/", AdminController.getAllFromDB);

router.get("/:id", AdminController.getByIdFromDB);

router.patch("/:id", validateRequest, AdminController.updateIntoDB);

router.delete("/:id", AdminController.deleteFromDB);

router.delete("/soft/:id", AdminController.softDeleteFromDb);

export const AdminRoutes = router;
