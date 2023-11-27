import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User, RequestCustom } from "../types/User";

const authentication = (
  req: RequestCustom,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("x-auth-token");
  const exclude = ["/graphql/login", "/graphql/register"];
  try {
    if (exclude.includes(req.url)) return next();

    if (!token) {
      throw new Error("you don't have a token");
    } else {
      const decoded = jwt.verify(
        token,
        process.env.SECRET_TOKEN as string
      ) as User;
      req.user = decoded as User;
      next();
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
export default authentication;
