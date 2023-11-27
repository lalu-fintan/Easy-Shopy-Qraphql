import jwt from "jsonwebtoken";

const generateToken = (id: string, role: string) => {
  return jwt.sign({ id, role }, process.env.SECRET_TOKEN as string, {
    expiresIn: "1d",
  });
};

export default generateToken;
