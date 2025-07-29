import { z } from "zod";

// Định nghĩa schema
export const ProductSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  price: z.number().min(1, { message: "Price is required" }),
  description: z.string(),
  category: z.enum(["Laptop", "SmartPhone"], {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

// Sử dụng để validate dữ liệu
// Ví dụ:
const result = ProductSchema.safeParse({
  name: "MacBook",
  price: 1200,
  description: "Powerful laptop",
  category: "Laptop",
});

if (!result.success) {
  console.log(result.error.issues); // Hiển thị lỗi chi tiết
} else {
  console.log("✅ Valid product:", result.data);
}
