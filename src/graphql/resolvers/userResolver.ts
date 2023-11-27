import User from "../../models/userModel";
import bcrypt from "bcrypt";
import generateToken from "../../utils/jwt";

interface Message {
  message: string;
}

const userResolver = {
  Query: {
    getUserData: async (_: any, { id }: { id?: string }) => {
      try {
        const user = await User.findById(id).select("userName email");
        return user;
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
    getData: async () => {
      return { message: "hello" };
    },
  },

  Mutation: {
    register: async (
      _: any,
      {
        userName,
        email,
        password,
      }: { userName: string; email: string; password: string }
    ) => {
      try {
        const existUser = await User.findOne({ email });

        if (existUser) {
          throw new Error("Email already Exist");
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
          userName,
          email,
          password: hashPassword,
        });

        const token = generateToken(user?.id, user?.role);

        return { user, token };
      } catch (error: any) {
        throw new Error(error);
      }
    },

    login: async (
      _: any,
      { email, password }: { email: string; password: string }
    ) => {
      try {
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
          const token = generateToken(user?.id, user?.role);
          return { user, token };
        } else {
          throw new Error("Invalid Email or Password");
        }
      } catch (error: any) {
        throw new Error(error.message);
      }
    },

    logout: (): Message => {
      return { message: "Logout successful" };
    },
  },
};

export default userResolver;
