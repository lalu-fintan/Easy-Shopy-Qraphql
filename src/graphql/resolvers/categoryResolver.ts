import Category, { ICategory } from "../../models/categoryMode";

const CategoryResolver = {
  Query: {
    getAllCategory: async () => {
      try {
        const category = await Category.find();
        return category;
      } catch (error: any) {
        throw new Error(error);
      }
    },
    getCategoryById: async (_: any, { id }: { id: string }) => {
      const category = await Category.findById(id);
      return category;
    },
  },
  Mutation: {
    createCategory: async (_: any, { input }: { input: ICategory }) => {
      try {
        const category = await Category.create(input);
        return { message: "category Created successfully" };
      } catch (error: any) {
        throw new Error(error);
      }
    },
    updateCategory: async (
      _: any,
      { id, input }: { id: StaticRange; input: ICategory }
    ) => {
      try {
        const category = await Category.findByIdAndUpdate(id, input, {
          new: true,
        });
        return { message: "category updated successfully" };
      } catch (error: any) {
        throw new Error(error);
      }
    },

    deleteCategory: async (_: any, { id }: { id: string }) => {
      try {
        const category = await Category.findByIdAndDelete(id);
        return { message: "category deleted successfully" };
      } catch (error: any) {
        throw new Error(error);
      }
    },
  },
};

export default CategoryResolver;
