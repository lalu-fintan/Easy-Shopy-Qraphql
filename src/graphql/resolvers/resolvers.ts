import userResolver from "./userResolver";
import productResolver from "./productResolver";
import categoryResolver from "./categoryResolver";

const resolvers = {
  ...userResolver,
  ...productResolver,
  ...categoryResolver,
};

export default resolvers;
