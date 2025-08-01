import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  price: z.number().min(1, { message: "Price is required" }),
  description: z.string(),
  category: z.enum(["Laptop", "SmartPhone"], {
    errorMap: () => ({ message: "Category is required" }),
  }),
});