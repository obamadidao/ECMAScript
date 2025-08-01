import React, { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductSchema } from "../Schemas/Product";

const FormUpdateProduct = () => {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(ProductSchema),
  });

  const navigate = useNavigate();

  const updateProduct = async (product) => {
    await axios.put(`http://localhost:3000/products/${id}`, product);
    navigate("/products");
  };

  const onSubmit = (value) => {
    updateProduct(value);
  };

  const fetchProduct = async () => {
    const response = await axios.get(`http://localhost:3000/products/${id}`);
    const { name, price, description, category } = response.data;
    setValue("name", name);
    setValue("price", price);
    setValue("description", description);
    setValue("category", category);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <div className="w-[500px] mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5 text-center">Update Product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2">Product Name</label>
          <input
            {...register("name")}
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="price" className="block mb-2">Price</label>
          <input
            {...register("price", { valueAsNumber: true })}
            type="number"
            id="price"
            className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="description" className="block mb-2">Description</label>
          <textarea
            {...register("description")}
            id="description"
            className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="category" className="block mb-2">Category</label>
          <select
            {...register("category")}
            id="category"
            className="bg-gray-50 border border-gray-300 rounded-lg block w-full p-2.5"
          >
            <option value="">Choose a Category</option>
            <option value="Laptop">Laptop</option>
            <option value="SmartPhone">SmartPhone</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
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

export default FormUpdateProduct;
