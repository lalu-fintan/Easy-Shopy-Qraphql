import { mergeTypeDefs } from "@graphql-tools/merge";
import userTypeDef from "./userTypeDef";
import productTypeDef from "./productTypeDef";
import categoryTypeDef from "./categoryTypeDef";

const typeDefs = mergeTypeDefs([userTypeDef, productTypeDef, categoryTypeDef]);

export default typeDefs;
