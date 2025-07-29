import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthSchema } from "../Schemas/Auth";

// ⚠️ Nếu dùng JavaScript thì không có kiểu "AuthSchemaType"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(AuthSchema),
  });

  const navigate = useNavigate();

  const handleAuth = async (value) => {
    try {
      const { data } = await axios.post("http://localhost:3000/login", value);
      if (data) {
        localStorage.setItem("token", data.accessToken);
        navigate("/products"); // ✅ Điều hướng đến trang sản phẩm
      }
    } catch (error) {
      alert(error?.response?.data || "Login failed");
    }
  };

  return (
    <div className="w-[500px] mx-auto mt-10 shadow-lg p-10 rounded">
      <h1 className="text-2xl font-bold mb-5 text-center">Login</h1>
      <form onSubmit={handleSubmit(handleAuth)}>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="text-white mt-5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
