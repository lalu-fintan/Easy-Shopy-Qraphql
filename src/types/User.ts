import { Request } from "express";
import mongoose from "mongoose";
export type User = {
  id: mongoose.Types.ObjectId;
  role: string;
  iat: number;
};
export interface RequestCustom extends Request {
  user?: User;
}
