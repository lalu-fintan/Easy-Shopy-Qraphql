import Product, { IProduct } from "../../models/productModel";

const productResolver = {
  Query: {
    // limitation - pagination
    getAllProducts: async (_: any, { first = 10, offSet = 0 }) => {
      try {
        const product = await Product.find().skip(offSet).limit(first);
        return product;
      } catch (error: any) {
        throw new Error(error);
      }
    },
    getProductById: async (_: any, { id }: { id: string }) => {
      try {
        const product = await Product.findById(id);
        return product;
      } catch (error: any) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    createProduct: async (_: any, { input }: { input: IProduct }) => {
      try {
        const existProduct = await Product.findOne({ name: input?.name });

        if (existProduct) {
          throw new Error("Product already exist");
        }
        const product = await Product.create(input);

        return { message: "Product created" };
      } catch (error: any) {
        throw new Error(error);
      }
    },

    updateProduct: async (
      _: any,
      { id, input }: { id: string; input: IProduct }
    ) => {
      try {
        const updatedProduct = await Product.findByIdAndUpdate(id, input, {
          new: true,
        });
        return { message: "product details updated successfull" };
      } catch (error: any) {
        throw new Error(error);
      }
    },

    deleteProduct: async (_: any, { productId }: { productId: string }) => {
      try {
        const deleteproduct = await Product.findByIdAndUpdate(productId);
        return { message: "product deleted successfull" };
      } catch (error: any) {
        throw new Error(error);
      }
    },
  },
};

export default productResolver;
