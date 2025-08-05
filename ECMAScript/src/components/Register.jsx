import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AuthSchema } from "../Schemas/Auth";
import { z } from "zod";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const registerSchema = AuthSchema.extend({
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Mật khẩu không khớp",
  path: ["confirmPassword"],
});

export default function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:3000/register", {
        email: data.email,
        password: data.password,
      });
      navigate("/login");
    } catch (err) {
      setError("Email đã được sử dụng");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Đăng ký</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-medium">Email:</label>
            <input
              type="email"
              {...register("email")}
              className="w-full border border-gray-300 p-2 rounded"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block font-medium">Mật khẩu:</label>
            <input
              type="password"
              {...register("password")}
              className="w-full border border-gray-300 p-2 rounded"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <div>
            <label className="block font-medium">Nhập lại mật khẩu:</label>
            <input
              type="password"
              {...register("confirmPassword")}
              className="w-full border border-gray-300 p-2 rounded"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Đăng ký
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Đã có tài khoản?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
}
