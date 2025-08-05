import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AuthSchema } from "../Schemas/Auth";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(AuthSchema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/login", data);
      localStorage.setItem("token", res.data.accessToken);
      navigate("/");
    } catch (err) {
      setError("Sai email hoặc mật khẩu");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Đăng nhập</h2>
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
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Đăng nhập
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Chưa có tài khoản?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </div>
  );
}
