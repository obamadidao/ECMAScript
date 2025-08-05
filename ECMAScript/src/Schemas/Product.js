import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string().min(3, { message: "Tên không hợp lệ" }),
  price: z.number().min(1, { message: "Giá không hợp lệ" }),
  description: z.string(),
  category: z.enum(["Laptop", "SmartPhone"], {
    errorMap: () => ({ message: "Danh mục không hợp lệ" }),
  }),
});