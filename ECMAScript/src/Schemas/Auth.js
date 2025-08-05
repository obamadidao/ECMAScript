import { z } from "zod";

export const AuthSchema = z.object({
  email: z.string().email({ message: "Email không hợp lệ" }),
  password: z.string().min(6, { message: "Mật khẩu hơn 6 ký tự" }),
});
